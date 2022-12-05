import calculator from '../src/calculator';

describe('calculator', () => {
  describe('calculator add', () => {
    it('adds positive integer inputs', () => {
      const num1 = 3;
      const num2 = 5;
      const sum = 8;
      expect(calculator.add(num1, num2)).toBe(sum);
    });

    it('adds floating point number inputs', () => {
      const num1 = 3.5;
      const num2 = 4.2;
      const sum = 7.7;
      expect(calculator.add(num1, num2)).toBeCloseTo(sum);
    });

    it('adds negative number inputs', () => {
      const num1 = -5;
      const num2 = 2;
      const sum = -3;
      expect(calculator.add(num1, num2)).toBe(sum);
    });
  });

  describe('calculator subtract', () => {
    it('subtracts positive integer inputs', () => {
      const num1 = 9;
      const num2 = 3;
      const diff = 6;
      expect(calculator.subtract(num1, num2)).toBe(diff);
    });

    it('returns a negative number if the first number input is smaller than the second number input', () => {
      const num1 = 3;
      const num2 = 10;
      expect(calculator.subtract(num1, num2)).toBeLessThan(0);
    });

    it('subtracts floating point number inputs', () => {
      const num1 = 0.5;
      const num2 = 0.2;
      const diff = 0.3;
      expect(calculator.subtract(num1, num2)).toBeCloseTo(diff);
    });

    it('subtracts negative number inputs', () => {
      const num1 = -8;
      const num2 = -9;
      const diff = 1;
      expect(calculator.subtract(num1, num2)).toBe(diff);
    });
  });

  describe('calculator multiply', () => {
    it('multiplies positive integer inputs', () => {
      const num1 = 5;
      const num2 = 8;
      const product = 40;
      expect(calculator.multiply(num1, num2)).toBe(product);
    });

    it('multiplies floating point number inputs', () => {
      const num1 = 0.4;
      const num2 = 0.7;
      const product = 0.28;
      expect(calculator.multiply(num1, num2)).toBeCloseTo(product);
    });

    it('returns 0 if one of the number inputs is 0', () => {
      const num1 = 0;
      const num2 = 10;
      expect(calculator.multiply(num1, num2)).toBe(0);
    });

    it('returns a negative number if exactly one of the number inputs is negative', () => {
      const num1 = -7;
      const num2 = 2;
      expect(calculator.multiply(num1, num2)).toBeLessThan(0);
    });

    it('returns a positive number if both of the number inputs are negative', () => {
      const num1 = -4;
      const num2 = -6;
      expect(calculator.multiply(num1, num2)).toBeGreaterThan(0);
    });
  });

  describe('calculator divide', () => {
    it('divides positive integer inputs', () => {
      const num1 = 8;
      const num2 = 4;
      const quotient = 2;
      expect(calculator.divide(num1, num2)).toBe(quotient);
    });

    it('returns a floating point number if the two number inputs do not divide evenly', () => {
      const num1 = 7;
      const num2 = 3;
      expect(calculator.divide(num1, num2) % 1).not.toBe(0);
    });

    it('divides floating point number inputs', () => {
      const num1 = 0.1;
      const num2 = 0.05;
      const quotient = 2;
      expect(calculator.divide(num1, num2)).toBeCloseTo(quotient);
    });

    it('throws an error if the second number input is 0', () => {
      const num1 = 5;
      const num2 = 0;
      expect(() => calculator.divide(num1, num2)).toThrow('cannot divide by 0');
    });

    it('returns a negative number if exactly one of the number inputs is negative', () => {
      const num1 = -7;
      const num2 = 2;
      expect(calculator.divide(num1, num2)).toBeLessThan(0);
    });

    it('returns a positive number if both of the number inputs are negative', () => {
      const num1 = -4;
      const num2 = -6;
      expect(calculator.divide(num1, num2)).toBeGreaterThan(0);
    });
  });
});
