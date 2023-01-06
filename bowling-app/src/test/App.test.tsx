import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test("test sur l'application", () => {
  render(<App />);
  const linkElement = screen.getByText('Score Board');
  expect(linkElement).toBeInTheDocument();
});
