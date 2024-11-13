const Fault = require("../models/Fault");

const getAllFaults = async (req, res) => {
    try {
        const faults = await Fault.find({});
        res.status(200).json({ faults, count: faults.length });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addFault = async (req, res) => {
    try {
        const fault = await Fault.create(req.body);
        res.status(201).json({ fault });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getFault = async (req, res) => {
    try {
        const { id: faultID } = req.params;
        const fault = await Fault.findOne({ _id: faultID });
        if (!fault) {
            return res.status(404).json({ msg: `Fault with ID ${faultID} doesn't exist` });
        }
        res.status(200).json({ fault });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateFault = async (req, res) => {
    try {
        const { id: faultID } = req.params;
        const fault = await Fault.findByIdAndUpdate(faultID, req.body, {
            new: true,
            runValidators: true,
        });
        if (!fault) {
            return res.status(404).json({ msg: `Fault with ID ${faultID} doesn't exist` });
        }
        res.status(200).json({ fault });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteFault = async (req, res) => {
    try {
        const { id: faultID } = req.params;
        const fault = await Fault.findOneAndDelete({ _id: faultID });
        if (!fault) {
            return res.status(404).json({ msg: `Fault with ID ${faultID} doesn't exist` });
        }
        res.status(200).json({ msg: "Fault deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllFaults,
    addFault,
    getFault,
    updateFault,
    deleteFault,
};
