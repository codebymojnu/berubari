import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis
} from "recharts";

const SSCbarGraph = () => {
    const data = [
        {
            name: '2011',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '2012',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '2013',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '2014',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '2015',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '2016',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '2017',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '2018',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '2019',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '2020',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '2021',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <h3 style={{ marginTop: '80px', borderBottom: '0.5px solid gray', color: '#FFB038', paddingBottom: '5px' }}>SSC A+ Statistics</h3>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                    <YAxis />
                    <Bar dataKey="pv" fill="#FFB038" background={{ fill: '#252525' }} />
                </BarChart>
            </div>
        </div>
    );
};

export default SSCbarGraph;