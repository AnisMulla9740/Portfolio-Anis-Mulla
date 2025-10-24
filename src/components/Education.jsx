import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        {/* Section Title */}
        <h2 className="education-title">Education.</h2>

        {/* Education Card */}
        <div className="education-card">
          {/* Icon */}
          <div className="education-icon">
            <svg
              xmlns="https://gcekarad.ac.in/"
              className="education-svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m0-7L3 9m9 5l9-5"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="education-content">
            <h3 className="education-degree">
              Bachelor of Technology in Electronics & Telecommunication
            </h3>
            <p className="education-institute">
              Government College of Engineering, Karad
            </p>
            <p className="education-duration">2022 – 2026</p>
            <p className="education-grade">
              <span className="grade-label">GPA:</span> 9.22
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;