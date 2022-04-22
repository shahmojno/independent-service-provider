import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import gym1 from '../images/banner/gym1.jpg';
import gym2 from '../images/banner/gym2.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={gym1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The healthy way of </h3>
                    <p>life company</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
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