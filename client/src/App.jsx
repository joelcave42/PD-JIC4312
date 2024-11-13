import { useState } from "react";
import { FaultSubmissionForm, FaultList } from "./components";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [ currentUpdatePerson, setCurrentUpdatePerson ] = useState(0);

  return (
    <div className="container-main">
      <FaultSubmissionForm currentUpdatePerson={currentUpdatePerson} setCurrentUpdatePerson={setCurrentUpdatePerson} />
      <FaultList currentUpdatePerson={currentUpdatePerson} setCurrentUpdatePerson={setCurrentUpdatePerson} />
      <ToastContainer position='top-center' />
    </div>
  )
}


export default App
