import React, { useState } from "react";
import './About.css'

function About() {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore);
  }

  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          {showMore ? (
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </>
          ) : (
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting...
            </>
          )}
        </p>
  
        <button className="submit-message" type="button" onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className="about-image"></div>
    </div>
  
  );
}

export default About;
