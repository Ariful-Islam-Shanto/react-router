import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='text-left flex gap-2 items-center'>
                <AiFillCheckCircle></AiFillCheckCircle>
                {feature}
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object,
}


export default Feature;