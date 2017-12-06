import React from 'react';
import { RouterProvider } from 'react-router5';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureRouter from './router';

const router = configureRouter();

router.start(() => {
    ReactDOM.render(
        <RouterProvider router={router}><App /></RouterProvider>,
        document.getElementById('root')
    );
});
registerServiceWorker();
