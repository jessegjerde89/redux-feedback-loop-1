import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware,} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'


const feedback = {
    feeling : 0,
    understanding : 0,
    support : 0,
    comments : ''
}

const feedbackReducer = (state=feedback , action) => {
    console.log('in feedback reducer', state);
    if(action.type === 'SET_FEEDBACK') {
        return {
            ...state,
            [action.name]: action.payload
        }
    }
    return state;
};

const storeInstance = createStore (
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
)



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
