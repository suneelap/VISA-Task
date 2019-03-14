import {getTeams} from './index';

import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import fetchMock from 'fetch-mock';

import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions tests', () => {
	afterEach(() => {
	    fetchMock.restore()
	})

	it('create action FETCH_TEAMS when fetched response', () => {
		fetchMock.get('/data/data.json', {"teams": [{"name": "name1"},{"name": "name2"}]});
		
	    const expectedActions = [
	      { type: "FETCH_TEAMS", payload: [{"name": "name1"},{"name": "name2"}]}
		];

	    const store = mockStore({ teams: {teams: []}});

	    return store.dispatch(getTeams()).then(()=> {
	    	expect(store.getActions()).toEqual(expectedActions);
	    });
	});

});