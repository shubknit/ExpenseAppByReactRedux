import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { startRemoveExpense } from '../actions/expenses';
import moment from 'moment';

export const ExpenseRow = (props) => {
	const {expenseRowData} = props;
	const date = moment(expenseRowData.createdAt).format('L');

	const remove = () => {
		//props.dispatch(RemoveExpense(expenseRowData.id));
		props.onRemove(expenseRowData.id);
	}
	return(
		<div className = 'list-item'>		
			<Link to = {`edit/${expenseRowData.id}`}>
				<div className ="">
					<div className = "col-1">
						<div> description : { expenseRowData.description } </div>
						<div> Date: { date } </div>
					</div>	
					<div className = "list">
						Amount: { expenseRowData.amount }
					</div>
					
				</div>
			</Link>
			<button className = 'button button--secondary' onClick = {remove}> Remove </button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		onRemove: (expenseId) => dispatch(startRemoveExpense(expenseId))
	}
}
export default connect(undefined, mapDispatchToProps)(ExpenseRow);
