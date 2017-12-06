import React, { createElement } from 'react';
import { routeNode } from 'react-router5';
import LandingPage from './pages/landing-page';
import Users from './pages/users';
import './App.css';

const components = {
    'landing-page': LandingPage,
    'users':   Users
};

function App(props) {
    const { route } = props;
    const segment = route.name.split('.')[0];

    return createElement(components[segment]);
}

export default routeNode('')(App);
