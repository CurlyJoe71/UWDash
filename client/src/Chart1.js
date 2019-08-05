import React from 'react';
import './index.scss';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';

const data = [
    {x:0, y:8},
    {x:1, y:5},
    {x:2, y:4},
    {x:3, y:7},
    {x:4, y:7}
];

export default function Chart1() {
    return (
        <div>
            <XYPlot height={300} width={300}>
                <LineSeries data={data} />
            </XYPlot>
        </div>
    );
}