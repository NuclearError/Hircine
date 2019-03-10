export const initialYear = 1865;
export const initialDay = 12;
export const initialWeekday = 'Wounsday';
export const initialMonth = 'Snowbells';

export const weekdayNames = [
  'Moonday',
  'Wounsday',
  'Marketday',
  'Stormday',
  'Hearthday',
  'Loreday',
  'Sunday',
];

export const monthNames = [
  'Midwinter', // January
  'Snowbells', // February
  'Harshwind', // March
  'Lambing Moon', // April
  'Sunwarming', // May
  'Hopelight', // June
  'Midsummer', // July
  'Marshlight', // August
  'Harvest Moon', // September
  'All Hallows', // October
  'Eventide', // November
  'Winterdark', // December
];

export const ticksInMinute = 1;
export const minutesInHour = 60;
export const hoursInDay = 24;
export const daysInWeek = 7;
export const weeksInMonth = 4;
export const monthsInYear = 12;

export const timeUnit = {
  minute: 0,
  hour: 1,
  day: 2,
  week: 3,
  month: 4,
  year: 5,
};

const unitMultipliers = [
  ticksInMinute, minutesInHour, hoursInDay, daysInWeek, weeksInMonth, monthsInYear,
];

// export const ticksInYear =
//   ticksInMinute * minutesInHour * hoursInDay * daysInWeek * weeksInMonth * monthsInYear;

const multiplyArray = arr => arr.reduce((runningProduct, element) => runningProduct * element, 1);

export const ticksInYear = multiplyArray(unitMultipliers);

const ticksInUnit = unitIndex => multiplyArray(unitMultipliers.slice(0, unitIndex + 1));

const ticksTo = unit => ticks =>
  Math.floor(ticks / (ticksInUnit(unit))) % unitMultipliers[unit + 1];

// export function minutes(ticks) {
//   return Math.floor(ticks / ticksInMinute) % minutesInHour;
// }
//
// export function hours(ticks) {
//   return Math.floor(ticks / (ticksInMinute * minutesInHour)) % hoursInDay;
// }
//
// export function days(ticks) {
//   return Math.floor(ticks / (ticksInMinute * minutesInHour * hoursInDay)) % daysInWeek;
// }

export const minutes = ticksTo(timeUnit.minute);
export const hours = ticksTo(timeUnit.hour);
export const days = ticksTo(timeUnit.day);
export const weeks = ticksTo(timeUnit.week);
export const months = ticksTo(timeUnit.month);
