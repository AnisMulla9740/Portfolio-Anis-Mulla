import React from 'react';

const About = () => {
  const aboutSections = [
    {
      title: 'Embedded Systems Development',
      icon: '🧩',
      description: 'ARM Cortex-M microcontrollers (STM32, ESP32), FreeRTOS, firmware development, device drivers (I²C, SPI, UART, CAN), and hardware debugging using oscilloscopes and logic analyzers.',
    },
    {
      title: 'Electronics Design',
      icon: '🔧',
      description: 'PCB design with EAGLE, signal conditioning circuits, 4-20mA current loops, 0-10V interfaces, industrial standards, and hardware validation for automotive and industrial applications.',
    },
    {
      title: 'IoT & Communication Protocols',
      icon: '📡',
      description: 'ESP32-based IoT systems, RFID integration, cloud API connectivity, BLE, UART, SPI, I2C, CAN, LIN protocols, and end-to-end embedded solution development.',
    },
    {
      title: 'Programming & Tools',
      icon: '💻',
      description: 'Embedded C, C, C++, Python, STM32CubeIDE, Keil uVision, STM32CubeMX, Git, and automated testing with Python scripting for system validation.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Side */}
          <div className="about-left">
            <h1 className="about-title">About me.</h1>
            <p className="about-description">
              I'm a dedicated B.Tech student in Electronics and Telecommunication at Government College 
              of Engineering, Karad, with hands-on experience in embedded systems development for 
              automotive and industrial applications. Skilled in Embedded C, FreeRTOS, ARM Cortex-M 
              microcontrollers, and communication protocols including CAN, LIN.
            </p>
            <p className="about-description">
              Recently, I designed a 24VDC Industrial Signal Conditioning Unit with isolated output stages 
              and developed end-to-end firmware for RFID-based systems. I enjoy turning concepts into 
              functional embedded solutions, working with STM32, ESP32, and various industrial interfaces.
            </p>
            <a href="#contact" className="contact-button">
              <span className="button-icon">✉️</span>
              Contact me
            </a>
          </div>

          {/* Right Side */}
          <div className="about-right">
            {aboutSections.map((section, index) => (
              <div
                key={index}
                className="about-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="about-card-title">
                  <span className="about-icon">{section.icon}</span>
                  {section.title}
                </h2>
                <p className="about-card-description">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;