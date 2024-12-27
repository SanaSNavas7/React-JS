import React from 'react';
import './Footer.css'; // Make sure the path is correct
import footer from '../../assets/img/footer.png';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-wrapper'>
          <div className='footer-box'>
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="Footer Logo" />
              </div>
              <h2>TechFlix AI</h2>
            </div>
            <p>
              Embrace learning for the future, helping students, and providing assistance.
            </p>
          </div>
          <div className='footer-box'>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">Our Programs</a></li>
              <li><a href="#">Our Plan</a></li>
              <li><a href="#">Become a Member</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support Us</a></li>
            </ul>
          </div>
          <div className='footer-box'>
            {/* Additional content like social media links or newsletter signup can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
