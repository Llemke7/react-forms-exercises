import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

it('renders without crashing', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new todo', () => {
  const { getByLabelText, getByText } = render(<TodoList />);
  fireEvent.change(getByLabelText("Task:"), { target: { value: 'New Task' } });
  fireEvent.click(getByText("Add Todo"));
  expect(getByText("New Task")).toBeInTheDocument();
});
