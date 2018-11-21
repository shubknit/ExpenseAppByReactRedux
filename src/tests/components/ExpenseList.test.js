import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import { expenseData } from '../expenseData';

window.React = React;

test('should render expense list correctly', () => {
	const wrapper = shallow(<ExpenseList expenses = {expenseData}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should render expense list empty with no data ', () => {
	const wrapper = shallow(<ExpenseList expenses = {[]}/>);
	expect(wrapper).toMatchSnapshot();
});