export function defaultEquals (a, b) {
  return a === b
}

export function defaultToString (value) {
  if (value === null) {
    return 'NULL';
  }
  if (value === undefined) {
    return 'UNDEFINED'
  }
  if (typeof value === 'string' || value instanceof String) {
    return `${value}`
  }
  return value.toString()
}

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

export function defaultCompare (a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}