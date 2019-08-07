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
  Hint,
  Crosshair
} from 'react-vis';

export default class Line1 extends Component {
  state = {
    lineWidth: "2px",
    hoveredLine: null,
    crossHairValues: [],
    data:[{
                x: new Date('2019-06-02'), y: 2
            }, {
                x: new Date('2019-06-03'), y: 2
            }, {
                x: new Date('2019-06-04'), y: 3
            }, {
                x: new Date('2019-06-05'), y: 5
            }]
  };
  render() {
    const { lineWidth, hoveredLine, data } = this.state;
    return (
      <div>
        <XYPlot 
        width={900} 
        height={300}
        onMouseLeave={() => this.setState({crossHairValues: []})}>
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
            {/* {hoveredLine && (<Hint
                        xType="literal"
                        yType="literal"
                        value={{
                        x: hoveredLine
                    }}/>)} */}
          <LineSeries
            className="first-series"
            style={{
              strokeWidth: lineWidth
            }}
            onSeriesMouseOver={() => {
              this.setState({lineWidth: "6px"});
              console.log("Mousing Over. This is the event.")
            }}

            onNearestX={(datapoint, {event})=>{
              this.setState({crossHairValues: data.map(d => d[event])})
              console.log("onNearestX datapoint", {datapoint});
              console.log("onNearestX event", {event})
            }}

            onSeriesMouseOut={() => {
              this.setState([{lineWidth: "2px"}]);
              console.log("SeriesMouseOut", {lineWidth})
            }}

            data={data}
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
            <Crosshair values={this.state.crossHairValues} />
        </XYPlot>
      </div>
    );
  }
}