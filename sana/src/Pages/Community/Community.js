import React from 'react';
import './Community.css'; // Make sure to create a CSS file for styling

function Community() {
  return (
    <div className="community-container">
      <div className="community-top">
        <h2 className="community-title">Join Our Community</h2>
        <p className="community-description">
          Be a part of our vibrant community and stay updated with the latest news and opportunities.
        </p>
      </div>
      <div className="community-content">
        <div className="feature">
          <h3>Connect with Experts</h3>
          <p>Engage with industry leaders and professionals in your field.</p>
        </div>
        <div className="feature">
          <h3>Share Your Knowledge</h3>
          <p>Contribute articles, tutorials, and more to help others learn.</p>
        </div>
        <div className="feature">
          <h3>Participate in Events</h3>
          <p>Join webinars, workshops, and networking events.</p>
        </div>
      </div>
    </div>
  );
}

export default Community;
