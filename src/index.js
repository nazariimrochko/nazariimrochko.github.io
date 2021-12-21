import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App store={store}/>
    </BrowserRouter>, document.getElementById('root')
);

