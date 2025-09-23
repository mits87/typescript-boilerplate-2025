import { foo } from '../main.js';

describe('#main', () => {
  it('should returns the given string', () => {
    expect(foo('bar')).toEqual('bar');
  });
});
