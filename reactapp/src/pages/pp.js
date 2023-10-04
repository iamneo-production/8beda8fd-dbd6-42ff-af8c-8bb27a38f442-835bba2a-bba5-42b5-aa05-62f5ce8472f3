import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/pp.css"; // Import the CSS file

const Pp = () => {
  return (
    <div className="privacy-policy-container">
    <div className="top-text">
      <Link to="/dashboard">Dashboard</Link>
    </div>
      <div className="header">
        <h1>Privacy Policy</h1>
      </div>
      <div className="content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to the Voting App's Privacy Policy. This policy outlines how we collect, use, and protect your personal information.
        </p>
        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and voting preferences when you use our app.
        </p>
        <h2>3. How We Use Your Information</h2>
        <p>
          We use your information to provide and improve our services, as well as to ensure the integrity of the voting process.
        </p>
        {/* Add more privacy policy content as needed */}
      </div>
    </div>
  );
};

export default Pp;
