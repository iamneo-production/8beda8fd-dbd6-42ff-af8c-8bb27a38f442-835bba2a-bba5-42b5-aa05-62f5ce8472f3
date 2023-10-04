import React from 'react';
import "../assets/css/faq.css";
import { Link } from 'react-router-dom';

const Faq = () => {
  const faqData = [
    {
      question: 'How do I vote in the upcoming election?',
      answer: 'To vote in the upcoming election, you must be a registered voter. On the election day, visit your designated polling station and cast your vote.'
    },
    {
      question: 'Can I vote online?',
      answer: 'No, online voting is not currently supported. You must vote in person at your designated polling station.'
    },
    {
      question: 'What do I need to bring to the polling station?',
      answer: 'You will need to bring a valid ID, such as a driver\'s license or passport, to the polling station for identification purposes.'
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-container">
    <div className="top-text">
      <Link to="/dashboard">Dashboard</Link>
    </div>
      <h1>Frequently Asked Questions (FAQ)</h1>
      

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
