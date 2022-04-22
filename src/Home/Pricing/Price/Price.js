import React from 'react';

const Price = ({ price }) => {
    const { name, fee, month } = price;

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-3'>
            <div className="card" style={{ width: "16rem" }}>
                <h5 className="card-title fs-2 mt-3 text-primary" >{name}</h5>
                <h2 className='fs-1 text-warning'>${fee}/Mon</h2>
                {/* <img src={} className="card-img-top" alt="..." /> */}
                <div className="card-body">

                    <h5 className="card-title">Get Free wifi</h5>
                    <h5 className="card-title">{month}</h5>
                    <p className="card-text">No Time Restrictions</p>
                    <a href="#" className="btn btn-danger">Enroll Now</a>
                </div>
            </div>
        </div>
    );
};

export default Price;