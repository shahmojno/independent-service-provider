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
            <h4 className='text-danger pt-2 pb-2'> {name} </h4>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Booking</button>
        </div>
    );
};

export default Service;