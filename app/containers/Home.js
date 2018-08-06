import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { InputWithValidation } from '../components/InputText';
import { userInputChanged, SOME_ACTION } from '../actions/sampleActions';

class Home extends PureComponent {
  static propTypes = {
    user: PropTypes.string,
    dispatch: PropTypes.func,
  }

  static defaultProps = {
    user: '',
  }

  componentDidMount() {
    this.props.dispatch({
      type: SOME_ACTION,
    });
  }

  textChanged = (id, text) => this.props.dispatch(userInputChanged(text));

  render = () => (
    <Container>
      <InputWithValidation
        id="username"
        isValid={this.props.user.length > 3}
        textChanged={this.textChanged}
        text={this.props.user}
      />
      <Text>
        {`Hello ${this.props.user}`}
      </Text>
    </Container>
  );
}

const mapStateToProps = state => ({
  user: state.sample.user,
});

export default connect(mapStateToProps)(Home);
