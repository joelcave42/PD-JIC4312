import { useState } from "react";
import { AddPerson, PersonList } from "./components";


function App() {

  const [ currentUpdatePerson, setCurrentUpdatePerson ] = useState(0);

  return (
    <div className="container-main">
      <AddPerson currentUpdatePerson={currentUpdatePerson} setCurrentUpdatePerson={setCurrentUpdatePerson} />
      <PersonList currentUpdatePerson={currentUpdatePerson} setCurrentUpdatePerson={setCurrentUpdatePerson} />
    </div>
  )
}

export default App
