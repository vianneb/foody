import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import css and bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

//import sample restaurant data
import SAMPLE_RESTAURANTS from './data/restaurants_seattle.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App restaurantList={SAMPLE_RESTAURANTS}/>
        </BrowserRouter>
    </React.StrictMode>
);
