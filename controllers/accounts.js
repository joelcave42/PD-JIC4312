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

const createAccountAsSupervisor = async (req, res) => {
    try {
        // Temporarily bypass the supervisor check
        const { username, password, accountType } = req.body;

        // Validate that the account type is not another supervisor
        if (accountType === "supervisor") {
            return res.status(400).json({ success: false, message: "Cannot create another supervisor" });
        }

        const account = new Account({ username, password, accountType });
        await account.save();

        res.status(201).json({ success: true, data: account });
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
