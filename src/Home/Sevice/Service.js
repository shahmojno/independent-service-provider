import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img } = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`);

    }



    return (
        <div className='service'>
            <img className='w-100 ' src={img} alt="" />
            <h3 className='text-danger'> {name} </h3>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Booking</button>
        </div>
    );
};

export default Service;