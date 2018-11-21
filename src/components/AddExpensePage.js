import React from 'react';
import { ExpenseHeader } from './ExpenseHeader';
import { ExpenseForm } from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = (props) => {

	const submit = (data) => {
		//props.dispatch(AddExpense(data)); // To make it testable use mapDispatchToProps down below.
		props.onSubmit(data);
		props.history.push('/dashboard');	
	} 
	return(
		<div>
				<ExpenseHeader/>
				<div className ="page-header">
					<div className = 'content-container'>
						<h1 className = 'page-header__title'>Add Expense </h1>
					</div>
				</div>
				<div className = 'content-container'>
					<ExpenseForm formDataSubmit = {submit}/>
				</div>	

		</div>		
		)

}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (expense) => dispatch(startAddExpense(expense))
	}
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
