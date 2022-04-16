import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    console.log(services);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h3>Services</h3>

            <div className='row row-cols-1 row-cols-md-3 g-4'>

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