const mongoose = require("mongoose");

const FaultSchema = new mongoose.Schema({
    vehicleId: {
        type: String,
        required: true
    },
    issues: {
        type: [String],
        required: true
    },
    customIssue: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Fault", FaultSchema);
