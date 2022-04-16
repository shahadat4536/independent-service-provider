import React from 'react';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p>$ {price}</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;