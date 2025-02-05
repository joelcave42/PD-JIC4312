import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/FaultList.css";
import { changeStatusListener } from "../features/globalValues/globalSlice";
import { store } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const url = "http://localhost:3000/api/v1/faults"; // Updated URL to fetch faults data

const FaultList = () => {
  const navigate = useNavigate()
  const [faults, setFaults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { statusListener } = useSelector((state) => state.globalValues);
  const dispatch = useDispatch();

  const fetchFaults = async () => {
    try {
      const response = await axios.get(url);
      setFaults(response.data.faults);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFault = async (id) => {
    try {
      console.log("Deleting fault with ID:", id);
      await axios.delete(`http://localhost:3000/api/v1/faults/${id}`);
      store.dispatch(changeStatusListener());
      toast.success("Fault successfully deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchFaults();
  }, [statusListener]);

  const buttonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fault-list-main">
      <button className="back-button" onClick={() => navigate("/home")}>Back</button>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button onClick={buttonClick} className="toggle-fault-list-button">
          {isVisible ? "Hide Fault Submissions" : "Show Fault Submissions"}
        </button>
      </div>
      {isVisible && (
        <div>
          <h2>Fault Submissions:</h2>
          <div className="fault-items"> {}
            {faults.map((fault) => (
              <div key={fault._id} className="fault-item">
                <p className="vehicle-id">Vehicle ID: {fault.vehicleId}</p>
                <p className="fault-issues">Issues:</p>
                <ul className="issues-list">
                  {fault.issues.map((issue, index) => (
                    <li key={index} className="issue-item">
                      {issue}
                    </li>
                  ))}
                </ul>
                <div className="fault-actions">
                  <button onClick={() => deleteFault(fault._id)} className="delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FaultList;
