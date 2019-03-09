import { ticksInMinute, minutesInHour, hoursInDay, daysInWeek, minutes, hours, days } from './gameDateTime';

describe('Game date time', () => {
  it('counts up minutes from ticks', () => {
    expect(minutes(ticksInMinute - 1)).toBe(0);
    expect(minutes(ticksInMinute)).toBe(1);
    expect(minutes(ticksInMinute + 1)).toBe(1);
  });

  it('rolls over minutes into hours', () => {
    const ticksInHour = ticksInMinute * minutesInHour;
    expect(hours(ticksInHour - 1)).toBe(0);
    expect(hours(ticksInHour)).toBe(1);
    expect(hours(ticksInHour + 1)).toBe(1);

    expect(minutes(ticksInHour - 1)).toBe(minutesInHour - 1);
    expect(minutes(ticksInHour)).toBe(0);
  });

  it('rolls over hours into days', () => {
    const ticksInDay = ticksInMinute * minutesInHour * hoursInDay;
    expect(days(ticksInDay - 1)).toBe(0);
    expect(days(ticksInDay)).toBe(1);
    expect(days(ticksInDay + 1)).toBe(1);

    expect(hours(ticksInDay - 1)).toBe(hoursInDay - 1);
    expect(hours(ticksInDay)).toBe(0);
  });
});
