import mix from './mix';

export default {
  brown: '#5c402e',
  orange: '#e79f4b',
  yellow: '#f7e198',
  grey: '#a3bc9c',
  teal: '#298e88',
  navy: '#00495c',
  black: '#171f2a',

  baseBlack: this.black,
  baseWhite: this.yellow,

  paletteTest1: mix(this.baseWhite, this.teal, 60),
  paletteTest2: mix(this.baseWhite, this.orange, 80),
  paletteTest3: mix(this.baseBlack, this.orange),
};
