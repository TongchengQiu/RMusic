import React from 'react';

import QiniuUpload from '../QiniuUpload';

require('./index.scss');
/* eslint max-len: ["error", 2000, 2] */
/* eslint no-param-reassign: ["error", { "props": false }] */

export default class UploadContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      token: 'WKpqqTGie1vlLgp9EZ9qLLBfKz4F1iqjZmlswQQD:y7ozlAa2ZRh3RZhWjKrNVtjYd7Q=:eyJzY29wZSI6InJtdXNpYyIsImRlYWRsaW5lIjoxNDYyNzIwNjIyfQ=='
    };
  }

  onUpload(files) {
    const progresses = {};
    files.forEach((f) => {
      f.onprogress = (e) => {
        progresses[f.preview] = e.percent;
        this.setState({
          progresses
        });
      };
    });
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  updateSuccess(res) {
    this.props.updateSuccess(res);
  }


  showFiles() {
    if (this.state.files.length <= 0) {
      return '';
    }
    const { files, progresses } = this.state;
    return (
      <div className="dropped-files" >
        <ul>
          {
            files.map((f, i) => {
              const progress = progresses && progresses[f.preview];
              if (progress === 100) {
                return null;
              }
              return (
                <li
                  key={i}
                >
                  <div className="name">{`${f.name} - ${f.size / 1000}KB.`}</div>
                  <div className="progress-box">
                    <div className="bar">
                      <div className="inner" style={{ width: `${(progress || 0)}%` }} />
                    </div>
                    <span className="percent">{`${Math.floor(progress || 0)}%`}</span>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  render() {
    const styles = { padding: 30 };
    return (
      <div className="upload-container">
        <QiniuUpload
          onDrop={(files) => this.onDrop(files)}
          onUpload={(files) => this.onUpload(files)}
          updateSuccess={(res) => this.updateSuccess(res)}
          token={this.state.token}
          accept="audio/mpeg, *.mp3"
        >
          <div style={styles}> Try dropping some files here, or click files to upload. </div>
        </QiniuUpload>
        {this.showFiles()}
      </div>
    );
  }
}
