const Account = require('../models/Account');

// Create a new account
const createAccount = async (req, res) => {
    try {
        const { username, password, accountType } = req.body;

        // Regular account creation (for admin or default roles)
        const account = new Account({ username, password, accountType });
        await account.save();
        res.status(201).json({ success: true, data: account });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Supervisor creates a new account
const createAccountAsSupervisor = async (req, res) => {
    try {
        const { username, password, accountType } = req.body;

        // Use static method for supervisor-specific logic
        const newUser = await Account.createUser(req.userId, { username, password, accountType });
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all accounts
const getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find({});
        res.status(200).json({ success: true, data: accounts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createAccount,
    createAccountAsSupervisor,
    getAccounts,
};
