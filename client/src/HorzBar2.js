import React from 'react';
import './index.scss';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, 
        XAxis,
        YAxis,
        VerticalGridLines,
        HorizontalGridLines,
        HorizontalBarSeries,
        HorizontalBarSeriesCanvas} from 'react-vis';

const data1 = [
    {y: 'ABS', x: 10},
    {y: 'OC', x: 6}
];
const data2 = [
    {y: 'ABS', x:23},
    {y: 'OC', x:5}

];

export default function HorzBar1() {
    return (
        <div>
            <XYPlot height={300} width={300} stackBy="x" yType="ordinal">
                <VerticalGridLines />
                <HorizontalGridLines />
                <YAxis />
                <XAxis />
                <HorizontalBarSeries data={data1} color="red" />
                <HorizontalBarSeries data={data2} color="blue" />
            </XYPlot>
        </div>
    );
}