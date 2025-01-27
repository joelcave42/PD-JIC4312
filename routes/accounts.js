const express = require("express");
const router = express.Router();
const { createAccount, createAccountAsSupervisor, getAccounts } = require("../controllers/accounts");
const { isAuthenticated, isSupervisor } = require("../middleware/authMiddleware");

// Routes with authentication and authorization middleware
router.route("/")
    .post(isAuthenticated, createAccount) // Only authenticated users can create accounts
    .get(isAuthenticated, getAccounts);   // Only authenticated users can fetch all accounts

router.route("/supervisor")
    .post(isAuthenticated, isSupervisor, createAccountAsSupervisor); // Only supervisors can create accounts via this route

module.exports = router;
