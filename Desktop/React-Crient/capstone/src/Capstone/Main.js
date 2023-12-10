import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import ExampleCarouselImage1 from './components/k.png';
import ExampleCarouselImage2 from './components/l.png';
import ExampleCarouselImage3 from './components/m.png';
import './Main.css'
function Main() {
  return (
    <div className='Main_div'>
        <Carousel className='slide_banner' variant='dark' interval={'3000'}>
            <CarouselItem className='banner_ad' >
                <img className='banner_img' src = {ExampleCarouselImage1} /> 
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem className='banner_ad'>
                <img className='banner_img' src = {ExampleCarouselImage2} /> 
                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem className='banner_ad' >
                <img className='banner_img' src = {ExampleCarouselImage3} /> 
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    </div>
    
  );
}

export default Main;