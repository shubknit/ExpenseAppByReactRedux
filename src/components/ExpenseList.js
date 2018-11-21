import ExpenseRow  from './ExpenseRow';
import { connect } from 'react-redux';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpenseList = ({expenses}) => 

		 (
		 	
		  <div className = "content-container">
				<div className = 'list-header'>
					<div> Expense</div>
					<div> Action</div>
				</div>
				<div className = 'list-body'>
					{ expenses.length > 0 ? 
					 expenses.map((data,i) => 
						<ExpenseRow key = {i} expenseRowData = {data}/>)
					 
					: <div className="list-item list-item--message"><span>No expenses</span></div>		
					
				}	
				</div>
			</div> 

		
		)



const mapStateToProps = (state) => {
	return {
		expenses: getVisibleExpenses(state.expenses, state.filters)
	}
};
export default connect(mapStateToProps)(ExpenseList)
		
	