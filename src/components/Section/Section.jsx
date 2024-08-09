import React from 'react';
import './Section.css';
import backgroundImage from '../../assets/background.jpeg'


const StatsCard = () => {
  return (
    <div className="stats-card">
      <div className="background-image" style={{ backgroundImage: `url('${backgroundImage}')` }}>
        <div className="overlay"></div>
        <div className="stats-container">
          <StatItem number="23+" description="YEARS OF EXPERIENCE" />
          <StatItem number="180+" description="SUCCESS STORIES" />
          <StatItem number="2" description="MONTH TURNAROUND" />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ number, description }) => {
  return (
    <div className="stat-item">
      <div className="number">{number}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default StatsCard;
