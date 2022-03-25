import React from 'react';
import { useLocation } from 'react-router-dom';

// this helper is a polyfill for the React Router v6 method
// A custom hook that builds on useLocation to parse
// the query string for you.
export function useSearchParams() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

interface Map {
  key: string;
  search: string;
}

/**
 *
 * @param obj
 * @param maps
 */
export function convertDates(obj: any, maps: Array<Map>) {
  const result = maps.reduce((acc: any, map: Map) => {
    const key = map.key;
    const year = obj[`${key}-year`];
    if (year) {
      const day = obj[`${key}-day`] ? obj[`${key}-day`] : 1;
      const month = obj[`${key}-month`] ? obj[`${key}-month`] - 1 : 0;
      console.log(day + ' ' + month + ' ' + year);
      const date = new Date(year, month, day);
      acc[map.search] = date.toISOString().substring(0, 10);
    }
    return acc;
  }, {});
  return { ...obj, ...result };
}

export function deleteEmpty(obj: any, validKeys?: Array<string>) {
  for (const key in obj) {
    if (obj[key] === '' || (validKeys && !validKeys.includes(key))) {
      delete obj[key];
    }
  }
  return obj;
}
