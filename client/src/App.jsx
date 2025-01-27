import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import FaultSubmissionForm from "./components/FaultSubmissionForm";
import FaultList from "./components/FaultList";
 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  // Load login state from localStorage when the app starts
  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    if (storedLoginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);
 
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Save login state
  };
 
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Remove login state
  };
 
  return (
    <Router>
      <div className="container-main">
        <ToastContainer position="top-center" />
 
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/fault-submission" /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route path="/signup" element={<SignUpPage />} />
 
          {/* Protected Routes */}
          {isLoggedIn ? (
            <>
              <Route
                path="/fault-submission"
                element={
                  <>
                    <FaultSubmissionForm />
                    <FaultList /> {/* Include FaultList here */}
                  </>
                }
              />
            </>
          ) : (
            // Redirect to login if not logged in
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
 
        {/* Logout Button */}
        {isLoggedIn && (
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
        )}
      </div>
    </Router>
  );
}
 
export default App;