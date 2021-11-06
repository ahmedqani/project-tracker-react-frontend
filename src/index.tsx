import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from "react-redux"
import './index.css';
import {App} from './App';
import {createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducers} from "./redux/reducers";
import {compose} from "redux";


const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
  document.getElementById('root')
);

