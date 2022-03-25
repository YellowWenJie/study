import { useEffect } from 'react';
import { ButtonMenu } from '@ministryofjustice/frontend/moj/all';

interface MOJNavItem {
  text: string;
  to?: string;
  active?: boolean;
  classes?: string;
  action?: any;
}

interface Props {
  items: Array<MOJNavItem>;
  buttonClasses?: string;
  buttonText?: string;
  menuClasses?: string;
  attributes?: any;
  className?: string;
}

export default function MOJButtonMenu(props: Props) {
  const { items, buttonText, buttonClasses, className } = props;

  useEffect(() => {
    new ButtonMenu({
      container: $(`.${className}`),
      mq: '(min-width: 200em)',
      buttonText: buttonText,
      buttonClasses: buttonClasses,
    });
  }, []);

  return (
    <div className={`moj-button-menu ${className}`}>
      <div className="moj-button-menu__wrapper">
        {items.map(item => (
          <a
            href={item.to}
            key={item.text}
            role="menuitem"
            draggable="false"
            className={`moj-button-menu__item ${item.classes}`}
            data-module="govuk-button"
            onClick={item.action}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}
