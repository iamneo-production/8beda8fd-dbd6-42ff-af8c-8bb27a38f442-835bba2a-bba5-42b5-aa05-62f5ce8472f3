import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/votehere.css';
import bb from '../assets/images/bb.png';
import got from '../assets/images/got.png';
import mh from '../assets/images/mh.png';
import st from '../assets/images/st.png';

const partiesData = [
  { id: 1, name: 'Breaking Bad', image: bb },
  { id: 2, name: 'Game Of Thrones', image: got },
  { id: 3, name: 'Money Heist', image: mh },
  { id: 4, name: 'Stranger Things', image: st },
];

function VoteHere() {
  const initialVotes = JSON.parse(localStorage.getItem('votes')) || {};
  const [votes, setVotes] = useState(initialVotes);
  const [votedParty, setVotedParty] = useState(null);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = (partyId) => {
    if (votedParty === null) {
      const updatedVotes = { ...votes };
      updatedVotes[partyId] = (updatedVotes[partyId] || 0) + 1;
      setVotes(updatedVotes);
      setVotedParty(partyId); // Set the votedParty to the selected party
      window.alert("Thanks for voting!");
    } else if (votedParty === partyId) {
      // Show a message when the user tries to vote for the same party
      alert("You can't vote for the same party again.");
    } else {
      // You can show an error message or handle the case where the user tries to vote for another party.
      // For simplicity, let's alert a message here.
      alert("You have already voted for a party. You can't vote for multiple parties.");
    }
  };
  

  const handleReset = () => {
    // Reset all vote counts to 0 and clear the votedParty
    const resetVotes = {};
    partiesData.forEach((party) => {
      resetVotes[party.id] = 0;
    });
    setVotes(resetVotes);
    setVotedParty(null);
  };

  return (
    <div className="vote-container">
      <div className="toptext">
        <Link to="/dashboard"><p>Dashboard</p></Link>
      </div>
      
      <div className="party-list">
        {partiesData.map((party) => (
          <div className="party" key={party.id}>
            <img src={party.image} alt={`${party.name} Logo`} />
            <h2>{party.name}</h2>
            <p>Votes: {votes[party.id] || 0}</p>
            <button onClick={() => handleVote(party.id)}>Vote</button>
          </div>
        ))}
      </div>

      <div className="results-container">
        <h2>Vote Results:</h2>
        <ul className="results-list">
          {partiesData.map((party) => (
            <li key={party.id}>
              {party.name}: {votes[party.id] || 0} votes
            </li>
          ))}
        </ul>
        <p className="results-total">
          Total Votes: {Object.values(votes).reduce((total, count) => total + count, 0)}
        </p>
        <button onClick={handleReset} className="reset-button">
          Reset Votes
        </button>
      </div>
    </div>
  );
}

export default VoteHere;
