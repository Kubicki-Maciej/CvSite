import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';

import randomImg from '../Images/Logo/jsShield.png'

export default function ControlledCarousel({index, setIndex}) {
  return (
    <Carousel 
    
    interval={null} className="bg-background-dark bg-opacity-50 p-2 rounded m-2" activeIndex={index} onSelect={setIndex} style={{color:"black"}}>
      <Carousel.Item
      style={{color:"grey"}}>
        <img  className="d-block h-100" src={randomImg} alt='random'/>
        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  className="d-block h-100" src={randomImg} alt='random'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  className="d-block h-100" src={randomImg} alt='random'/>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}