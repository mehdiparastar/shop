import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import confugureStore from './store/configureStore'
import defaultState from './store/defaultState'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Counter from './components/counters'

const store = confugureStore(defaultState)

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
