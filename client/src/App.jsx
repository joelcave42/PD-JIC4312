import { useState } from "react";
import { AddPerson, PersonList } from "./components";


function App() {

  const [ statusListener, setStatusListener ] = useState(false);

  return (
    <div className="container-main">
      <AddPerson statusListener={statusListener} setStatusListener={setStatusListener} />
      <PersonList statusListener={statusListener} setStatusListener={setStatusListener} />
    </div>
  )
}

export default App
