import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PersonList.css";
import { changeStatusListener } from "../features/globalValues/globalSlice";
import { store } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const url = "http://localhost:3000/api/v1/faults"; // Updated URL to fetch faults data

const FaultList = () => {
  const [faults, setFaults] = useState([]);
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

  return (
    <div className="person-list-main">
      <h2>Fault Submissions</h2>
      <ul>
        {faults.map((fault) => (
          <li key={fault._id}>
            <p>Vehicle ID: {fault.vehicleId}</p>
            <p>Issues:</p>
            <ul>
              {fault.issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
            <div className="person-list-btn-div">
              <button onClick={() => deleteFault(fault._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaultList;
