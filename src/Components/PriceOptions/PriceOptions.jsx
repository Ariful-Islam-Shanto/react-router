import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const gymPriceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Unlimited cardio equipment usage",
            "Locker room access",
            "Fitness assessment"
          ],
          "price": "$29.99 per month"
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "features": [
            "Access to gym facilities",
            "Unlimited cardio equipment usage",
            "Locker room access",
            "Fitness assessment",
            "Group fitness classes",
            "Personal trainer consultation (1 session)"
          ],
          "price": "$49.99 per month"
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "features": [
            "Access to gym facilities",
            "Unlimited cardio equipment usage",
            "Locker room access",
            "Fitness assessment",
            "Group fitness classes",
            "Personal trainer consultation (2 sessions)",
            "Access to sauna and spa"
          ],
          "price": "$79.99 per month"
        }
      ]
      
    return (
        <div className='px-12'>
            <h1 className='text-5xl text-white text-center'>Best prices for gym</h1>
        <div className='grid grid-cols-3 gap-6 py-4'>
            {gymPriceOptions.map(price => <PriceOption key={price.id} option={price} ></PriceOption>)}
        </div>
        </div>
    );
};

export default PriceOptions;