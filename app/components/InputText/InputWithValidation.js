import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import styles from './styles';

const InputWithValidation = (props) => {
  const {
    id,
    isValid,
    text,
    textChanged,
  } = props;

  const inputStyles = [
    styles.input,
    isValid ? styles.valid : styles.invalid,
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={inputStyles}
        onChangeText={(value) => { textChanged(id, value); }}
        value={text}
      />
    </View>
  );
};

InputWithValidation.propTypes = {
  id: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  text: PropTypes.string,
  textChanged: PropTypes.func,
};

InputWithValidation.defaultProps = {
  isValid: false,
  text: '',
  textChanged: () => { },
};

export default InputWithValidation;
