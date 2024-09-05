import React, { useState } from "react";
import "./PopularUniversities.css"; 

const universities = [
  {
    name: "University of Wollongong",
    logo: require("../../public/Algoma-University.jpg"),
    fee: "$30,000",
    duration: "3 years",
    location: "Australia",
  },
  {
    name: "Central Queensland University",
    logo: require("../../public/Deakin_University.jpg"),
    fee: "$25,000",
    duration: "4 years",
    location: "Australia",
  },
  {
    name: "Deakin University",
    logo: require("../../public/University-of-Bristol.jpg"),
    fee: "$28,000",
    duration: "4 years",
    location: "Australia",
  },
  {
    name: "University of Essex",
    logo: require("../../public/Selkirk_College.jpg"),
    fee: "$27,000",
    duration: "3 years",
    location: "UK",
  },
  {
    name: "University of New South wales",
    logo: require("../../public/University-of-New-South-Wales.jpg"),
    fee: "$27,000",
    duration: "3 years",
    location: "UK",
  },
];

const PopularUniversities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === universities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? universities.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="universities-section">
      <div className="universities-header">
        <h2>
          Our Popular <br /> <span>Search Universities</span>
        </h2>
      </div>

      <div className="universities-carousel">
        <button className="carousel-btn left" onClick={handlePrev}>
          <svg viewBox="0 0 24 24">
            <path
              d="M15 19l-7-7 7-7"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div
          className="universities-container"
          style={{ transform: `translateX(-${currentIndex * 310}px)` }}
        >
          {universities.map((university, index) => (
            <div className="university-card" key={index}>
              <div
                className="image-container"
                style={{ backgroundImage: `url(${university.logo})` }}
              >
                <img
                  src={university.logo}
                  alt={`${university.name} logo`}
                  className="university-logo"
                />
              </div>
              <h3>{university.name}</h3>
              <p>
                <i className="location-icon"></i> {university.location}
              </p>
              <p className="duration">Duration: {university.duration}</p>
              <p className="fee">Fee: {university.fee}</p>
              <button className="view-course-btn">View Courses</button>
            </div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={handleNext}>
          <svg viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" fill="none" stroke="black" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PopularUniversities;
