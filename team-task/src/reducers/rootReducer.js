import {combineReducers} from 'redux';
import teamsReducer from './teams';

const rootReducer = combineReducers({
	teams: teamsReducer,
});

export default rootReducer;