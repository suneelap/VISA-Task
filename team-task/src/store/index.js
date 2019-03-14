import {createStore, applyMiddleware} from 'redux';
import reduxthunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(reduxthunk));
export default store;