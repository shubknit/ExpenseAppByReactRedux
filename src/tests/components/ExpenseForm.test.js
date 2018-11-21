import moment from 'moment';
import React from 'react';
import { ExpenseForm } from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import { expenseData } from '../expenseData';

test('should render ExpenseForm correctly', () => {
 	const wrapper = shallow(<ExpenseForm/>);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data correctly', () => {
 	const wrapper = shallow(<ExpenseForm formData = {expenseData[0]}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'expense'
 	const wrapper = shallow(<ExpenseForm/>);
  	wrapper.find('input').at(0).simulate('change',{
 		target:  {
 			value
 		},
 	});
	expect(wrapper.state('description')).toBe(value);
});

test('should set amount on input change', () => {
	const value = '100.2'
 	const wrapper = shallow(<ExpenseForm/>);
  	wrapper.find('input').at(1).simulate('change',{
 		target:  {
 			value
 		},
 	});
	expect(wrapper.state('amount')).toBe(value);
});


test('should set note on input change', () => {
	const value = 'note';
 	const wrapper = shallow(<ExpenseForm/>);
  	wrapper.find('textarea').simulate('change',{
 		target:  {
 			value
 		},
 	});
	expect(wrapper.state('note')).toBe(value);
});

test('should call prop onsubmit on form submit', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm formData = {expenseData[0]} formDataSubmit = {onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
    	preventDefault: () => {}
    })
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenseData[0].description,
		amount: expenseData[0].amount,
		createdAt: 0,
		note: expenseData[0].note
	})
})

test('should set new date on date change', () => { 
	const now = moment();
	const wrapper = shallow(<ExpenseForm/>)
	wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
}) 

test('should set focus on focus change', () => { 
	const focused = true;
	const wrapper = shallow(<ExpenseForm/>)
	wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
	expect(wrapper.state('focused')).toBe(focused);
}) 