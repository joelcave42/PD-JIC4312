const express = require("express");
const router = express.Router();
const { createAccount, createAccountAsSupervisor, getAccounts } = require("../controllers/accounts");

// Routes without authentication middleware
router.route("/")
    .post(createAccount) // General account creation
    .get(getAccounts);   // Get all accounts

router.route("/supervisor")
    .post(createAccountAsSupervisor); // Supervisor-specific route for account creation

module.exports = router;
