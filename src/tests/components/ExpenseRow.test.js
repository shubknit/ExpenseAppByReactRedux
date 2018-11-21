import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseRow } from '../../components/ExpenseRow';
import { expenseData } from '../expenseData';

test('should render ExpenseRow with expenses', () => {
  const wrapper = shallow(<ExpenseRow expenseRowData = {expenseData[0]}/>);
  expect(wrapper).toMatchSnapshot();
});


