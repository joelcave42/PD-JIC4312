import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FaultList from "./components/FaultList";
import FaultSubmissionForm from "./components/FaultSubmissionForm";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Fault Management */}
        <Route
          path="/faults"
          element={
            <div>
              <FaultSubmissionForm />
              <FaultList />
            </div>
          }
        />

        {/* Redirect any unknown route to the login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
