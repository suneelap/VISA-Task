
const initState = {
	teams: []
}

export default function teams(state=initState, action) {
	let newState = {};
	switch(action.type){
		case 'FETCH_TEAMS': 
			newState = Object.assign({},  {teams: [...action.payload]})
			return newState;
		break;
		case 'UPDATE_TEAM_MEMBER': 

			newState = Object.assign({},  {teams: [...state.teams]})
			newState.teams.forEach(function(el) {
				if(el.id === action.payload.rosterId){
					el.roster[action.payload.index] = action.payload.teamMember;
				}
			});
		
			return newState;
		break;
		
	}
	
	return state;
}