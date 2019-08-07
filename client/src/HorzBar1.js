import React, {Component} from 'react';
import './index.scss';
import '../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    Hint
} from 'react-vis';

const data1 = [
    {
        x: 'ABS',
        y: 10
    }, {
        x: 'OC',
        y: 6
    }, {
        x: 'ABSEndos',
        y: 200
    }, {
        x: 'OCEndos',
        y: 23
    }
];
const data2 = [
    {
        y: 'ABS',
        x: 23
    }, {
        y: 'OC',
        x: 5
    }

];

export default class HorzBar1 extends Component {
    state = {
        data: data1,
        hoveredBar: null
    }
    render() {
        const {data, hoveredBar} = this.state;

        return (
            <div>
                <XYPlot
                    height={300}
                    width={300}
                    xType="ordinal"
                    onMouseLeave=
                    {() => this.setState({hoveredBar: null})}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <YAxis/>
                    <XAxis/>
                    <VerticalBarSeries
                        data={data}
                        color="red"
                        onValueMouseOver={d => this.setState({hoveredBar: d})}/> 
                        {hoveredBar && (<Hint
                        xType="literal"
                        yType="literal"
                        value={{
                        x: hoveredBar.x,
                        y: hoveredBar.y
                    }}/>)}
                </XYPlot>
            </div>
        );
    }
}