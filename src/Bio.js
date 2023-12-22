import React from 'react';
import './Bio.css'; 

const Bio = ({ name, age, occupation, hobbies, lng}) => {
  return (
    <div className="bio-container">
      <h2>{name}</h2>
      <p><strong>Yaş:</strong> {age}</p>
      <p><strong>Meslek:</strong> {occupation}</p>
      <p><strong>Hobiler:</strong> {hobbies.join(', ')}</p>
      <p><strong>Diller:</strong>{lng}</p>
    </div>
  );
};

export default Bio;
