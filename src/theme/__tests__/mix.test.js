import mix from '../mix';

describe('Mix function : ', () => {
  it('mixes yellow and blue to make green', () => {
    const color = mix('#FFFF00', '#1E90FF');
    expect(color).toBe('#8ec77f');
  });
  it('mixes yellow and red to make orange', () => {
    const color = mix('#FFFF00', '#FF4500');
    expect(color).toBe('#ffa200');
  });
  it('mixes black and white to make grey', () => {
    const color = mix('#000000', '#FFFFFF');
    expect(color).toBe('#7f7f7f');
  });
});
