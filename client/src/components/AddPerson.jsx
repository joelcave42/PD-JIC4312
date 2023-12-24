import React, { useState } from "react";
import "../styles/AddPerson.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusListener,
  resetInputValues,
  updateEmailInputValue,
  updateNameInputValue,
  updatePasswordInputValue,
} from "../features/globalValues/globalSlice";
import { store } from "../store";

const AddPerson = ({}) => {
  const { inputValues, statusListener, currentUpdatePerson } = useSelector((state) => state.globalValues);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const url = "http://localhost:3000/api/v1/people";
    e.preventDefault();

    try {
      const response = await axios.post(url, inputValues);
      store.dispatch(changeStatusListener());
      store.dispatch(resetInputValues());
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="add-person-main">
      <h1 className="app-title">Simple MERN Application</h1>
      <form className="add-person-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Enter person's name"
          value={inputValues.name}
          onChange={(e) => dispatch(updateNameInputValue(e.target.value))}
        />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter person's email"
          value={inputValues.email}
          onChange={(e) => dispatch(updateEmailInputValue(e.target.value))}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Enter person's password"
          value={inputValues.password}
          onChange={(e) => dispatch(updatePasswordInputValue(e.target.value))}
        />
        {currentUpdatePerson === 0 ? (
          <input className="form-submit" type="submit" value="Add Person" />
        ) : (
          <input type="submit" value="Update Person" className="form-submit" />
        )}
      </form>
    </div>
  );
};

export default AddPerson;
