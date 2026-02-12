import React from 'react';
import './About.css';

const differentiators = [
  {
    title: "Expert Team",
    desc: "Led by Laxmi and skilled stylists who genuinely care about your transformation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Premium Products",
    desc: "We use only professional-grade products that deliver real results",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: "Personalized Service",
    desc: "No rush, no compromise – we give each client the time and attention they deserve",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  },
  {
    title: "Affordable Luxury",
    desc: "Top-quality services at prices that respect your budget",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    )
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-visual">
          <div className="illustration-wrapper">
             <svg width="400" height="500" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="150" fill="url(#paint0_linear)" fillOpacity="0.2"/>
                <path d="M200 100C160 100 130 130 130 170C130 210 160 240 200 240C240 240 270 210 270 170C270 130 240 100 200 100Z" stroke="#8B4789" strokeWidth="2"/>
                <path d="M130 170C100 170 80 200 80 250C80 350 150 420 200 420C250 420 320 350 320 250C320 200 300 170 270 170" stroke="#FF69B4" strokeWidth="2"/>
                <circle cx="200" cy="170" r="10" fill="#FF69B4" opacity="0.4"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="50" y1="50" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF69B4"/>
                    <stop offset="1" stopColor="#DDA0DD"/>
                  </linearGradient>
                </defs>
             </svg>
             <div className="about-decoration floating-1">★</div>
             <div className="about-decoration floating-2">♥</div>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title text-left">Why Laxmi Beauty Zone?</h2>
          <p className="about-intro">
            More than just a salon – we're your personal beauty sanctuary in the heart of Nagpur.
          </p>
          
          <div className="differentiators-list">
            {differentiators.map((item, index) => (
              <div key={index} className="diff-item">
                <div className="diff-icon">{item.icon}</div>
                <div className="diff-text">
                  <h3 className="diff-title">{item.title}</h3>
                  <p className="diff-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="about-bottom-line">
            From everyday pampering to special occasion glam, we're here to make you look and feel your absolute best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
