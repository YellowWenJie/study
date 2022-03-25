import React from 'react';
import { Link } from 'react-router-dom';

interface MOJNavItem {
  text: React.ReactNode;
  href?: string;
  active?: boolean;
}

interface Props {
  label?: string;
  items: Array<MOJNavItem>;
  changeActive: (index: number) => void;
  children?: React.ReactNode;
}

export default function MOJPrimaryNavigation(props: Props) {
  const { items, changeActive } = props;

  return (
    <div className="moj-primary-navigation">
      <div className="moj-primary-navigation__container">
        <div className="moj-primary-navigation__nav">
          <nav
            className="moj-primary-navigation"
            aria-label="Primary navigation"
          >
            <ul className="moj-primary-navigation__list">
              {items.map((item: MOJNavItem, k: number) => (
                <li className="moj-primary-navigation__item" key={k}>
                  <Link
                    to={item.href}
                    className="moj-primary-navigation__link"
                    aria-current={item.active && 'page'}
                    href={item.href}
                    onClick={() => changeActive(k)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {props.children}
      </div>
    </div>
  );
}
