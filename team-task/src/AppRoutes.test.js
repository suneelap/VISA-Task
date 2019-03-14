import React from 'react';
import AppRoutes from './AppRoutes';

import {MemoryRouter} from 'react-router-dom';

import Enzyme, {configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import thunk from 'redux-thunk';
import { Provider } from "react-redux";

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore([thunk]);

describe('AppRoutes tests', () => {
	it('Should redirect to Landing Page', () => {
		const store = mockStore({ teams: {teams: []}});
		store.dispatch =  jest.fn();
		const wrapper = mount(<MemoryRouter initialEntries={['/']}>
								<Provider store={store}><AppRoutes/></Provider>
							  </MemoryRouter>);
		expect(wrapper.find('h1').contains("Teams")).toBeTruthy();
		expect(store.dispatch).toHaveBeenCalled();
	});

	it('Should redirect to 404 if path is invalid', () => {
		const store = mockStore({ productList: {products: []}});
		const wrapper = mount(<MemoryRouter initialEntries={['/randompath']}>
								<Provider store={store}><AppRoutes/></Provider>
						      </MemoryRouter>);
		expect(wrapper.find('h1').contains("Teams")).toBeFalsy();
		expect(wrapper.find('h1').contains("Page Not Found")).toBeTruthy();
	});

})