import { render, screen } from '@testing-library/react';
import MOJTableTitle from './MOJTableTitle';

test('renders MOJTableTitle', () => {
  render(
    <table>
      <MOJTableTitle title="title" />
    </table>
  );
  const linkElement = screen.getByText(/title/i);
  expect(linkElement).toBeInTheDocument();
});
