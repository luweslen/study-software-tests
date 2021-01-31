const isPrime = require('./main');

describe('IsPrime test function', () => {
  test('prime numbers return true', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(53)).toBe(true);
    expect(isPrime(67)).toBe(true);
    expect(isPrime(89)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });
  
  test('non-prime numbers return false', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(27)).toBe(false);
    expect(isPrime(52)).toBe(false);
    expect(isPrime(62)).toBe(false);
    expect(isPrime(72)).toBe(false);
  });
})
