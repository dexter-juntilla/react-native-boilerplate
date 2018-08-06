import {
  USER_INPUT_CHANGE,
  userInputChanged,
} from '../../app/actions/sampleActions';

describe('Sample Action Tests', () => {
  it('should create sample action', () => {
    const user = 'dexter';

    const actual = userInputChanged(user);
    const expected = {
      type: USER_INPUT_CHANGE,
      payload: {
        user,
      },
    };

    expect(actual).toEqual(expected);
  });
});
