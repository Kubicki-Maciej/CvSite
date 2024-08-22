import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';

import randomImg from '../Images/Logo/jsShield.png'

export default function ControlledCarousel({index, setIndex, listOfObjects}) {
  return (
    <Carousel 
    interval={null} className="bg-background-dark bg-opacity-50 p-2 rounded m-2 object-fit-cover" activeIndex={index} onSelect={setIndex} style={{color:"black"}}>
      {listOfObjects.map((object, index)=>(
        <Carousel.Item
        style={{color:"grey"}}>
          <img  className="d-block w-100  " src={object.image} alt={object.alt}/>
          <Carousel.Caption >
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}