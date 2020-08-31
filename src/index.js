import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';

import store from './store'
import history from './history'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}> {/*<BrowserRouter> */}
            <Route component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

