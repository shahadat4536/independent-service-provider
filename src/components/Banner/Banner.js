import React from 'react';
import image1 from '../../image/banner/New Project.png'
const Banner = () => {
    return (
        <div>
            <div className='container'>
                <img className='img-fluid  mx-auto w-75 d-block' src={image1} alt="" srcset="" />
            </div>
            <div></div>
        </div>
    );
};

export default Banner;