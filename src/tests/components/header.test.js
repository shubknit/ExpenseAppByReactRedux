import React from 'react';
import { ExpenseHeader } from '../../components/ExpenseHeader';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

window.React = React;

test('should render header correctly', () => {
	
	const wrapper = shallow(<ExpenseHeader/>);
	expect(wrapper).toMatchSnapshot();
	
	/* test suite via react test renderer 
 	const renderer = new ReactShallowRenderer();
	renderer.render(<ExpenseHeader/>);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
	console.log(renderer.getRenderOutput());*/
});