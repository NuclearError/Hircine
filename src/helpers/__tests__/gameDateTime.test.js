import {
  ticksInMinute,
  minutesInHour,
  hoursInDay,
  daysInWeek,
  weeksInMonth,
  monthsInYear,
  minutes,
  hours,
  days,
  weeks,
  months,
  currentYear,
} from '../gameDateTime';

describe('Game date time', () => {
  it('counts up minutes from ticks', () => {
    expect(minutes(ticksInMinute - 1)).toBe(0);
    expect(minutes(ticksInMinute)).toBe(1);
    expect(minutes(ticksInMinute * 2)).toBe(2);
  });

  it('rolls over minutes into hours', () => {
    const ticksInHour = ticksInMinute * minutesInHour;
    expect(hours(ticksInHour - 1)).toBe(0);
    expect(hours(ticksInHour)).toBe(1);
    expect(hours(ticksInHour + 1)).toBe(1);
    expect(hours(ticksInHour * 2)).toBe(2);

    expect(minutes(ticksInHour - 1)).toBe(minutesInHour - 1);
    expect(minutes(ticksInHour)).toBe(0);
  });

  it('rolls over hours into days', () => {
    const ticksInDay = ticksInMinute * minutesInHour * hoursInDay;
    expect(days(ticksInDay - 1)).toBe(0);
    expect(days(ticksInDay)).toBe(1);
    expect(days(ticksInDay + 1)).toBe(1);
    expect(days(ticksInDay * 2)).toBe(2);

    expect(hours(ticksInDay - 1)).toBe(hoursInDay - 1);
    expect(hours(ticksInDay)).toBe(0);
  });

  it('rolls over days into weeks', () => {
    const ticksInWeek = ticksInMinute * minutesInHour * hoursInDay * daysInWeek;
    expect(weeks(ticksInWeek - 1)).toBe(0);
    expect(weeks(ticksInWeek)).toBe(1);
    expect(weeks(ticksInWeek + 1)).toBe(1);
    expect(weeks(ticksInWeek * 2)).toBe(2);

    expect(days(ticksInWeek - 1)).toBe(daysInWeek - 1);
    expect(days(ticksInWeek)).toBe(0);
  });

  it('rolls over weeks into months', () => {
    const ticksInMonth = ticksInMinute * minutesInHour * hoursInDay * daysInWeek * weeksInMonth;
    expect(months(ticksInMonth - 1)).toBe(0);
    expect(months(ticksInMonth)).toBe(1);
    expect(months(ticksInMonth + 1)).toBe(1);
    expect(months(ticksInMonth * 2)).toBe(2);

    expect(weeks(ticksInMonth - 1)).toBe(weeksInMonth - 1);
    expect(weeks(ticksInMonth)).toBe(0);
  });
});
