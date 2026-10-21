import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders sin fallos el componente App', () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});
