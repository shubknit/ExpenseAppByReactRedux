import { Component } from 'react';
import { ExpenseHeader } from './ExpenseHeader';
import  ExpenseCount  from './ExpenseCount';
import ExpenseList from './ExpenseList';
import AddExpensePage from './AddExpensePage';
import EditExpensePage  from './EditExpensePage';
import  ExpenseFilters  from './ExpenseFilters';
//import uuid from 'uuid';


export class ExpenseDashboard extends Component {
	constructor() {
		super();
		this.saveState();
	
	}
	saveState(){
		localStorage.getItem('expenseData') ? 
		this.state = {
			expenseList : JSON.parse(localStorage.getItem('expenseData')) 
		} : this.state = {
			expenseList: [
				
			]
		}
	}
	setLocalStorage(data){
		localStorage.setItem('expenseData', JSON.stringify(data));
	}
	
	componentDidUpdate(){
		this.setLocalStorage(this.state.expenseList);
	}


	render(){
		return (
		   <div className = "main">
				<ExpenseHeader/>
				 <div className = 'main-dashboard'>
					<ExpenseCount/>
					<ExpenseFilters/>
					<ExpenseList /> 
		        </div>
		    </div>
		)

	}

}