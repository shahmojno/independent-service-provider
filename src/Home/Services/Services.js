import React from 'react';
import grit from '../../images/service/grit.png';
import zumba from '../../images/service/Zumba.png';
import fusion from '../../images/service/Fusion.png';
import Service from '../Sevice/Service';
import './Services.css'


const services = [
    { id: 1, name: 'Grit Strength', img: grit },
    { id: 2, name: 'Zumba Athletic', img: zumba },
    { id: 3, name: 'Fusion Yoga', img: fusion },
]

const Services = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='services-title mt-5'>Our Service</h2>
            <div className="services-container">
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