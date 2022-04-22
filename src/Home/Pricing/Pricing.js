import React from 'react';
import Price from './Price/Price';

const pricing = [
    { id: 1, name: 'Free', fee: 0, month: 'Month to Month' },
    { id: 2, name: 'Personal', fee: 49, month: 'Month to Month' },
    { id: 3, name: 'Exterprise', fee: 79, month: 'Month to Month' },
    { id: 3, name: 'Professional', fee: 99, month: 'Month to Month' },
]


const Pricing = () => {
    return (
        <div id='pricing' className='container'>
            <h2 className='text-primary text-center mt-5'>PRICING <span className='text-success
'>PLAN</span></h2>
            <h4> World is committed to making participation in the event a harassment <br />
                free experience for
                everyone, regardless of level of experience </h4>

            <div className="row">
                {
                    pricing.map(price => <Price
                        key={price.id}
                        price={price}
                    ></Price>)
                }
            </div>
        </div>
    );
};

export default Pricing;