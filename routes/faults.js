const express = require("express");
const router = express.Router();
const { getAllFaults, addFault, getFault, updateFault, deleteFault } = require("../controllers/faults");

router.route("/").get(getAllFaults).post(addFault);
router.route("/:id").get(getFault).patch(updateFault).delete(deleteFault); // Ensure this line exists

module.exports = router;
