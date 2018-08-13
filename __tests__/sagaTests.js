import { put } from 'redux-saga/effects';
import { someGenerator } from '../app/config/sagas';
import { somethingHappened } from '../app/actions/sampleActions';

describe('saga tests', () => {
  it('', () => {
    const gen = someGenerator();

    const call1 = gen.next();
    expect(call1.done).toBe(false);

    const call2 = gen.next();

    expect(call2.value).toEqual(put(somethingHappened('random guy')));
    expect(call2.done).toBe(false);
  });
});
