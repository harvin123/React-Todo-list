import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import App from './components/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware()));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
