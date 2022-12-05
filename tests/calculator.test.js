import calculator from '../src/calculator';

describe('calculator', () => {
  describe('calculator add', () => {
    it('adds two positive integers', () => {
      const num1 = 3;
      const num2 = 5;
      const sum = 8;
      expect(calculator.add(num1, num2)).toBe(sum);
    });

    it('adds floating point numbers', () => {
      const num1 = 3.5;
      const num2 = 4.2;
      const sum = 7.7;
      expect(calculator.add(num1, num2)).toBeCloseTo(sum);
    });

    it('adds negative numbers', () => {
      const num1 = -5;
      const num2 = 2;
      const sum = -3;
      expect(calculator.add(num1, num2)).toBe(sum);
    });
  });

  describe('calculator subtract', () => {
    it('subtracts two positive integers', () => {
      const num1 = 9;
      const num2 = 3;
      const diff = 6;
      expect(calculator.subtract(num1, num2)).toBe(diff);
    });

    it('returns a negative number if the first number is smaller than the second number', () => {
      const num1 = 3;
      const num2 = 10;
      expect(calculator.subtract(num1, num2)).toBeLessThan(0);
    });

    it('subtracts floating point numbers', () => {
      const num1 = 0.5;
      const num2 = 0.2;
      const diff = 0.3;
      expect(calculator.subtract(num1, num2)).toBeCloseTo(diff);
    });

    it('subtracts negative numbers', () => {
      const num1 = -8;
      const num2 = -9;
      const diff = 1;
      expect(calculator.subtract(num1, num2)).toBe(diff);
    });
  });

  describe('calculator multiply', () => {
    it('multiplies two positive integers', () => {
      const num1 = 5;
      const num2 = 8;
      const product = 40;
      expect(calculator.multiply(num1, num2)).toBe(product);
    });

    it('multiplies floating point numbers', () => {
      const num1 = 0.4;
      const num2 = 0.7;
      const product = 0.28;
      expect(calculator.multiply(num1, num2)).toBeCloseTo(product);
    });

    it('returns 0 if one of the numbers is 0', () => {
      const num1 = 0;
      const num2 = 10;
      expect(calculator.multiply(num1, num2)).toBe(0);
    });

    it('returns a negative number if exactly one of the numbers is negative', () => {
      const num1 = -7;
      const num2 = 2;
      expect(calculator.multiply(num1, num2)).toBeLessThan(0);
    });

    it('returns a positive number if both of the numbers are negative', () => {
      const num1 = -4;
      const num2 = -6;
      expect(calculator.multiply(num1, num2)).toBeGreaterThan(0);
    });
  });

  describe('calculator divide', () => {
    it('divides two positive integers', () => {
      const num1 = 8;
      const num2 = 4;
      const quotient = 2;
      expect(calculator.divide(num1, num2)).toBe(quotient);
    });

    it('returns a floating point number if the two numbers do not divide evenly', () => {
      const num1 = 7;
      const num2 = 3;
      expect(calculator.divide(num1, num2) % 1).not.toBe(0);
    });

    it('divides floating point numbers', () => {
      const num1 = 0.1;
      const num2 = 0.05;
      const quotient = 2;
      expect(calculator.divide(num1, num2)).toBeCloseTo(quotient);
    });

    it('throws an error if the second number is 0', () => {
      const num1 = 5;
      const num2 = 0;
      expect(() => calculator.divide(num1, num2)).toThrow('cannot divide by 0');
    });

    it('returns a negative number if exactly one of the numbers is negative', () => {
      const num1 = -7;
      const num2 = 2;
      expect(calculator.divide(num1, num2)).toBeLessThan(0);
    });

    it('returns a positive number if both of the numbers are negative', () => {
      const num1 = -4;
      const num2 = -6;
      expect(calculator.divide(num1, num2)).toBeGreaterThan(0);
    });
  });
});
