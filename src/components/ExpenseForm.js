import React from 'react';
import { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export class ExpenseForm extends Component {
	constructor(props){
		super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
			description: props.formData ? props.formData.description : '',
			amount:  props.formData ? props.formData.amount : '',
			createdAt:  props.formData ? moment(props.formData.createdAt) : moment(),
			note:  props.formData ? props.formData.note : '',
			focused: false
		}
       
	}
	
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({
			description
		}));	
	}

	onAmountChange = (e) => {
		const amount = e.target.value;
		this.setState(() => ({
			amount
		}))	
	}
	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({
			note
		}))	
	}

	onDateChange = (createdAt) => {
	    if (createdAt) {
	      this.setState(() => ({ createdAt }));
	    }
  	}

  	onFocusChange = ({focused}) => {
  		this.setState(() => ({
  			focused
  		}))
  	}

	onSubmit(e) {
		e.preventDefault();
		this.props.formDataSubmit({
			description: this.state.description,
			amount: parseInt(this.state.amount),
			createdAt: this.state.createdAt.valueOf(),
			note: this.state.note
		})
	}

	render(){
		return (
			<div>
				<form onSubmit = {this.onSubmit} className = 'form'>
					<label htmlFor = 'description'></label>
					<input type ="text" id ="description" placeholder ='description' className = 'text-input' 
					 autoFocus value = {this.state.description}
					onChange = {this.onDescriptionChange}/>

					<label htmlFor = 'amount'></label>
					<input type ="number" id ="amount" placeholder ='amount' className = 'text-input'
					value ={this.state.amount}   pattern="^\d*(\.\d{0,2})?$"
					onChange = {this.onAmountChange}/>

					<SingleDatePicker 
					  date={this.state.createdAt} isOutsideRange = {() => false} numberOfMonths = {1}
					  onDateChange={this.onDateChange} 
					  focused={this.state.focused} 
					  onFocusChange={this.onFocusChange} 
					/>
	
					<label htmlFor = 'note'></label>
					<textarea type ="text" id ="note" placeholder ='note' className = 'textarea'
					 required value = {this.state.note} onChange = {this.onNoteChange}/>
					<div><button  className = 'button' type ="submit"> Save Expense </button> </div>
				</form>
			</div>
		
		)
	}
}



