import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';

import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';

require('./assets/styles/main.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
    props.judgeLogin();
  }

  getCuccrenMusicData() {
    const list = this.props.list;
    if (list.get('form') === 'my') {
      return list.get('myList').get(list.get('index'));
    } else if (list.get('form') === 'all') {
      return list.get('allList').get(list.get('index'));
    }
    return null;
  }

  handlePrewOrNext(num) {
    const form = this.props.list.get('form');
    const index = this.props.list.get('index');
    const length = this.props.list.get(`${form}List`).count();
    let toIndex = 0;
    if (num === 1) {
      toIndex = (index + 1 >= length) ? 0 : (index + 1);
    } else if (num === -1) {
      toIndex = (index === 0) ? (length - 1) : (index - 1);
    }
    this.props.selectMusic(form, toIndex);
  }

  render() {
    return (
      <div className="app">
        <Header
          username={this.props.user.get('username')}
          logout={() => { this.props.logout(); }}
        />
        <div
          className="wrap"
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          {this.props.children}
        </div>
        <MusicPlayer
          data={this.getCuccrenMusicData()}
          next={() => this.handlePrewOrNext(1)}
          prev={() => this.handlePrewOrNext(-1)}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    list: state.list
  }),
  dispatch => ({
    judgeLogin: (...args) => dispatch(actions.user.judgeLogin(...args)),
    logout: () => dispatch(actions.user.logout()),
    login: (...args) => dispatch(actions.user.login(...args)),
    selectMusic: (...args) => dispatch(actions.list.selectMusic(...args))
  })
)(App);
