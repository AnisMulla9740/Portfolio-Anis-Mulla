import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Energy-Efficient Smart Wheel Hoe",
      period: "01/2024 – Current",
      description: "Developing an embedded system for an autonomous, electric-powered weeding machine to promote sustainable farming. The STM32-based system controls DC motors and provides real-time monitoring via TouchGFX HMI.",
      tags: ["STM32", "TouchGFX", "Embedded C", "DC Motors", "UART", "Power Management"],
      image: "/images/smart-hoe.png" // Add image path
    },
    {
      title: "Voice Command Recognizer - STM32F4",
      period: "09/2023 – 12/2023", 
      description: "A low-latency embedded system capable of recognizing voice commands for hands-free operation. Processes audio via STM32F4's ADC using DMA and custom I2C drivers for external audio codec.",
      tags: ["STM32F4", "Embedded C", "DMA", "I2C", "ADC", "Voice Processing"],
      image: "/images/voice-command.png" // Add image path
    },
    {
      title: "Autonomous Floor Cleaning Robot",
      period: "06/2023 – 08/2023",
      description: "A self-navigating robot that optimizes cleaning path and avoids obstacles. Uses FreeRTOS on ESP32 for concurrent task execution with ultrasonic sensors and path-planning algorithms.",
      tags: ["ESP32", "FreeRTOS", "Ultrasonic Sensors", "Motor Control", "Path Planning"],
      image: "/images/cleaning-robot.png" // Add image path
    },
    {
      title: "RFID-based Attendance System",
      period: "11/2024 – 01/2025",
      description: "Developed end-to-end firmware for an RFID-based attendance system on ESP32, handling RFID reading, data logging to SD card (FAT32), and cloud API integration.",
      tags: ["ESP32", "RFID", "SD Card", "FAT32", "Cloud API", "Python"],
      image: "/images/rfid-system.png" // Add image path
    },
    {
      title: "Industrial Signal Conditioning Unit",
      period: "06/2025 – 07/2025",
      description: "Designed a 24VDC Industrial Signal Conditioning Unit from scratch with isolated output stages including 4-20mA current loop, 0-10V DC analog voltage, and buffered AC signal.",
      tags: ["Signal Conditioning", "4-20mA", "0-10V", "PCB Design", "Noise Filtering"],
      image: "/images/signal-conditioning.png" // Add image path
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <h1 className="projects-title">Recent Projects</h1>
          <p className="projects-subtitle">
            Explore some of my recent projects below. For more, visit my GitHub profile.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-content">
                {/* Title, Period and Image */}
                <div className="project-header">
                  <div className="project-title-section">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-period">{project.period}</p>
                  </div>
                  {project.image && (
                    <div className="project-image-container">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                        onError={(e) => {
                          // If image fails to load, show a placeholder
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;