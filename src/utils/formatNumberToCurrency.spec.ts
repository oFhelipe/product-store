import {formatNumberToCurrency} from './formatNumberToCurrency';

describe('Utils: formatNumberToCurrency', () => {
  test('should format number to currency', () => {
    expect(formatNumberToCurrency(1000)).toBe('$1,000.00');
  });

  test('should format negative number to currency', () => {
    expect(formatNumberToCurrency(-1000)).toBe('-$1,000.00');
  });

  test('should format decimal number to currency', () => {
    expect(formatNumberToCurrency(1234.56)).toBe('$1,234.56');
  });

  test('should format zero to currency', () => {
    expect(formatNumberToCurrency(0)).toBe('$0.00');
  });

  test('should not format NAN to currency', () => {
    expect(formatNumberToCurrency(NaN)).toBe('$NaN');
  });
});
