import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from '../components/Todo';

it('renders without crashing', () => {
  render(<Todo id="1" task="Test task" removeTodo={() => {}} />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Todo id="1" task="Test task" removeTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls removeTodo on button click', () => {
  const removeTodo = jest.fn();
  const { getByText } = render(<Todo id="1" task="Test task" removeTodo={removeTodo} />);
  fireEvent.click(getByText('X'));
  expect(removeTodo).toHaveBeenCalledWith("1");
});
