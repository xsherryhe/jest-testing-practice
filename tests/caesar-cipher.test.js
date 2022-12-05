import caesarCipher from '../src/caesar-cipher';

describe('caesarCipher', () => {
  it('shifts a string input with the provided shift value', () => {
    const string = 'secret';
    const shift = 2;
    const shiftedString = 'ugetgv';
    expect(caesarCipher(string, shift)).toBe(shiftedString);
  });

  it('wraps the end of the alphabet to the start when shifting', () => {
    const string = 'v';
    const shift = 10;
    const shiftedString = 'f';
    expect(caesarCipher(string, shift)).toBe(shiftedString);
  });

  it('works with large shift values', () => {
    const string = 'value';
    const shift = 1234;
    const shiftedString = caesarCipher(string, 12);
    expect(caesarCipher(string, shift)).toBe(shiftedString);
  });

  it('preserves case', () => {
    const string = 'meSsAGE';
    const shift = 5;
    const shiftedString = 'rjXxFLJ';
    expect(caesarCipher(string, shift)).toBe(shiftedString);
  });

  it('preserves spacing and punctuation', () => {
    const string = 'My secret message! Nobody can know.';
    const shift = 3;
    const shiftedString = 'Pb vhfuhw phvvdjh! Qrergb fdq nqrz.';
    expect(caesarCipher(string, shift)).toBe(shiftedString);
  });
});
