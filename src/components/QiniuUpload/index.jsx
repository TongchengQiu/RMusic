import React from 'react';
import request from 'superagent-bluebird-promise';
/* eslint no-param-reassign: ["error", { "props": false }] */
require('./index.scss');

const isFunction = (fn) => {
  const getType = {};
  return fn && getType.toString.call(fn) === '[object Function]';
};

export default class QiniuUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragActive: false
    };
  }

  onDragLeave() {
    this.setState({
      isDragActive: false
    });
  }

  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    this.setState({
      isDragActive: true
    });
  }

  onDrop(e) {
    e.preventDefault();
    this.setState({
      isDragActive: false
    });
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const maxFiles = (this.props.multiple) ? files.length : 1;

    if (this.props.onUpload) {
      files = Array.prototype.slice.call(files, 0, maxFiles);
      this.props.onUpload(files, e);
    }

    for (let i = 0; i < maxFiles; i++) {
      files[i].preview = URL.createObjectURL(files[i]);
      files[i].request = this.upload(files[i]);
      files[i].uploadPromise = files[i].request.promise();
    }

    if (this.props.onDrop) {
      files = Array.prototype.slice.call(files, 0, maxFiles);
      this.props.onDrop(files, e);
    }
  }

  onClick() {
    if (this.props.supportClick) {
      this.open();
    }
  }

  open() {
    const fileInput = this.refs.fileInput;
    fileInput.value = null;
    fileInput.click();
  }

  upload(file) {
    if (!file || file.size === 0) return null;
    let key = `${file.preview.split('/').pop()}'.'${file.name.split('.').pop()}`;
    if (this.props.prefix) {
      key = this.props.prefix + key;
    }

    if (this.props.uploadKey) {
      key = this.props.uploadKey;
    }

    const r = request
      .post(this.props.uploadUrl)
      .field('key', key)
      .field('token', this.props.token)
      .field('x:filename', file.name)
      .field('x:size', file.size)
      .attach('file', file, file.name)
      .set('Accept', 'application/json');
    if (isFunction(file.onprogress)) { r.on('progress', file.onprogress); }
    r.on('end', () => {
      if (r.xhr.status === 200) {
        if (this.props.updateSuccess) {
          this.props.updateSuccess(JSON.parse(r.xhr.responseText));
        }
      }
    });
    return r;
  }

  render() {
    let className = this.props.className || 'qiniu-upload';
    if (this.state.isDragActive) {
      className += ' active';
    }

    let style = {
      borderStyle: this.state.isDragActive ? 'solid' : 'dashed'
    };
    return (
      <div
        className={className}
        style={style}
        onClick={() => this.onClick()}
        onDragLeave={() => this.onDragLeave()}
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e)}
      >
        <input
          style={{
            display: 'none'
          }}
          type="file"
          multiple={this.props.multiple}
          ref="fileInput"
          onChange={(e) => this.onDrop(e)}
          accept={this.props.accept}
        />
        {this.props.children}
      </div>
    );
  }
}

QiniuUpload.propTypes = {
  onDrop: React.PropTypes.func,
  token: React.PropTypes.string.isRequired,
  // called before upload to set callback to files
  onUpload: React.PropTypes.func,
  size: React.PropTypes.number,
  style: React.PropTypes.object,
  supportClick: React.PropTypes.bool,
  accept: React.PropTypes.string,
  multiple: React.PropTypes.bool,
  // Qiniu
  uploadUrl: React.PropTypes.string,
  uploadKey: React.PropTypes.string,
  prefix: React.PropTypes.string
};

QiniuUpload.defaultProps = {
  supportClick: true,
  multiple: true,
  uploadUrl: 'http://upload.qiniu.com/'
};
