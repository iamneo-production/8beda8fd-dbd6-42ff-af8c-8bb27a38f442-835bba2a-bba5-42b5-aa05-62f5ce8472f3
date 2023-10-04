import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/tac.css";

const Tac = () => {
  return (
    <div className="terms-and-conditions-container">
    <div className="top-text">
      <Link to="/dashboard">Dashboard</Link>
    </div>
      <div className="header">
        <h1>Terms and Conditions</h1>
      </div>
      <div className="content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to the Voting App. By using this app, you agree to comply with and be bound by these terms and conditions.
        </p>
        <h2>2. Eligibility</h2>
        <p>
          To use the Voting App, you must be a registered voter and meet the eligibility requirements set forth by your local electoral authority.
        </p>
        <h2>3. User Conduct</h2>
        <p>
          You agree to use the Voting App responsibly and not engage in any activity that violates applicable laws or regulations.
        </p>
        {/* Add more terms and conditions content as needed */}
      </div>
    </div>
  );
};

export default Tac;
