import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/PersonList.css";

const url = "http://localhost:3000/api/v1/people";

const PersonList = ({ statusListener, setStatusListener }) => {

  const [ people, setPeople ] = useState([]);

  const fetchData = async () => {
    
    try{
      // saljemo get(default) request
      const response = await axios(url);
      const data = response.data;
      setPeople(data.people);
    }catch(error){
      console.log(error);
    }
  }

  const deletePerson = async(id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/people/${id}`);
      setStatusListener((currentStatusListener) => !currentStatusListener);
    } catch (error) {
      console.log(error); 
    }

  }

  useEffect(() => {
    fetchData(url);
  }, [statusListener])

  return (
    <div className="person-list-main">
      <ul>
        { people.map(item => (
        <li key={item._id}>
        <p>{ item.name }</p>
        <p>{ item.email }</p>
        <div className="person-list-btn-div">
          <button onClick={() => deletePerson(item._id)}>Delete</button>
          <button>Update</button>
        </div>
      </li>
        )) }
      </ul>
    </div>
  );
};

export default PersonList;
