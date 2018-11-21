import { SetTextFilter, SetSortFilterByAmount, SetSortFilterByDate, SetStartDate, SetEndDate }
 from '../../actions/filters';

test('should setup set text filter action object', () => {
	const text = 'Something typed in';
	const result = SetTextFilter(text);
	expect(result).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	})
})

test('should setup set text filter action object without data', () => {
	const result = SetTextFilter('');
	expect(result).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	})
})

test('should setup set sort filter by date action object', () => {
	expect(SetSortFilterByDate()).toEqual({
		type: 'SET_SORT_DATE_FILTER'
	})
})

test('should setup set sort filter by amount action object', () => {
	expect(SetSortFilterByAmount()).toEqual({
		type: 'SET_SORT_AMOUNT_FILTER'
	})
})

test('should setup set text filter action object', () => {
	expect(SetStartDate(100)).toEqual({
		type: 'SET_START_DATE',
		startDate: 100
	})
})

test('should setup  start Date Filter action object', () => {
	expect(SetEndDate(100)).toEqual({
		type: 'SET_END_DATE',
		endDate: 100
	})
})

