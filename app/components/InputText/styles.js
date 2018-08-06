import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    width: '80%',
    height: 50,
  },
  input: {
    flex: 1,
  },
  valid: {
    color: '$black',
  },
  invalid: {
    color: '$red',
  },
});
