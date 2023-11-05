import React from 'react';
import  './HeroSection.css';
import banner1 from './images/banner.jpg'


import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

const HeroSection = () => {
  return (
    <div className='hero-section'>
<Carousel> 
        <Carousel.Item> 
          <img 
            className="d-block w-100"
src={banner1}
            alt="One"
          /> 
          <Carousel.Caption> 
            <h3>Label for first slide</h3> 
            <p>Sample Text for Image One</p>
            <Button variant="primary">Explore!</Button>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item> 
        <img className="d-block w-100" src={banner1}
            alt="One"
          /> 
          <Carousel.Caption> 
            <h3>Label for second slide</h3> 
            <p>Sample Text for Image Two</p> 
            <Button variant="primary">Explore!</Button>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item> 
        <img className="d-block w-100" src={banner1}
            alt="One"
          /> 
          <Carousel.Caption> 
            <h3>Label for second slide</h3> 
            <p>Sample Text for Image Two</p> 
            <Button variant="primary">Explore!</Button>
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 

    </div>
  )
}

export default HeroSection