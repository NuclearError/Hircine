import mix from './mix';

const brown = '#5c402e';
const orange = '#e79f4b';
const yellow = '#f7e198';
const grey = '#a3bc9c';
const teal = '#298e88';
const navy = '#00495c';
const black = '#171f2a';

const baseBlack = black;
const baseWhite = yellow;

const colors = {
  brown,
  orange,
  yellow,
  grey,
  teal,
  navy,
  black,
  baseBlack,
  baseWhite,

  paletteTest1: mix(baseWhite, teal, 60),
  paletteTest2: mix(baseWhite, orange, 80),
  paletteTest3: mix(baseBlack, orange),
};

export default colors;
