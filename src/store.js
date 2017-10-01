import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';


const history = createHistory();
const navMiddleware = routerMiddleware(history);
const composeEnhancers = composeWithDevTools({
    
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
        navMiddleware,
        thunk,
        logger()
    )
    // other store enhancers if any
));

export default store;