import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaultSubmissionForm, FaultList } from "./components";
import { ToastContainer, toast } from "react-toastify";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  const [currentUpdatePerson, setCurrentUpdatePerson] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="container-main">
        <ToastContainer position="top-center" />

        {/* Define Routes */}
        <Routes>
          {/* Login Route */}
          {!isLoggedIn && (
            <Route
              path="/"
              element={<LoginPage onLogin={handleLogin} />}
            />
          )}

          {/* Sign-Up Route */}
          <Route path="/SignUpPage" element={<SignUpPage />} />

          {/* Main Application Route */}
          {isLoggedIn && (
            <Route
              path="/"
              element={
                <>
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "25px",
                    }}
                  >
                    <button
                      style={{
                        background: "#973c12",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "3px",
                        border: "none",
                        cursor: "pointer",
                        margin: "10px 0",
                      }}
                      onClick={handleLogout}
                    >
                      Sign Out
                    </button>
                  </div>
                  <FaultSubmissionForm />
                  <FaultList />
                </>
              }
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;