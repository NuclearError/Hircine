/*
  Written by @CheshireSwift
  Original can be found here:
  https://gist.github.com/CheshireSwift/d6728bc0e3e83c4c5a0db374f9d7e43b
*/

// assert.equal(mix('#007fff', '#ff7f00'), '#7f7f7f');
// assert.equal(mix('#ff0000', '#0000bb', 75), '#bf002e');

function weightedHexToTriplet(hex, percentage) {
  const parseHexSubstring = (start, end) =>
    parseInt(hex.substring(start, end), 16);

  const r = parseHexSubstring(1, 3);
  const g = parseHexSubstring(3, 5);
  const b = parseHexSubstring(5, 7);
  return [r, g, b].map(x => (x * percentage) / 100);
}

const halfAssedLeftPad = digitOrTwo =>
  digitOrTwo.length < 2 ? '0' + digitOrTwo : digitOrTwo;

const mixedDigit = (aDigit, bDigit) =>
  halfAssedLeftPad(Math.floor(aDigit + bDigit).toString(16));

function mix(a, b, percentage = 50) {
  const aTri = weightedHexToTriplet(a, percentage);
  const bTri = weightedHexToTriplet(b, 100 - percentage);

  return (
    '#' +
    [
      mixedDigit(aTri[0], bTri[0]),
      mixedDigit(aTri[1], bTri[1]),
      mixedDigit(aTri[2], bTri[2])
    ].join('')
  );
}

export default mix;
