import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text text-justify">{description}</p>
                        <h3>$ {price}</h3>

                        <div class="d-grid gap-2">
                            <button class="btn btn-primary " type="button">

                                <Link className='text-decoration-none text-white' to="/checkout">Book Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;