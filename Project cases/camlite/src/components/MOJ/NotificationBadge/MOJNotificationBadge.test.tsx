import { render } from '@testing-library/react';
import MOJNotificationBadge from './MOJNotificationBadge';

test('renders MOJNotificationBadge', () => {
  const { baseElement } = render(<MOJNotificationBadge count={20} />);
  expect(baseElement).toBeDefined();
});
