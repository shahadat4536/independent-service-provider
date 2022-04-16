import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../image/banner/bermix-studio-b8mwvvFs8Ak-unsplash.jpg'
import image2 from '../image/banner/young-handsome-physician-medical-robe-with-stethoscope.jpg'
import image3 from '../image/banner/portrait-smiling-male-doctor.jpg'
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;