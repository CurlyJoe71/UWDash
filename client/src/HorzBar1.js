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
                        {hoveredBar && (
                        <Hint
                        xType="literal"
                        yType="literal"
                        align={{horizontal: 'left', vertical: 'top'}}
                        value={{
                        hoveredBar
                    }}>
                        <div style={
                            {background: 'green', 
                            padding:'5px', 
                            borderRadius:'7px'}}>
                          <h3>Type: {hoveredBar.x}</h3>
                          <p>#Items: {hoveredBar.y}</p>
                        </div>
                    </Hint>
                    )}
                </XYPlot>
            </div>
        );
    }
}