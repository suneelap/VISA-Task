import TeamRoster from './TeamRoster';
import React from 'react';
import Enzyme, {configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import thunk from 'redux-thunk';

import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([thunk]);

describe('TeamRoster tests', ()=> {

	it('renders TeamRoster Page', ()=> {

		const store = mockStore({ teams: {teams: []}});
		store.dispatch= jest.fn();

		const wrapper = mount(<Provider store={store}><TeamRoster /></Provider>);
		expect(wrapper.find('h1')).toBeDefined();
		expect(wrapper.find('h1').contains("Team Roster")).toBeTruthy();
	});
});