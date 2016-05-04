import React, { PropTypes } from 'react';
import ReactPlayer from 'react-player';

export default class VideoPlayer extends React.Component {
  static propTypes = {
    autoPlay: PropTypes.bool,
    videoUrl: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.play = this.play.bind(this);
    this.state = { playing: this.props.autoPlay ? this.props.autoPlay : false };
  }

  play() {
    const state = this.state;
    state.playing = true;
    this.setState(state);
  }

  render() {
    const url = this.state.playing ? this.props.videoUrl : '';

    // TODO, whitelist the props to pass to ReactPlayer
    // TODO, keep copy of state in redux baby! (right now we are not maintaining app state for
    // this component), full example here:
    // https://github.com/CookPete/react-player/blob/master/src/demo/App.js
    return (
      <span onClick={this.play}>
        <ReactPlayer
          {... this.props}
          url={url}
          playing={this.state.playing}
        />
      </span>
    );
  }
}
