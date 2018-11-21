import { createStore , combineReducers } from 'redux';
import uuid from 'uuid'

// Action creators 

const AddExpense = ({description = '', note = '', amount = 0 , createdAt = ''} = {}) => ({
 	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description, 
		note,
		amount,
		createdAt	
	} 
})

const RemoveExpense = (id) => ({
	type: 'REMOVE_EXPENSE',
	id: id
})

const EditExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})


const SetTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
})


const SetSortFilterByAmount = () => ({
	type: 'SET_SORT_AMOUNT_FILTER'
})

const SetSortFilterByDate = () => ({
	type: 'SET_SORT_DATE_FILTER'
})

const SetStartDate = (startDate) => ({
		type: 'SET_START_DATE',
		startDate
})

const SetEndDate = (endDate) => ({
		type: 'SET_END_DATE',
		endDate
})


// ExpenseReducer

const ExpenseReducerState = [];

const ExpenseReducer = (state = ExpenseReducerState, action) => {

	switch (action.type){
		case 'ADD_EXPENSE' :
			return [...state, action.expense]

		case 'REMOVE_EXPENSE': 
			return state.filter(({id}) => id !== action.id)	

		case 'EDIT_EXPENSE':
				return state.map(expense => {
					if(expense.id === action.id){
						return {...expense,
										...action.updates}
					}
					else {
						return expense;
					}
				})	

		default : 
			return state;
	}
}




// Filter Reducer
const filterReducerState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}

const filterReducer = (state = filterReducerState, action) => {
	switch(action.type){

		case 'SET_TEXT_FILTER': 
				return {...state, text: action.text}

		case 'SET_SORT_AMOUNT_FILTER': 
				return {...state, sortBy: 'amount'}
		case 'SET_SORT_DATE_FILTER': 
				return {...state, sortBy: 'date'}	

		case 'SET_START_DATE':
		 		return {...state, startDate: action.startDate}
		case 'SET_END_DATE':
		 		return {...state, endDate: action.endDate}	
		 		 							
		default: 
				return state;
	}
}

const store = createStore(
	combineReducers({
		expenses: ExpenseReducer,
		filters: filterReducer
	})
)

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
  	if(sortBy === 'date'){
  		return a.createdAt < b.createdAt ? 1 : -1
  	}
  	else if(sortBy === 'amount') {
  		return a.amount < b.amount ? 1 : -1
  	}
  })
}  



store.subscribe(() => {
	const state = store.getState();
	const currentExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(currentExpenses);
})

// Adding expenses
const expenseOne = store.dispatch(AddExpense({description : 'text', note: 'sdf' , createdAt: 4000, amount: 2000}));
const expenseTwo = store.dispatch(AddExpense({description : 'text1', note: 'sdf1' , createdAt: 5000, amount: 1000}));


// Removing expenses

//store.dispatch(RemoveExpense(expenseOne.expense.id));

// Adding expense
//store.dispatch(AddExpense({description : 'text2', note: 'sdf2' , createdAt: '3000', amount: 2000}));

// Editing Expenses

//		store.dispatch(EditExpense(expenseTwo.expense.id, {amount: 1, createdAt: '4000'}));


// Set filters

store.dispatch(SetTextFilter('text'))

store.dispatch(SetSortFilterByAmount());
store.dispatch(SetSortFilterByDate());

store.dispatch(SetStartDate(-100));

store.dispatch(SetEndDate(6000));

