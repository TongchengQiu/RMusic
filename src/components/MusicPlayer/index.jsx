import React from 'react';

require('./index.scss');

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
      allTime: 0,
      nowTime: 0,
      isPlay: false,
      isLoop: false,
      volumn: 3,
      isVolumeShow: false,
      isMuted: false
    };
  }

  componentDidMount() {
    const audio = this.refs.audio;
    audio.addEventListener('ended', this.audioEnd.bind(this), false);
    audio.addEventListener('loadedmetadata', this.audioLoadedMetaData.bind(this), false);
    audio.addEventListener('timeupdate', this.audioTimeUpdate.bind(this), false);
    audio.volume = (this.state.volumn / 5).toFixed(1);
  }

  componentWillUnmount() {
    const audio = this.refs.audio;
    audio.removeEventListener('ended', this.audioEnd.bind(this), false);
    audio.removeEventListener('loadedmetadata', this.audioLoadedMetaData.bind(this), false);
    audio.removeEventListener('timeupdate', this.audioTimeUpdate.bind(this), false);
  }

  audioLoadedMetaData() {
    this.setState({
      allTime: this.refs.audio.duration
    });
  }

  audioEnd() {
    if (this.state.isLoop) {
      this.refs.audio.currentTime = 0;
    } else {
      this.handleNext();
    }
  }

  audioTimeUpdate() {
    const audio = this.refs.audio;
    if (!audio) {
      return false;
    }
    this.setState({
      nowTime: audio.currentTime
    });
    return true;
  }

  handlePlay() {
    this.setState({
      isPlay: !this.state.isPlay
    }, () => {
      if (this.state.isPlay) {
        this.refs.audio.pause();
      } else {
        this.refs.audio.play();
      }
    });
  }

  handlePrev() {
    this.props.prev();
  }

  handleNext() {
    this.props.next();
  }

  handleMute() {
    this.setState({
      isMuted: !this.state.isMuted
    }, () => {
      this.refs.audio.muted = this.state.isMuted;
    });
  }

  handleType() {
    this.setState({
      isLoop: !this.state.isLoop
    });
  }

  changeVolume(n) {
    this.setState({
      volumn: n,
      isVolumeShow: false
    });
    this.refs.audio.volume = (n / 5).toFixed(1);
  }

  toggleVolume() {
    this.setState({
      isVolumeShow: !this.state.isVolumeShow
    });
  }

  transformTime(seconds) {
    function rDouble(num) {
      return num.toString().length === 1 ? `0${num}` : `${num}`;
    }
    return `${rDouble(Math.floor(Math.floor(seconds) / 60))}:${rDouble(Math.floor(seconds) % 60)}`;
  }

  render() {
    const { data } = this.props;
    const { allTime, nowTime, isPlay, isLoop, volumn, isVolumeShow, isMuted } = this.state;
    return (
      <div className="music-player">
        <audio
          src={data.src}
          autoPlay
          loop={isLoop}
          style={{ display: 'none' }}
          ref="audio"
        >
        </audio>
        <div className="options-box">
          <div className="prev-btn" onClick={(e) => this.handlePrev(e)} />
          <div
            className={`play-btn ${isPlay ? 'play' : 'pause'}`}
            onClick={(e) => this.handlePlay(e)}
          />
          <div className="next-btn" onClick={(e) => this.handleNext(e)} />
        </div>
        <div className="progress-box">
          <div className="music-name">{data.name}</div>
          <div className="progress-bar">
            <div
              className="progress-inner"
              style={{
                width: `${(nowTime / allTime) * 100}%`
              }}
            />
          </div>
          <div className="show-times">
            <span>{this.transformTime(nowTime)}</span>
            <span>/</span>
            <span>{this.transformTime(allTime)}</span>
          </div>
          <div className="volume-box">
            <span className="name" onClick={() => this.toggleVolume()}>音量</span>
            {
              isVolumeShow &&
                <ul className="adjust-box">
                  {
                    [5, 4, 3, 2, 1].map((i) => (
                      <li
                        key={`v-${i}`}
                        onClick={() => { this.changeVolume(i); }}
                        className={i <= volumn ? 'active' : null}
                      />
                    ))
                  }
                </ul>
            }
            <span
              className="mute-btn"
              onClick={() => this.handleMute()}
            >
              {isMuted ? '🔇' : '🔊'}
            </span>
          </div>
        </div>
        <div
          className="play-type"
          onClick={() => this.handleType()}
          title={isLoop ? '单曲循环' : '顺序播放'}
        >
          {isLoop ? '♳' : '♻︎'}
        </div>
      </div>
    );
  }
}
