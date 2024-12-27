import React from 'react';
import './AboutUs.css'; // Ensure this path is correct

function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Welcome to TechFlix AI! We are committed to providing high-quality
          educational resources to help you master the latest technologies. Our
          mission is to empower learners with the knowledge and skills they
          need to succeed in the ever-evolving tech industry.
        </p>
        <div className="about-team">
          <h3>Our Team</h3>
          <div className="team-member">
            <img src="path_to_image1" alt="Team Member 1" />
            <p>Jane Doe - Founder</p>
          </div>
          <div className="team-member">
            <img src="path_to_image2" alt="Team Member 2" />
            <p>John Smith - Lead Developer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
