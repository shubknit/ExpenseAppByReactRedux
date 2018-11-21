import React from 'react';
import { ExpenseHeader } from './ExpenseHeader';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = ({onLogin}) => (

	<div>
		<ExpenseHeader/>
 		<button onClick = {onLogin}> Login </button>
	</div>
)

const mapDispatchToProps = (dispatch) => {
		return {
			onLogin : () => dispatch(startLogin())
		}
}

export default connect(undefined, mapDispatchToProps)(LoginPage);