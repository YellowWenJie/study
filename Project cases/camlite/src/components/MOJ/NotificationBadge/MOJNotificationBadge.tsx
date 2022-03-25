import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  count: number;
}

export default function MOJNotificationBadge(props: Props) {
  const { count } = props;

  return (
    <>
      {count && (
        <span id="notifications" className="moj-notification-badge">
          {count < 99 ? count : '99+'}
        </span>
      )}
    </>
  );
}
