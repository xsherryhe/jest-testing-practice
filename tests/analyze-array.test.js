import analyzeArray from '../src/analyze-array';

describe('analyzeArray', () => {
  it('returns an object with the correct 4 keys', () => {
    const array = [1, 4, 6, 3, 7];
    const keys = new Set(['average', 'min', 'max', 'length']);
    expect(new Set(Object.keys(analyzeArray(array)))).toEqual(keys);
  });

  it('returns the average of array input numbers in an object', () => {
    const array = [-5, 6, 2, -9, 2, 1];
    const average = -0.5;
    expect(analyzeArray(array).average).toBeCloseTo(average);
  });

  it('returns the minimum of array input numbers in an object', () => {
    const array = [1, 8, 3, 4, 2, 6];
    const minimum = 1;
    expect(analyzeArray(array).min).toBe(minimum);
  });

  it('returns the maximum of array input numbers in an object', () => {
    const array = [1.5, -0.6, 8.7, 3.4, -6.6, -9.8, 4.5];
    const maximum = 8.7;
    expect(analyzeArray(array).max).toBeCloseTo(maximum);
  });

  it('returns the length of array input in an object', () => {
    const array = [1, -6, 2, 3.7];
    const length = 4;
    expect(analyzeArray(array).length).toBe(length);
  });
});
