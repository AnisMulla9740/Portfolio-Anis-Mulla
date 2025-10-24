import React from 'react';

const Hero = () => {
  const name = "Hey, I'm Anis Mulla👋";

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Section */}
        <div className="hero-left">
          {/* Typing animation container */}
          <div className="name-container">
            <h1 className="hero-name">
              {name}
            </h1>
          </div>

          <p className="hero-description">
            Passionate Embedded Systems Engineer, specializing in ARM Cortex-M microcontrollers,
            industrial electronics, and embedded firmware development for automotive and industrial applications.
          </p>

          <a 
            href="https://linkedin.com/in/anis-mulla" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
        </div>

        {/* Right Section - Profile Image */}
        <div className="hero-right">
          <div className="profile-image-container">
            <img
              src="/profile.jpg" // You can replace this with your actual image
              alt="Anis Mulla"
              className="profile-image"
              onError={(e) => {
                // If image fails to load, show a placeholder
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback placeholder */}
            <div className="profile-placeholder">
              <span className="placeholder-text">AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;