import React from 'react';

const Resources = () => {
  return (
    <div className="digital-commerce-slider">
      <div className="slide">
        <a href="https://www.medicalnewstoday.com/articles/154543" target="_blank" rel="noopener noreferrer">
          <img src='./assets/depression1.jpg' alt="" className="carousel-image" />
        </a>
      </div>
      <div className="slide">
        <a href="https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/" target="_blank" rel="noopener noreferrer">
          <img src='./assets/depression2.jpg' alt="" className="carousel-image" />
        </a>
      </div>
      <div className="slide">
        <a href="https://example.com/link3" target="_blank" rel="noopener noreferrer">
          <img src='./assets/depression3.jpg' alt="" className="carousel-image" />
        </a>
      </div>
    </div>
  );
};

export default Resources;
