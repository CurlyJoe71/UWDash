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
    lineWidth1: "2px",
    lineWidth2: "2px",
    lineWidth3: "2px",
    lineWidth4: "2px",
    line1: null,
    line2: null,
    line3: null,
    line4: null,
    hintLabel: null,
    className: "",
    crossHairValues: [],
    data:[
      [{
                x: new Date('2019-06-02'), y: 15
            }, {
                x: new Date('2019-06-03'), y: 2
            }, {
                x: new Date('2019-06-04'), y: 3
            }, {
                x: new Date('2019-06-05'), y: 5
            }],
            [{
              x: new Date('2019-06-02'), y: 24
          }, {
              x: new Date('2019-06-03'), y: 27
          }, {
              x: new Date('2019-06-04'), y: 15
          }, {
              x: new Date('2019-06-05'), y: 11
          }]
        ]
  };
  render() {
    const { lineWidth1, lineWidth3, lineWidth4, hintLabel, data, crossHairValues } = this.state;
    return (
      <div>
        <XYPlot 
        width={900} 
        height={300}
        onMouseLeave={() => {
          this.setState({crossHairValues: []});
          this.setState({hintLabel: null})}}>
          <HorizontalGridLines />
          {/* <VerticalGridLines /> */}
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
            style={{
              strokeWidth: lineWidth1
            }}
            onSeriesMouseOver={() => {
              this.setState({lineWidth1: "6px"});
              this.setState({hintLabel: "ABSAudits"});
              console.log("Mousing Over. This is the event.")
            }}

            onNearestX={(datapoint)=>{
              this.setState({crossHairValues: datapoint});
              this.setState({className: this.className});
              console.log("onNearestX datapoint", {datapoint});
              console.log("className: ", this.className);
              // console.log("onNearestX event", {event})
            }}

            onSeriesMouseOut={() => {
              this.setState({lineWidth1: "2px"});
              // this.setState({hintLabel: null});
              // this.setState({crossHairValues: []});
              // console.log("SeriesMouseOut", {lineWidth})
            }}

            data={data[0]}
          />
          <LineSeries className="second-series" data={null} />
          <LineSeries
            className="third-series"
            style={{
              strokeWidth: lineWidth3,
              strokeDasharray:'7, 3'
            }}
            onSeriesMouseOver={() => {
              this.setState({lineWidth3: "6px"});
              this.setState({hintLabel: "OCAudits"});
              console.log("Mousing Over. This is the event.")
            }}
            onSeriesMouseOut={() => {
              this.setState({lineWidth3: "2px"});
              // this.setState({hintLabel: null});
              // this.setState({crossHairValues: []});
              // console.log("SeriesMouseOut", {lineWidth})
            }}
            data={[{
                x: new Date('2019-06-02'), y: 24
            }, {
                x: new Date('2019-06-03'), y: 27
            }, {
                x: new Date('2019-06-04'), y: 15
            }, {
                x: new Date('2019-06-05'), y: 11
            }]}            
          />
          <LineSeries
            className="fourth-series"
            style={{
              strokeWidth: lineWidth4,
              strokeDasharray: '2 2'
            }}
            onSeriesMouseOver={() => {
              this.setState({lineWidth4: "6px"});
              this.setState({hintLabel: "ABSEndos"});
              console.log("Mousing Over. This is the event.")
            }}
            onSeriesMouseOut={() => {
              this.setState({lineWidth4: "2px"});
              // this.setState({hintLabel: null});
              // this.setState({crossHairValues: []});
              // console.log("SeriesMouseOut", {lineWidth})
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
            {hintLabel && (
            <Crosshair values={[crossHairValues]}>
              <div style={{
                background: 'green',
                fontSize: '1em', 
                color: 'white',
                width: '70px',
                height: '40px',
                borderRadius: '3px',
                padding: '10px'}}>
                <h3>{this.state.hintLabel}</h3>
                <p>{crossHairValues.y}</p>
              </div>
            </Crosshair>
            )}
            {/* {hintLabel && (
            <Hint
                        xType="literal"
                        yType="literal"
                        align={{vertical:"top", horizontal:"left"}}
                        value={
                        hintLabel
                      }>
                        <div style={{background: 'green', padding:'5px', borderRadius:'7px'}}>
                          <h3>Item Type</h3>
                          <p>{hintLabel}</p>
                        </div>
                      </Hint>
                    )} */}
        </XYPlot>
      </div>
    );
  }
}