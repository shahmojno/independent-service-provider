import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import gym1 from '../images/banner/gym1.jpg';
import gym2 from '../images/banner/gym2.jpg';
import './Banner.css';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='image'>
                <img
                    className="d-block w-75 mx-auto"
                    src={gym1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>The healthy way of </h2>
                    <p>life company</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75 mx-auto"
                    src={gym2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Health is Wealth</h3>
                    <p>Health is considered the most valuable and precious for every individual</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    );
};

export default Banner;