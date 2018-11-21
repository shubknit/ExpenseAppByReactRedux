import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenseData } from '../expenseData';

let historySpy, onEditSpy, onRemoveSpy, wrapper, data;

beforeEach(() => {
	 historySpy = {push: jest.fn()};
	 onEditSpy = jest.fn();
	 onRemoveSpy = jest.fn();
	 data = {
		params: {
			id: '1'
		}
	}
	 wrapper = shallow(<EditExpensePage history = {historySpy}
	 onEdit = {onEditSpy} onRemove = {onRemoveSpy} match = {data} expenseList = {expenseData}/>)
})

test('should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
})

test('should edit the data on EditExpensePage correctly', () => {
	wrapper.find('ExpenseForm').prop('formDataSubmit')(expenseData[0]);
	expect(onEditSpy).toHaveBeenLastCalledWith(expenseData[0].id, expenseData[0])
	expect(historySpy.push).toHaveBeenLastCalledWith('/dashboard');
})

test('should remove the data on EditExpensePage correctly', () => {
	wrapper.find('button').simulate('click');
	expect(onRemoveSpy).toHaveBeenLastCalledWith(data.params.id)
	expect(historySpy.push).toHaveBeenLastCalledWith('/dashboard');
})
