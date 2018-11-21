import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ExpenseDashboard } from '../components/ExpenseDashboard';
import  AddExpensePage  from '../components/AddExpensePage';
import  EditExpensePage  from '../components/EditExpensePage';
import { PageNotFound } from '../components/PageNotFound';

export const AppRouter = () => (
	<BrowserRouter>
		<Switch>
				<Route path = '/' component = { ExpenseDashboard } exact/>
				<Route path = '/dashboard' component = { ExpenseDashboard }/>
				<Route path = '/create' component = { AddExpensePage  }/>
				<Route path = '/edit/:id' component ={ EditExpensePage }/>
		    	<Route path = '*' component={PageNotFound} />
		</Switch>
	</BrowserRouter>
)

