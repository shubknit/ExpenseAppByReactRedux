import React from 'react';
import { Component } from 'react'; 
import { connect } from 'react-redux';
import { SetTextFilter, SetSortFilterByAmount, SetSortFilterByDate, SetStartDate, SetEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';



export class ExpenseFilters extends Component {
	constructor(props){
		super(props);
		this.state = {
			startDate : this.props.filters.startDate,
			endDate: this.props.filters.endDate,
			focusedInput: null
		}
		this.filteredData = this.filteredData.bind(this);
		this.sortData = this.sortData.bind(this);
	}

	onDatesChange = ({startDate, endDate}) => {
		//this.setState({startDate, endDate});
		//this.props.dispatch(SetStartDate(startDate))
		this.props.onStartDateChange(startDate);
		//this.props.dispatch(SetEndDate(endDate))
		this.props.onEndDateChange(endDate);
	}

	onFocusChange = (focusedInput) => {
		this.setState({focusedInput})
	}

	filteredData(e){
		//this.props.dispatch(SetTextFilter(e.target.value));
		this.props.onTextChange(e.target.value);
	}

	sortData(e){
		let value = e.target.value;
		if(value === 'amount') {
			//this.props.dispatch(SetSortFilterByAmount(value));
			this.props.sortByAmount(value);
		}
		else if(value === 'date') {
			//this.props.dispatch(SetSortFilterByDate(value));
			this.props.sortByDate(value);
		}
	}

	render(){
		return(
			<div className="content-container">
			<div className="input-group">
				<div className="input-group__item">
					<input type="text" className="text-input"  placeholder="Search expenses"  onChange = {this.filteredData}/>
				</div>
				<div className="input-group__item">
					<select className="select" onChange = {this.sortData}>
						<option value="date">Date</option>
						<option value="amount">Amount</option>
					</select>
					
				</div>
				<div className="input-group__item">
						<DateRangePicker startDate = {this.state.startDate} endDate = {this.state.endDate}
						focusedInput = {this.state.focusedInput} onDatesChange = {this.onDatesChange}
						onFocusChange = {this.onFocusChange} startDateId = '1' endDateId = '1'
						isOutsideRange = {() => false} numberOfMonths = {1}
						showClearDates = {true}/>
				</div>
			</div>
		</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onStartDateChange: (startDate) => dispatch(SetStartDate(startDate)),
		onEndDateChange: (endDate) => dispatch(SetEndDate(endDate)),
		onTextChange: (text) => dispatch(SetTextFilter(text)),
		sortByAmount: (value) => dispatch(SetSortFilterByAmount()),
		sortByDate: (value) => dispatch(SetSortFilterByDate())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFilters);