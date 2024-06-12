import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from '../components/BoxList';

it('renders without crashing', () => {
  render(<BoxList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', () => {
  const { getByLabelText, getByText } = render(<BoxList />);
  fireEvent.change(getByLabelText("Width:"), { target: { value: '100' } });
  fireEvent.change(getByLabelText("Height:"), { target: { value: '100' } });
  fireEvent.change(getByLabelText("Background Color:"), { target: { value: 'red' } });
  fireEvent.click(getByText("Add Box"));
  expect(getByText("X")).toBeInTheDocument();
});
