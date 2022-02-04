import { ResponsiveSize } from "../../src/tools";

describe('Testing tools', () => {
  it('should when user no pass value get an error', () => {
    const number = ResponsiveSize();
    expect(number).toBe(NaN);
  });

  it('should when user pass 100 on function, they get 48', () => {
      const number = ResponsiveSize(100);
      expect(number).toBe(48);
  })
});
