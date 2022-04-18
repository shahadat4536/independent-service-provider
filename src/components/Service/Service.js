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


                        <div className="row button w-100">
                            <h3 className='price text-center col-12'>Price:{price}</h3>
                            <Link className='col-12 text-decoration-none text-white' to="/checkout">
                                <button className="btn btn-primary  d-block px-5  mb-3 text-center mx-auto" type="button"> Book Now
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