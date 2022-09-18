import { render, screen } from '@testing-library/react';
import App from './App';
import ZooPage from './routes/Zoo.page';

test('renders learn react link', () => {
  render(<ZooPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
