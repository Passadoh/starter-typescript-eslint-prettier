import { shoutName, sum } from '../src';

describe('my name is', () => {
  it('capitalised ', () => {
    expect(shoutName('frank')).toEqual('FRANK');
  });
});

describe('it calculates', () => {
  it('the sum', () => {
    expect(sum(1, 5)).toBe(6);
  });
});
