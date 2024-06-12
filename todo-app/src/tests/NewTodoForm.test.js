import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from '../components/NewTodoForm';

it('renders without crashing', () => {
  render(<NewTodoForm addTodo={() => {}} />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

it('can submit a new todo', () => {
  const addTodo = jest.fn();
  const { getByLabelText, getByText } = render(<NewTodoForm addTodo={addTodo} />);
  fireEvent.change(getByLabelText("Task:"), { target: { value: 'New Task' } });
  fireEvent.click(getByText("Add Todo"));
  expect(addTodo).toHaveBeenCalledWith({ task: 'New Task', id: expect.any(String) });
});
