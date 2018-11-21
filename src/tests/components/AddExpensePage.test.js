import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expenseData } from '../expenseData';


let historySpy, onSubmitSpy, wrapper;

beforeEach(() => {
	 historySpy = { push: jest.fn() };
	 onSubmitSpy =  jest.fn();
	 wrapper = shallow(<AddExpensePage onSubmit = {onSubmitSpy} history = {historySpy}/>);
})

test('should render AddExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
})

test('should submit AddExpensePage data correctly', () => {
	wrapper.find('ExpenseForm').prop('formDataSubmit')(expenseData[0]);
	expect(onSubmitSpy).toHaveBeenLastCalledWith(expenseData[0]);
	expect(historySpy.push).toHaveBeenLastCalledWith('/dashboard')
})