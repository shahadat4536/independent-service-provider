import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div>

            <div className="col">
                <div style={{ height: "650px" }} className="card ">
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text text-justify">{description}</p>
                        <h3 className='price'>$ {price}</h3>

                        <div class="d-grid gap-2 button w-100">
                            <Link className='text-decoration-none text-white' to="/checkout">
                                <button class="btn btn-primary  d-block px-5  mb-3 text-center mx-auto w-75" type="button"> Book Now
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;