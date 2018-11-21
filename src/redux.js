import { createStore } from 'redux';


// action generators

const IncrementCount = ({ incrementBy = 1 } = {}) => ({
		type: 'INCREMENT',
		incrementBy 
})

const DecrementCount = ({decrementBy = 1} = {}) => ({
	type : 'DECREMENT',
	decrementBy
})

const Reset = () => ({
	type: 'RESET'

})

const Set = ({setCountBy }) => ({
		type: 'SET',
		setCountBy
})

const DemoState = {
		expenses: [{
			id: 1,
			description: 'text',
			data: '02/10/1990',
			amount: 1000,
			note: 'text1' 
		}],
		filters: {
				text: 'rent',
				sortBy: 'amount',
				startDate: undefined,
				endDate: undefined
		}
}

// Reducers

const CountReducers = (state = {count: 0}, action) => {
	switch (action.type) {

		case 'INCREMENT' :

			return {
				count: state.count + action.incrementBy
			} 

		case 'DECREMENT' : 

			return {
				count: state.count - action.decrementBy
			}	

		case 'RESET' : 

		 return {
		  	count: 0
		 }

		case 'SET' : 
			return {
					count: action.setCountBy
			}
		default :
		 return state;		
		}
};

const store = createStore(CountReducers);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
})

store.dispatch(IncrementCount({incrementBy: 5}));
//unsubscribe();
store.dispatch(IncrementCount());
store.dispatch(DecrementCount({decrementBy: 4}));
store.dispatch(DecrementCount());
store.dispatch(Reset());
store.dispatch(Set({setCountBy: 100}));




