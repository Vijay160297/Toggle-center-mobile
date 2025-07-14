import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './HomeCarousel.css';

// Replace with your image paths
import slide1 from './images/carousel-1.jpeg';
import slide2 from './images/carousel-2.jpeg';
import slide3 from './images/carousel-3.jpeg';

const HomeCarousel = () => {
  return (
    <div className="carousel-wrapper">
      {/* Top purple bar */}
      {/* <div className="top-banner-bar">
        MOBILE PHONES & TABLETS REPAIR SERVICES FOR ALL BRANDS - GET A QUOTE
      </div> */}

      <Carousel fade interval={3000}> {/* 3s auto move */}
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={slide1} alt="Slide 1" />
          <Carousel.Caption className="carousel-caption-custom">
            <h1>Best Deals on<br />Mobile Phones</h1>
            <Button className="shop-btn">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={slide2} alt="Slide 2" />
          <Carousel.Caption className="carousel-caption-custom">
            <h1>Latest Tablets<br />At Low Prices</h1>
            <Button className="shop-btn">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={slide3} alt="Slide 3" />
          <Carousel.Caption className="carousel-caption-custom">
            <h1>Top Accessories<br />Now Available</h1>
            <Button className="shop-btn">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
