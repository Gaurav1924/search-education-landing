import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Expand your horizons with <br /><span className="highlight">Global Education</span>
        </h1>
        <button className="explore-btn">Explore</button>
      </div>
    </section>
  );
};

export default HeroSection;