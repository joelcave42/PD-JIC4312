const express = require("express");
const router = express.Router();
const { getAllFaults, addFault } = require("../controllers/faults");

router.route("/").get(getAllFaults).post(addFault);

module.exports = router;
