import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img } = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`);

    }



    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2> service Name :{name} </h2>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;