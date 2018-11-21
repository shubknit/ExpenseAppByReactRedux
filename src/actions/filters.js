// Action creators

export const SetTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
})


export const SetSortFilterByAmount = () => ({
	type: 'SET_SORT_AMOUNT_FILTER'
})

export const SetSortFilterByDate = () => ({
	type: 'SET_SORT_DATE_FILTER'
})

export const SetStartDate = (startDate) => ({
		type: 'SET_START_DATE',
		startDate
})

export const SetEndDate = (endDate) => ({
		type: 'SET_END_DATE',
		endDate
})
