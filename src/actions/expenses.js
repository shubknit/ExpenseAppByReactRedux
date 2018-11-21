// Action creators 

import database from '../firebase/firebase';

export const AddExpense = (expense) => ({
 	type: 'ADD_EXPENSE',
	expense
})

export const RemoveExpense = (id) => ({
	type: 'REMOVE_EXPENSE',
	id: id
})

export const EditExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})

export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSES',
	expenses
})

export const startAddExpense = (expenseData) => {
	return (dispatch) => {
		const {description = '', note = '', amount = 0 , createdAt = ''} =	expenseData;
		const expense = { description, note, amount, createdAt};

		database.ref('expenses').push(expense).then((ref) => {
			console.log('data saved to firebasee', ref);
			dispatch(AddExpense({
				id: ref.key,
				...expense	
			}))

		}).catch((error) => {
			console.log('something went wrong while adding', error);
		});

	}
}


export const startSetExpenses = () => {
	const expenses = [];
	return (dispatch) => {
		return database.ref('expenses').once('value')
		.then(data => {
			console.log('data rendered successfully', data)
			data.forEach((item) => {
				expenses.push({
					id: item.key,
					...item.val()
				})
			})
		  dispatch(setExpenses(expenses));
		})
		.catch(e => {console.log('something went wrong in fetching data', e)});
	}
}

export const startRemoveExpense = (expenseId) => {
	console.log(expenseId);
	return (dispatch) => {
		return database.ref(`expenses/${expenseId}`).remove()
		.then(data => {console.log('data removed successfully', data)
		 dispatch(RemoveExpense(expenseId))
		})
		.catch(error => console.log('something went wrong in removing', error));
	}
}

export const startEditExpense = (expenseId, expense) => {
	console.log(expenseId, expense);
	return (dispatch) => {
		return database.ref(`expenses/${expenseId}`).update(expense)
		.then(data => {
			console.log('firebase updated successfully', data)
			dispatch(EditExpense(expenseId, expense));
		})
		.catch(error => console.log('something went wrong while updating',error));
	}
}