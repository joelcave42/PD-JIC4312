const express = require('express')
const router = express.Router();
const Account = require('../models/Account')

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Validate that account exists
        const account = await Account.findOne({ username });
        if (!account) {
            return res.status(401).json({ success: false, message: 'Incorrect Username or Password'})
        }
    
        // Validate that password matches account
        const isMatch = await account.verifyPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Incorrect Username or Password'})
        }
    
        // Store user ID and User Type in session data
        req.success.userId = account._id;
        req.session.accountType = account.accountType;

        res.status(200).json({ success: true, message: 'Login successful'});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Logout route
router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Logout failed'});
        }
        res.clearCookie('connect.sid');
        res.status(200).json({ success: true, message: 'Logged out successfully' });
    });
});

module.exports = router;