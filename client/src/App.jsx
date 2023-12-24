import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:3000/api";

function App() {

  const [ apiData, setApiData ] = useState({name: "No name"});

  const fetchData = async () => {
    try{
      // saljemo get(default) request
      const response = await axios(url);
      const data = response.data;
      setApiData(data);
    }catch(error){
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <h1>Hello from React.js { apiData.name }</h1>
  )
}

export default App
