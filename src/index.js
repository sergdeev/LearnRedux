import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import MainComponent from './components/MainComponent'
import {rootReducer} from './store/reducers'

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';


const store = createStore(rootReducer);



ReactDOM.render(<Provider store = {store}><MainComponent /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
