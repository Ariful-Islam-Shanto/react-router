import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Phone = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const fakePhoneData = phoneData.map(phone => {
                const obj = {
                    name : phone.phone_name,
                    price : parseInt(phone.slug.split('-')[1]),
                }
                return obj;
            }) 
            setPhones(fakePhoneData);
        })
    },[])

    console.log(phones);
    return (
        <div>
            <BarChart width={1200} height={500} data={phones}>
              <Bar dataKey={"price"} fill='#bada99'></Bar>
              <XAxis dataKey={'name'}></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phone;