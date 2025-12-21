import React, { useState } from 'react';
import '../styles/LeadershipCard.css';

function LeadershipCard({ name, position, portraitURL, bio }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className='leadershipImageCard'
        style={{ backgroundImage: `url(${portraitURL})` }}
        onClick={handleCardClick}
      >
        <div>
          <h2>{name}</h2>
          <p>{position}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className='modalOverlay' onClick={closeModal}>
          <div className='modalContent' onClick={(e) => e.stopPropagation()}>
            <h2>{name}</h2>
            <p>{position}</p>
            <p>{bio}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default LeadershipCard;