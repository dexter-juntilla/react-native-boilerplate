import reducer from '../../app/reducers/sampleReducers';
import { USER_INPUT_CHANGE } from '../../app/actions/sampleActions';

describe('Login Reducer Tests', () => {
  it('should update email', () => {
    const action = {
      type: USER_INPUT_CHANGE,
      payload: {
        user: 'dexter',
      },
    };

    const state = {
      user: '',
    };

    const actual = reducer(state, action);
    const expected = {
      user: 'dexter',
    };

    expect(actual).toEqual(expected);
  });
});
