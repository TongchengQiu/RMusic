import React from 'react';

import MusicPlayer from '../MusicPlayer';
import UploadContainer from '../UploadContainer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        src: 'http://120.192.249.202:9090/data6/b/0/94/7/667fbf52b4f83b0ee8b6deb03d87940b/music.126.net/62838e55d7c94478db1139a005dcd69c.mp3?type=126music',
        name: '给自己的信'
      }
    };
  }

  test() {
    this.setState({
      data: {
        src: 'http://111.20.250.39/m10.music.126.net/20160508002202/e3866bc0a574bc5fb0ed0e2d007d35ab/ymusic/c71a/13a9/d984/45e23cb3a5c75802963bf30bf5d5c927.mp3?wshc_tag=0&wsts_tag=572e104e&wsid_tag=de2994fe&wsiphost=ipdbm',
        name: '123123'
      }
    });
  }

  updateSuccess(res) {
    console.log(res.key);
  }

  render() {
    /* eslint max-len: ["error", 2000, 2] */
    return (
      <div className="view-home">
        <UploadContainer updateSuccess={(res) => this.updateSuccess(res)} />
        <MusicPlayer data={this.state.data} next={() => this.test()} />
      </div>
    );
  }
}
