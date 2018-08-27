import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './app/components/App';
import configureStore from './app/store/configureStore';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider> 
, document.getElementById('app')
);