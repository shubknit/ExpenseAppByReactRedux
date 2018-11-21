import React from 'react';
import { ExpenseFilters } from '../../components/ExpenseFilters';
import { shallow } from 'enzyme';
import { filterData, altFilterData } from '../FilterData';
import moment from 'moment';


let onStartDateChangeSpy, onEndDateChangeSpy, onTextChangeSpy, sortByAmountSpy, sortByDateSpy, wrapper;

beforeEach(() => {
	onStartDateChangeSpy = jest.fn();
	onEndDateChangeSpy = jest.fn();
	onTextChangeSpy = jest.fn();
	sortByAmountSpy = jest.fn();
	sortByDateSpy = jest.fn();
	wrapper = shallow(<ExpenseFilters filters = {filterData} onStartDateChange = {onStartDateChangeSpy}
		onEndDateChange = {onEndDateChangeSpy} onTextChange = {onTextChangeSpy} 
		sortByAmount =  {sortByAmountSpy} sortByDate = {sortByDateSpy} 	/>)	
});

test('should render ExpenseFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseFilters correctly with filtered data', () => {
	wrapper.setProps({
		filters: altFilterData
	})
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change in filter', () => {
	const value = 'bills';
	wrapper.find('input').at(0).simulate('change',{
		target: {
			value
		}
	})
	expect(onTextChangeSpy).toHaveBeenLastCalledWith(value)
})

test('should handle sort filter change by date', () => {
	const value = 'date';
	wrapper.find('select').simulate('change',{
		target: {
			value
		}
	})
	expect(sortByDateSpy).toHaveBeenLastCalledWith(value)
})

test('should handle sort filter change by amount', () => {
	const value = 'amount';
	wrapper.find('select').simulate('change',{
		target: {
			value
		}
	})
	expect(sortByAmountSpy).toHaveBeenLastCalledWith(value)
})

test('should handle date change', () => {
	const startDate = moment(0).add(1, 'days');
	const endDate = moment(0).add(3, 'days');
	wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate} );
	expect(onStartDateChangeSpy).toHaveBeenLastCalledWith(startDate);
	expect(onEndDateChangeSpy).toHaveBeenLastCalledWith(endDate);
})

test('should handle focus change', () => {
	const focused = 'endDate';
	wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);
	expect(wrapper.state('focusedInput')).toBe(focused);
})

