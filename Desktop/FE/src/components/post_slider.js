import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem' 
import '../slider.css';
import img1 from '../assets/k.png';
import img2 from '../assets/l.png';
import img3 from '../assets/m.png';

function MyCarousel() { 
  return ( 
    <Carousel className='slide_banner' variant='dark' interval={'99999'}>
        <CarouselItem className='banner_ad' >
            <img className='banner_img' alt="ad" src = {img1} /> 
            <Carousel.Caption> 
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem className='banner_ad'>
            <img className='banner_img' alt="ad" src = {img2} /> 
            <Carousel.Caption> 
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem className='banner_ad' >
            <img className='banner_img' alt="ad" src = {img3} /> 
            <Carousel.Caption> 
            </Carousel.Caption>
        </CarouselItem>
    </Carousel> 
  );
}

export default MyCarousel;
