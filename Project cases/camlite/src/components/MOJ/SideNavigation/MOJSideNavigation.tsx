import React from 'react';
import { NavLink } from 'react-router-dom';

interface MOJNavItem {
  text: string;
  href?: string;
  to?: string;
  active?: boolean;
}

interface Props {
  label?: string;
  items?: Array<MOJNavItem>;
  changeActive?: (index: number) => void;
}

export function MOJSideNavList(props: Props) {
  const { items, label, changeActive } = props;
  return (
    <>
      {label && <h4 className="moj-side-navigation__title">{label}</h4>}
      <ul className={'moj-side-navigation__list'}>
        {items?.map((item: MOJNavItem, k: number) => (
          <li
            key={k}
            className={`moj-side-navigation__item ${
              item.active && 'moj-side-navigation__item--active'
            }`}
          >
            <NavLink
              to={item.to}
              aria-current={item.active ? 'location' : 'false'}
              href={item.href}
              onClick={() => changeActive && changeActive(k)}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function MOJSideNavigation(props: any) {
  const { children } = props;

  return (
    <nav className="moj-side-navigation" aria-label="Side navigation">
      {children}
    </nav>
  );
}
