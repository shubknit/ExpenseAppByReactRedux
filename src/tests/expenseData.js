import moment from 'moment';

export const expenseData = [
		{
			id: '1',
			description : 'rent',
			amount: 100,
			createdAt: moment(0),
			note: 'abc'
		},
		{
			id: '2',
			description : 'bill',
			amount: 1000,
			createdAt: moment(0).subtract(4, 'days').valueOf(),
			note: 'abc'
		},
		{
			id: '3',
			description : 'credit',
			amount: 2000,
			createdAt: moment(0).add(4, 'days').valueOf(),
			note: 'abc'
		}
		
	];