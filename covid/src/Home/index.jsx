import React, { Component } from 'react';
import Map from '../Components/TotalCase/Map';
import TotalCase from '../Components/TotalCase/TotalCase';

class Home extends Component {
    render() {
        return (
            <div>
                <TotalCase />
                <Map />
            </div>
        );
    }
}

export default Home;