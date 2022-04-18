import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    console.log(services);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div id='services'>
            <h2 className='my-5 text-center text-info'>My Services</h2>

            <div className='row row-cols-1 row-cols-md-3 g-4 mx-auto mt-5 services '>

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;