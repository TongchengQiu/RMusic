import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';

import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    props.loginIn('aaa', 'sdsa');
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: '1.5em' }}>
          {this.props.children && React.cloneElement(this.props.children, {
            test: 122323
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    loginIn: (...args) => dispatch(actions.user.login(...args)),
    loginOut: (...args) => dispatch(actions.user.logout(...args))
  })
)(App);
