// Filter Reducer
import moment from 'moment';

const filterReducerState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
}

export default (state = filterReducerState, action) => {
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