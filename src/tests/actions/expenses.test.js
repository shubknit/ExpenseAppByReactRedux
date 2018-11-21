import { AddExpense, RemoveExpense, EditExpense, setExpenses } from '../../actions/expenses';

test('should setup remove expense action object', () => {
	const result = RemoveExpense('123')
	expect(result).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123'
	})
})

test('should setup edit expense action object', () => {
	const result = EditExpense('123', {note: 'expense note'})
	expect(result).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123',
		updates: {
			note: 'expense note'
		}
	})
})

test('should setup add expense action object', () => {
	const expenseData = {
		description: 'MCD expesnse',
		amount: 100,
		createdAt: 109500,
		note: 'note'
	}
	const result = AddExpense(expenseData);
	expect(result).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData
		}
	})
})

test('should setup set expense action object', () => {
	const expenseData = {
		description: 'MCD expesnse',
		amount: 100,
		createdAt: 109500,
		note: 'note'
	}
	const result = setExpenses(expenseData);
	expect(result).toEqual({
		type: 'SET_EXPENSES',
		expenses: {
			...expenseData
		}
	})
})