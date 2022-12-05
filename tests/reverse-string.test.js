import reverseString from '../src/reverse-string';

describe('reverseString', () => {
  it('reverses an input string', () => {
    const string = 'hamster';
    const reversedString = 'retsmah';
    expect(reverseString(string)).toBe(reversedString);
  });

  it('preserves case', () => {
    const string = 'sNaKE';
    const reversedString = 'EKaNs';
    expect(reverseString(string)).toBe(reversedString);
  });
});
