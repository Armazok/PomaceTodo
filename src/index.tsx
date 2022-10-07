import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import AppRedux from "./ReduxProgramming/AppRedux";
import {store} from "./ReduxProgramming/ReduxState/AppReduxStore";


ReactDOM.render(
    <Provider store={store}>
        <AppRedux />
    </Provider>,  document.getElementById('root'));


