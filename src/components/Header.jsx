import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1>Anis Mulla</h1>
          <p>Embedded Systems Engineer</p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 9579585265</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>anismulla9740@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Sangli, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;