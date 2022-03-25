const types = ['Type 1', 'Type 2'];

const subTypes = ['Subtype 1', 'Subtype 2'];
const benefits = [
  'Universal Credit',
  'Pension',
  'ESA',
  'Winter Fuel Allowance',
];

const resolutions = ['Success', 'Failure'];

const available = ['Available', 'Not Available'];

const sensitive = ['Very', 'Slightly', 'No'];

const priority = ['', 'urgent'];

const long = new Intl.DateTimeFormat('en-UK', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

const short = new Intl.DateTimeFormat('en-UK', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

const clock = new Intl.DateTimeFormat('en-UK', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});

function longMonth(s) {
  let result = '';
  try {
    const d = new Date(s);
    d && (result = long.format(d));
  } catch (e) {}
  return result;
}

function shortMonth(s, invalid = '--') {
  let result = invalid;
  try {
    const d = new Date(s);
    d && (result = short.format(d));
  } catch (e) {}
  return result;
}

function clock12(s, invalid = '--') {
  let result = invalid;
  try {
    const d = new Date(s);
    d && (result = clock.format(d));
  } catch (e) {}
  return result;
}

module.exports = {
  clock12,
  shortMonth,
  longMonth,
  types,
  subTypes,
  benefits,
  resolutions,
  sensitive,
  available,
  priority,
};
