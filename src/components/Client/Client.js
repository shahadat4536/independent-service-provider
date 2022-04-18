import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Client = () => {
    const data = [
        {
            "month": "Jun",
            "client": 150
        },
        {
            "month": "Feb",
            "client": 120
        },
        {
            "month": "Mar",
            "client": 200
        },
        {
            "month": "Apr",
            "client": 162
        }
    ]
    return (
        <div className='mt-5 container'>

            <div className='mx-auto' >
                <h2 className='mx-auto text-center text-info mb-5'>Monthly Client Handle Data</h2>
                <LineChart className='container mx-auto' width={380} height={250} data={data}>
                    <Line dataKey={'client'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>
            </div>
        </div>
    );
};

export default Client;