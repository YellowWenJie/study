import { render, screen } from '@testing-library/react';
import { DWPKeyDetails } from './DWPKeyDetails';

test('renders DWPKeyDetails', () => {
  const { baseElement } = render(
    <DWPKeyDetails
      top={[]}
      bottom={[{ name: 'Date of birth:', value: '1988-01-28T13:19:10.096Z' }]}
    />
  );

  expect(baseElement).toBeInTheDocument();

  const linkElement = screen.getByText(/Date of birth:/i);
  expect(linkElement).toBeInTheDocument();
});
