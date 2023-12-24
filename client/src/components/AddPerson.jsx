import React from "react";
import "../styles/AddPerson.css";
import axios from "axios";

const AddPerson = ({ statusListener, setStatusListener }) => {

    const handleSubmit = async (e) => {
        const url = "http://localhost:3000/api/v1/people";
        e.preventDefault();
        const person = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        try{
            const response = await axios.post(url, person);
            setStatusListener((currentStatusListener) => !currentStatusListener);
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.password.value = "";
          }catch(err){
            console.log(err.response);
          }

          

    }

  return (
    <div className="add-person-main">
        <h1 className="app-title">Simple MERN Application</h1>
      <form className="add-person-form" onSubmit={handleSubmit}>
        <input className="form-input" type="text" name="name" placeholder="Enter person's name" />
        <input className="form-input" type="email" name="email" placeholder="Enter person's email" />
        <input className="form-input" type="password" name="password" placeholder="Enter person's password" />
        <input className="form-submit" type="submit" value="Add Person" />
      </form>
    </div>
  );
};

export default AddPerson;
