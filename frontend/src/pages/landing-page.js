import React, { Component } from 'react';
import { routeNode } from 'react-router5'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1> MONSTER MAYHEM </h1>
            </div>
        );
    }
}

export default routeNode('')(LandingPage);
