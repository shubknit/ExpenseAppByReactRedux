import { expenseData } from '../expenseData';
import ExpenseReducer from '../../reducers/expenses';
import moment from 'moment';


test('should set up default state', () => {
	const result = ExpenseReducer(undefined, { type: '@@INIT' });
	expect(result).toEqual([]);
})
test('should set up add expense reducer', () => {
	const expense = {
		id: '4',
		description : 'water bill',
		amount: 100,
		createdAt: moment(0),
		note: 'abc'
	}
	const action = {
		type: 'ADD_EXPENSE',
		expense
	}
	const result = ExpenseReducer(expenseData, action);
	expect(result).toEqual([
		...	expenseData, expense
	])
});

test('should set up remove expense reducer', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '1'
	}
	const result = ExpenseReducer(expenseData, action)
	const data = expenseData.filter( data => data.id !== '1');
	expect(result).toEqual(data);
})


test('should set up edit expense reducer', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '1',
		updates: {
			note: 'sdf',
			amount: 100
		}
	}
	const result = ExpenseReducer(expenseData, action)
	const data = expenseData.map(data => {
			if(data.id == action.id){
				return { ...data, ...action.updates}
			}
			else {
				return data 
			}	
	});
	expect(result).toEqual(data);
})

test('should set up set expense reducer', () => {
	const action = {
		type: 'SET_EXPENSE',
		expense: expenseData
	}
	const result = ExpenseReducer(expenseData, action)
	expect(result).toEqual(expenseData);
})

