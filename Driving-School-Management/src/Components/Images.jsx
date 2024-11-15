import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Images() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://centralpenn.aaa.com/sites/default/files/styles/large_xl/public/2020-06/driving-instructor-girl.jpg?itok=R5iM1jD4"
         alt=""  height={'600px' } width={'100%'}/>
        {/* <ExampleCarouselImage text="First slide" /> */}
        
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.ridrivingschool.com/web/img/simulator.jpg"
         alt=""  height={'600px' } width={'100%'}/>
        {/* <ExampleCarouselImage text="Second slide" /> */}
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.omegadrivingschool.co.za/wp-content/uploads/2014/08/Parkeerarea-20170206_1657070.jpg"
         alt=""  height={'400px' } width={'100%'}/>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        
      </Carousel.Item>
    </Carousel>
  )
}

export default Images