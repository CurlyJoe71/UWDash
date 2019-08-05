import React from 'react';
// import './App.css';
import NavBar from './Header';
import Chart1 from './Chart1';
import HorzBar1 from './HorzBar1';

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <div class="bx--grid">

                <div
                    class="bx--row"
                    style={{
                    "height": 200
                }}></div>

                <div class="bx--row">
                    <div class="bx--col-sm-1 bx--col-md-1 bx--col-lg-4"></div>
                    <div class="bx--col-sm-11 bx--col-md-11">
                        <Chart1/>
                    </div>
                </div>

                <div class="bx--row">
                    <div class="bx--col-sm-1 bx--col-md-1 bx--col-lg-4"></div>
                    <div class="bx--col-sm-11 bx--col-md-11 bx--col-lg-8">
                        <HorzBar1/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
