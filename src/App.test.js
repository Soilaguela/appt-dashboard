import { render, screen } from '@testing-library/react';
import App from './App';

test('renders comin soon text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wah Gwan, Soon Come/i);
  expect(linkElement).toBeInTheDocument();
});
