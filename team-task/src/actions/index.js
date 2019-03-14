import 'cross-fetch/polyfill';
import {FETCH_TEAMS, UPDATE_TEAM_MEMBER} from './actionType';
export function getTeams() {
	return dispatch => {
		return fetch("./data/data.json")
			.then(res => res.json())
			.then(res => dispatch({ type: FETCH_TEAMS, payload: res.teams }));
	}
};


export function updateTeamMember(payload) {
	return dispatch => {
		dispatch({ type: UPDATE_TEAM_MEMBER, payload: payload });
	}
};