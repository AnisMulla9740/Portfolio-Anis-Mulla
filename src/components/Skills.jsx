import React from 'react';

const Skills = () => {
  const techData = [
    {
      title: 'Programming Languages',
      icon: '💻',
      items: ['Embedded C', 'C', 'C++', 'Python', 'Arduino IDE'],
    },
    {
      title: 'Microcontrollers & Processors',
      icon: '🔧',
      items: ['STM32 (ARM Cortex-M4)', 'ESP32', '8051', 'Raspberry Pi', 'Arduino'],
    },
    {
      title: 'RTOS & Embedded Concepts',
      icon: '⚡',
      items: ['FreeRTOS', 'Data Structures', 'OOP', 'Algorithms', 'Firmware Development'],
    },
    {
      title: 'Communication Protocols',
      icon: '📡',
      items: ['UART', 'SPI', 'I2C', 'CAN', 'LIN', 'Bluetooth'],
    },
    {
      title: 'STM32 Peripherals',
      icon: '🎛️',
      items: ['GPIO', 'NVIC', 'Timers', 'PWM', 'DMA', 'ADC', 'DAC', 'RTC'],
    },
    {
      title: 'Development Tools',
      icon: '🛠️',
      items: ['STM32CubeIDE', 'Keil uVision', 'STM32CubeMX', 'EAGLE PCB', 'VS Code', 'Git'],
    },
    {
      title: 'Testing & Validation',
      icon: '🔍',
      items: ['Oscilloscope', 'Multimeter', 'Logic Analyzer', 'Hardware Debugging', 'Signal Analysis'],
    },
    {
      title: 'Industrial Standards',
      icon: '🏭',
      items: ['4-20mA Current Loops', '0-10V Interfaces', 'Signal Conditioning', 'PCB Design', 'Prototyping'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">Technical Skills.</h1>
        <p className="skills-description">
          Over the years, I have worked with a variety of technologies in embedded systems, 
          electronics design, and firmware development for automotive and industrial applications.
        </p>

        <div className="skills-grid">
          {techData.map((section, index) => (
            <div
              key={index}
              className="skill-card"
            >
              <h2 className="skill-card-title">
                <span className="skill-icon">{section.icon}</span>
                {section.title}
              </h2>
              <div className="skill-items">
                {section.items.map((item, i) => (
                  <span
                    key={i}
                    className="skill-item"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;