import React from 'react';
import Courses from '../Courses/Courses'; // Adjust based on your directory structure
import meta from '../../assets/img/meta.jpeg'; // Correct the path and file extension
import { AiOutlineWhatsApp } from 'react-icons/ai'; // Correct import for WhatsApp icon
import './Home.css';
import Community from '../Community/Community'; // Import the Community component
import Plans from '../Plans/Plans';

function Home() {
  const handleClick = () => {
    window.open('https://www.youtube.com/@techflixai', '_blank');
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="home-container">
            <div className="home-content">
              <h2 className="section-title">Learn everything for free</h2>
              <p>Master trending technologies for free</p>
              <div className="home-btns">
                <button className="register-btn" onClick={handleClick}>Get started</button>
                <button className="register-btn" onClick={handleClick}>Watch now</button>
              </div>
            </div>
            <div className="home-img">
              <div className="home-img-wrapper">
                <div className="box-01">
                  <div className="box-img">
                    <img src={meta} alt="Meta" />
                  </div>
                  <div className="whatsapp-container">
                    <h5>500+ students</h5>
                    <AiOutlineWhatsApp color='green' />
                  </div>
                  <div className="support">
                    <h5>Active support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Courses />
      <Community />
      <Plans/> {/* Add the Community component here */}
    </>
  );
}

export default Home;
