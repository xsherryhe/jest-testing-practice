import capitalize from '../src/capitalize';

describe('capitalize', () => {
  it('capitalizes the first character of an input string', () => {
    const string = 'dog';
    const capitalizedString = 'Dog';
    expect(capitalize(string)).toBe(capitalizedString);
  });

  it('returns an unchanged input string if the first character is capitalized', () => {
    const string = 'Cat';
    expect(capitalize(string)).toBe(string);
  });
});
