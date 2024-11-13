import React, { useState } from "react";
import "../styles/FaultSubmissionForm.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusListener,
  resetInputValues,
} from "../features/globalValues/globalSlice";
import { store } from "../store";
import { toast } from "react-toastify";

const FaultSubmissionForm = () => {
  const { inputValues } = useSelector((state) => state.globalValues);
  const dispatch = useDispatch();

  // Predefined fault options for the 5988 vehicle form
  const predefinedFaults = ["Flat Tire", "Cracked Wheel", "Dead Battery", "Blown Transmission"];
  const [selectedFaults, setSelectedFaults] = useState([]);

  // Handle checkbox selection
  const handleCheckboxChange = (fault) => {
    setSelectedFaults((prevSelected) =>
      prevSelected.includes(fault)
        ? prevSelected.filter((item) => item !== fault)
        : [...prevSelected, fault]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/v1/faults";
    const faultData = {
      vehicleId: "A50", // Placeholder; replace with dynamic data if needed
      issues: selectedFaults,
    };
    
    try {
      await axios.post(url, faultData);
      store.dispatch(changeStatusListener());
      setSelectedFaults([]);
      toast.success("Fault submission successful!");
    } catch (error) {
      toast.error("Error submitting faults: " + error.message);
    }
  };

  return (
    <div className="fault-submission-main">
      <button className="back-button">Back</button>
      <div className="vehicle-id-box">Vehicle: A50</div>
      <form className="fault-submission-form" onSubmit={handleSubmit}>
        <h2>Troubleshoot</h2>
        <div className="checkbox-group">
          {predefinedFaults.map((fault, index) => (
            <label key={index} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedFaults.includes(fault)}
                onChange={() => handleCheckboxChange(fault)}
              />
              {fault}
            </label>
          ))}
        </div>
        <button type="submit" className="form-submit">Verify and Submit</button>
      </form>
    </div>
  );
};

export default FaultSubmissionForm;
