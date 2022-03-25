import { render } from '@testing-library/react';
import MOJTableBody from './MOJTableBody';

test('renders MOJSortableTable', () => {
  const { baseElement } = render(
    <table>
      <MOJTableBody check={true} order={[]} items={[]} />
    </table>
  );
  expect(baseElement).toBeDefined();
});
