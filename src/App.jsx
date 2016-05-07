import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';

import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    props.judgeLogin();
    setTimeout(() => {
      props.login('qwe1', 'qwe');
    }, 100);
  }

  render() {
    return (
      <div className="app">
        <Header
          username={this.props.user.get('username')}
          logout={() => { this.props.logout(); }}
        />
        <div style={{ marginTop: '1.5em' }}>
          {this.props.children}
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
    judgeLogin: (...args) => dispatch(actions.user.judgeLogin(...args)),
    logout: () => dispatch(actions.user.logout()),
    login: (...args) => dispatch(actions.user.login(...args)),
  })
)(App);