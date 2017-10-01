import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Events from './components/Events/Events.jsx';
import EventForm from './components/Events/EventForm';

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

class App extends React.Component{
    render(){
        return "Hello, World";
    }
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
            <Route path='/' component={App} />
                <Route path='/events' component={Events}/>
                <Route path='/events/add' component={EventForm}/>
            </div> 
        </ConnectedRouter> 
    </Provider>, 
    document.getElementById('app')
);