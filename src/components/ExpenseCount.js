import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVisibleExpenses } from '../selectors/expenses';

const ExpenseCount = (props) => {
	const {expenseList} = props;
	const getExpenseTotal = () => {
		let amount = 0 ;
	 	for( let i = 0 ; i< expenseList.length; i++){
	 		amount += expenseList[i].amount;
	 	}
	 	return amount;
	}

	return (
		<div className ="page-header">
			<div className = 'content-container'>
				<h1 className = "page-header__title"> Viewing { expenseList.length } expenses totalling ${ getExpenseTotal() }</h1>
				<Link to = '/create'>
						<button className = 'button'> Add Expense </button>
				</Link>
			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		expenseList: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseCount);