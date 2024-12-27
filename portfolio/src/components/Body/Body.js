
import React from 'react';
import './Body.css'; // Import CSS file for styling


import sanaportfolio from '../../sanaportfolio.jpg'; // Correct path to the image in src folder
function Body() {
  return (
    <div className="container">
      <div className="image">
        <div className="img">
          <img src={sanaportfolio} alt="Sana Portfolio" className="portfolio-img" />
        </div>
        <div className="about">
          <p>"I am Sana S. Navas, passionate about programming and determined to delve into the exciting world of Machine Learning. Eager to learn and contribute, I am actively seeking opportunities to be part of impactful projects. Let's connect and explore the possibilities together!"</p>
        </div>
      </div>
    </div>
  );
}

export default Body;

