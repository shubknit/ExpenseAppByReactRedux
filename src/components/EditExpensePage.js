import React from 'react';
import { ExpenseForm } from './ExpenseForm';
import { connect } from 'react-redux';
import { EditExpense } from '../actions/expenses';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';

export const EditExpensePage = (props) => {
	const {expenseList} = props,
	 editExpenseId = props.match.params.id,
	 editExpenseFilteredData= expenseList.filter(data => data.id == editExpenseId),
	 formFilledData = editExpenseFilteredData[0],
	 { description, amount, note, createdAt } = editExpenseFilteredData[0];

	const submit = (data) => {
		//props.dispatch(EditExpense(editExpenseId,data));
		props.onEdit(editExpenseId, data);
		props.history.push('/dashboard');	
	} 

	const removeItem = () => {
		//props.dispatch(RemoveExpense(editExpenseId));
		props.onRemove(editExpenseId);
		props.history.push('/dashboard');
	}

	return(
		<div>
			<div className = 'page-header'>
				<div className ="content-container">
					<h1 className = 'page-header__title'>
						Edit Expense
					</h1>
				</div>
			</div>
			<div className = 'content-container'>
				<ExpenseForm formDataSubmit = {submit} formData = {formFilledData}/>
				<button className = 'button button--secondary' onClick = {removeItem}> Remove </button>
			</div>
		</div>	
		)

}
const mapStateToProps = (state) => {
	return {
		expenseList : state.expenses
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEdit: (expenseId, expense) => dispatch(startEditExpense(expenseId, expense)),
		onRemove: (expenseId) => dispatch(startRemoveExpense(expenseId))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
