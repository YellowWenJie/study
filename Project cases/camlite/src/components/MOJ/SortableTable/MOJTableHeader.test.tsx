import { render } from '@testing-library/react';
import MOJTableHeader from './MOJTableHeader';

test('renders MOJTableHeader', () => {
  const { baseElement } = render(
    <table>
      <MOJTableHeader head={[]} />
    </table>
  );
  expect(baseElement).toBeDefined();
});
