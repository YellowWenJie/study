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