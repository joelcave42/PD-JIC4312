const express = require("express");
const router = express.Router();
const { createAccount, createAccountAsSupervisor, getAccounts, loginUser } = require("../controllers/accounts");

// Routes
router.route("/")
    .post(createAccount) // General account creation
    .get(getAccounts);   // Get all accounts

router.route("/supervisor")
    .post(createAccountAsSupervisor); // Supervisor-specific route for account creation

router.route("/login")
    .post(loginUser); // Login route

module.exports = router;
