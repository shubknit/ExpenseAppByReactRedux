import FilterReducer from '../../reducers/filters';
import moment from 'moment';

const filterReduceState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
}

test('should set up default filter values', () => {
	const result = FilterReducer(undefined, { type: '@@INIT' });
	expect(result).toEqual({
		...filterReduceState
	})

})

test('should set up filter text value', () => {
	const action = { 
	type: 'SET_TEXT_FILTER',
		text: 'text'
	}	
	const result = FilterReducer(filterReduceState, action);
	expect(result).toEqual({
		...filterReduceState,
		text: action.text
	})
})

test('should set up sort amount filter  value', () => {
	const action = { 
		type: 'SET_SORT_AMOUNT_FILTER'
	}	
	const result = FilterReducer(filterReduceState, action);
	expect(result).toEqual({
		...filterReduceState,
		sortBy: 'amount'
	})
})

test('should set up sort date filter  value', () => {
	const action = { 
		type: 'SET_SORT_DATE_FILTER'
	}	
	const result = FilterReducer(filterReduceState, action);
	expect(result).toEqual({
		...filterReduceState,
		sortBy: 'date'
	})
})

test('should set up sort date filter  value', () => {
	const action = { 
		type: 'SET_SORT_DATE_FILTER'
	}	
	const result = FilterReducer(filterReduceState, action);
	expect(result).toEqual({
		...filterReduceState,
		sortBy: 'date'
	})
})

test('should set up start date filter value', () => {
	const action = { 
		type: 'SET_START_DATE',
		startDate: moment(100)
	}	
	const result = FilterReducer(filterReduceState, action);
	expect(result).toEqual({
		...filterReduceState,
		startDate: moment(100)
	})
})

test('should set up end date filter value', () => {
	const action = { 
		type: 'SET_END_DATE',
		endDate: moment(100)
	}	
	const result = FilterReducer(filterReduceState, action);
	expect(result).toEqual({
		...filterReduceState,
		endDate: moment(100)
	})
})
