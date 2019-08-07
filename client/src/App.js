import React from 'react';
// import './App.css';
import NavBar from './Header';
import HorzBar1 from './HorzBar1';
import HorzBar2 from './HorzBar2';
import Line1 from './Line1';

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

                    <div class="bx--col-sm-1 bx--col-md-1 bx--col-lg-2"></div>
                    <div class="bx--col-sm-11 bx--col-md-11 bx--col-lg-4">
                        <h1>Active Items</h1>
                        <HorzBar1/>
                    </div>
                    <div class="bx--col-sm-11 bx--col-md-11 bx--col-lg-4">
                        <h1>Items Completed Yesterday</h1>
                        <HorzBar2/>
                    </div>
                </div>

                <div class="bx--row">
                    <div class="bx--col-sm-1 bx--col-md-1 bx--col-lg-2"></div>
                    <div class="bx--col-sm-11 bx--col-md-11 bx--col-lg-10">
                        <h1>Average Resolve Time (days)</h1>
                        <Line1/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
