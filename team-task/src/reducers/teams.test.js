import teamsReducer from './teams';

describe('teams reducer', () => {

	it('should return initial state', () => {

		expect(teamsReducer(undefined, {})).toEqual({
			teams: []
		});
	});

	it('should get teams in state', () => {

		expect(teamsReducer(undefined, {type:'FETCH_TEAMS', payload:['team1']})).toEqual({
			teams: ['team1']
		});
	});

	// it('should return updated state', () => {

	// 	expect(teamsReducer(undefined, {type:'UPDATE_TEAM_MEMBER'})).toEqual({
	// 		teams: []
	// 	});
	// });

});