import { useState } from "react";
import { FaultSubmissionForm, FaultList } from "./components";
import { ToastContainer, toast } from 'react-toastify';
import LoginPage from "./components/LoginPage";


function App() {
  const [ currentUpdatePerson, setCurrentUpdatePerson ] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn == false) {
    return(
      <div className="container-main">
        <LoginPage onLogin={handleLogin}/>
        <ToastContainer position='top-center' />
      </div>
    );
  } else {
    return (
      <div className="container-main" >
        <div style={{
          position:'absolute',
          top:'10px',
          right:'25px',
        }}>
        <button
          style={{
            background: '#973c12',
            color:'white',
            padding:'10px 20px',
            borderRadius: '3px',
            border:'none',
            cursor:'pointer',
            margin:'10px 0'
          }}
          onClick={handleLogout}
        >
          Sign Out
        </button>
        </div>
        <FaultSubmissionForm />
        <FaultList />
        <ToastContainer position='top-center' />
      </div>
    );
  }
}


export default App
