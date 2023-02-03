import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test("sur l'application", () => {
  render(<App />);
  const linkElement = screen.getByText('Menu');
  expect(linkElement).toBeInTheDocument();
});
