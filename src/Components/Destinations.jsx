import React from 'react';

const Destinations = () => {
  const destinations = [
    { name: 'Rishikesh', description: 'Adventure and Spirituality' },
    { name: 'Hampi', description: 'The land of ruins and boulders' },
    { name: 'Goa', description: 'Sun, sand, and sea' },
  ];

  return (
    <div className="page-container">
      <h2>Top Budget Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div key={index} className="destination-card">
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
