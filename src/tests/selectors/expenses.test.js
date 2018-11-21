import { getVisibleExpenses } from  '../../selectors/expenses';
import moment from 'moment';
import { expenseData } from '../expenseData';

test('should filter by text value', () => {
	const filterData = {
		text: 'e',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}

	const result = getVisibleExpenses(expenseData, filterData);
	expect(result).toEqual([expenseData[2], expenseData[0]]);
})

test('should filter by start date', () => {
	const filterData = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined
	}

	const result = getVisibleExpenses(expenseData, filterData);
	expect(result).toEqual([expenseData[2], expenseData[0]]);
})

test('should filter by end date', () => {
	const filterData = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate:  moment(0).add(4, 'days')
	}

	const result = getVisibleExpenses(expenseData, filterData);
	expect(result).toEqual([expenseData[2], expenseData[0], expenseData[1]]);
})

test('should filter by sort date', () => {
	const filterData = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate:  undefined
	}

	const result = getVisibleExpenses(expenseData, filterData);
	expect(result).toEqual([expenseData[2], expenseData[0], expenseData[1]])
})

test('should filter by sort amount', () => {
	const filterData = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate:  undefined
	}

	const result = getVisibleExpenses(expenseData, filterData);
    expect(result).toEqual([expenseData[2], expenseData[1], expenseData[0]])
})
