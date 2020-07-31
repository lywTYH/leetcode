import twoSum from '../1.two-sum';
describe('leetCode 1-50', () => {
  it('1.towSum', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result[0]).toEqual(0);
    expect(result[1]).toEqual(1);
  });
});
