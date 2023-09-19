import React from 'react';
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className='flex flex-col space-y-4 bg-blue-500  rounded-md py-6 text-white px-6'>
            <h1 className='text-center text-6xl font-bold'>
              <span>{price}</span>  
            </h1>
            <h4 className='text-center text-2xl'>{name}</h4>
            <div className='flex-grow'>
            {
                features.map((feature, id) => <Feature key={id} feature={feature} ></Feature>)
            }
            </div>
            <button className='btn hover:bg-blue-700 hover:text-white bg-blue-200 font-bold border-none text-black w-full' >Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option : PropTypes.object,
}

export default PriceOption;