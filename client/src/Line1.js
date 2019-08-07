import React, {Component} from 'react';
import './index.scss';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas
} from 'react-vis';

export default class Line1 extends Component {
  state = {
    useCanvas: false
  };
  render() {

    return (
      <div>
        <XYPlot width={900} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis  
          xType="time" 
          xDomain={[new Date('2019-06-01'), new Date('2019-06-30')]}
          />
          <YAxis />
          <ChartLabel 
            text="Date"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.025}
            yPercent={1.01}
            />

          <ChartLabel 
            text="Days to Resolve"
            className="alt-y-label"
            includeMargin={true}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: 'rotate(-90)',
              textAnchor: 'end'
            }}
            />
          <LineSeries
            className="first-series"
            data={[{
                x: new Date('2019-06-02'), y: 2
            }, {
                x: new Date('2019-06-03'), y: 2
            }, {
                x: new Date('2019-06-04'), y: 3
            }, {
                x: new Date('2019-06-05'), y: 5
            }]}
          />
          <LineSeries className="second-series" data={null} />
          <LineSeries
            className="third-series"
            data={[{
                x: new Date('2019-06-02'), y: 24
            }, {
                x: new Date('2019-06-03'), y: 27
            }, {
                x: new Date('2019-06-04'), y: 15
            }, {
                x: new Date('2019-06-05'), y: 11
            }]}            
            strokeDasharray={'7, 3'}
          />
          <LineSeries
            className="fourth-series"
            style={{
              strokeDasharray: '2 2'
            }}
            data={[{
                x: new Date('2019-06-02'), y: 10
            }, {
                x: new Date('2019-06-03'), y: 12
            }, {
                x: new Date('2019-06-04'), y: 9
            }, {
                x: new Date('2019-06-05'), y: 7
            }]}          />
        </XYPlot>
      </div>
    );
  }
}