import { combineReducers } from 'redux';

import eventsReducer from './components/Events/reducer';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    events: eventsReducer,
    form: formReducer,
    routing: routerReducer
});

export default rootReducer;