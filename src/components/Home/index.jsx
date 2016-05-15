import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import UploadContainer from '../UploadContainer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMyList();
  }

  selectMusic(index) {
    this.props.selectMusic('my', index);
  }

  updateSuccess(res) {
    console.log(res.key);
  }

  render() {
    const listData = this.props.list.get('myList');
    let listNode = listData.map((item, index) => (
      <li
        key={`my-m-${index}`}
        onClick={() => this.selectMusic(index)}
      >
        {item.name}
      </li>
    ));
    return (
      <div className="view-home">
        <ul>
          {listNode}
        </ul>
        <UploadContainer updateSuccess={(res) => this.updateSuccess(res)} />
      </div>
    );
  }
}

export default connect(
  state => ({
    list: state.list
  }),
  dispatch => ({
    getMyList: () => dispatch(actions.list.getMyList()),
    selectMusic: (...args) => dispatch(actions.list.selectMusic(...args))
  })
)(Home);
