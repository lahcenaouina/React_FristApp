import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './assets/styles/index.css';
import {StoreProvider} from "easy-peasy";
import Store from "./components/Store";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StoreProvider store={Store}>
            <Router>
                <Route path="/" component={App}/>
            </Router>
        </StoreProvider>
    </React.StrictMode>
);

