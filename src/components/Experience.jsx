import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Electronics Design Intern",
      company: "Nibban Enterprises", 
      date: "Jun 2025 – Jul 2025",
      description: [
        "Designed a 24VDC Industrial Signal Conditioning Unit from scratch to process a 0-8V AC input",
        "Engineered three isolated output stages: a 4-20mA current loop, a 0-10V DC analog voltage, and a buffered AC signal",
        "Implemented noise filtering algorithms and performed hardware validation using oscilloscopes and multimeters",
        "Ensured precise signal proportionality and integrity across all output stages"
      ]
    },
    {
      title: "Subject Matter Expert (IoT)",
      company: "Wirecraft Labs",
      date: "Nov 2024 – Jan 2025",
      description: [
        "Developed end-to-end firmware for an RFID-based Attendance System on ESP32",
        "Implemented RFID reading, data logging to SD card (FAT32), and cloud API integration", 
        "Created PCB layouts and authored comprehensive technical documentation for embedded systems",
        "Applied Python scripting for automated data parsing and system validation"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Section Title - Centered and Highlighted */}
        <div className="title-container">
          <h2 className="experience-title">Work Experience</h2>
        </div>

        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              {/* Timeline */}
              <div className="timeline-section">
                <div className="timeline-date">{exp.date}</div>
                {/* Line */}
                <div className="timeline-line"></div>
                {/* Dot */}
                <div className="timeline-dot"></div>
              </div>

              {/* Content Card - Rectangular */}
              <div className="card-wrapper">
                <div className="experience-card">
                  <div className="card-content">
                    <h3 className="card-title">{exp.title}</h3>
                    <p className="card-company">{exp.company}</p>

                    <ul className="card-list">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

