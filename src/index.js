import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter'; 
import configureStore from './stores/configureStore';
import { startSetExpenses } from './actions/expenses';
import { SetTextFilter, SetSortFilterByAmount, SetSortFilterByDate } from './actions/filters';
import { getVisibleExpenses } from  './selectors/expenses';
import './firebase/firebase';
import 'react-dates/lib/css/_datepicker.css';

window.React = React;



const store = configureStore();
const jsx = (
	<Provider store = {store}>
		<AppRouter/>
	</Provider>
)

store.subscribe(() => {
	const state = store.getState();
	const currentExpenses = getVisibleExpenses(state.expenses, state.filters);
})


// Adding expenses
//const expenseOne = store.dispatch(AddExpense({description : 'Mc Donals', note: 'burger meal' , createdAt: '02/10/2018', amount: 2000}));
//const expenseTwo = store.dispatch(AddExpense({description : 'Dominos', note: 'Pizza meal' , createdAt: '02/11/2018', amount: 1000}));


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});





