import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Grid } from '@mui/material';
import ReactPlayer from 'react-player/youtube'

import SongBreakout from './SongBreakout';
import ReactPlayerDuration from './ReactPlayerDuration';
import songData from '../data/songData.json';


class DataVisSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      playing: false,
      controls: true,
      light: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0
    }
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
    })
  }

  handlePlayPause = (type) => {
    this.setState({ playing: !this.state.playing })
    if (!this.state.playing & this.state.url === null) {
      this.load('https://www.youtube.com/watch?v=CWi9-mWdq3I')
    }
  }

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handleOnPlaybackRateChange = (speed) => {
    this.setState({ playbackRate: parseFloat(speed) })
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    console.log('onProgress', this.state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }

  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  ref = player => {
    this.player = player
  }

  render() {

    const vals = songData['records']['sample_songs']

    return (
      <Grid 
        container 
        spacing={1} 
        columns={{ xs: 1, sm: 4, md: 7 }}
        sx={ {borderTop: "1px solid gray", borderBottom: "1px solid gray"}}
      >
        <Grid item md={3} sm={2} xs={1} sx={{"height": '500px'}}>
          <ReactPlayer 
            url={this.state.url} 
            width='100%'
            ref={this.ref}
            // pip={this.state.pip}
            playing={this.state.playing}
            controls={this.state.controls}
            light={this.state.light}
            loop={this.state.loop}
            playbackRate={this.state.playbackRate}
            volume={this.state.volume}
            muted={this.state.muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onBuffer={() => console.log('onBuffer')}
            onPlaybackRateChange={this.handleOnPlaybackRateChange}
            onSeek={e => console.log('onSeek', e)}
            onEnded={this.handleEnded}
            onError={e => console.log('onError', e)}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
          />

          <table>
            <tbody>
              <tr>
                <th>Controls</th>
                <td>
                  <button onClick={this.handlePlayPause}>{this.state.playing ? 'Pause' : 'Play'}</button>
                </td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>
                  <button onClick={this.handleSetPlaybackRate} value={1}>1x</button>
                  <button onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
                  <button onClick={this.handleSetPlaybackRate} value={2}>2x</button>
                </td>
              </tr>
              <tr>
                <th>Seek</th>
                <td>
                  <input
                    type='range' min={0} max={0.999999} step='any'
                    value={this.state.played}
                    onMouseDown={this.handleSeekMouseDown}
                    onChange={this.handleSeekChange}
                    onMouseUp={this.handleSeekMouseUp}
                  />
                </td>
              </tr>
              <tr>
                <th>elapsed</th>
                <td><ReactPlayerDuration seconds={this.state.duration * this.state.played} /></td>
              </tr>

            </tbody>
          </table>
        </Grid>
        <Grid item md={4} sm={2} xs={1} sx={{"height": '500px', overflowY: 'scroll'}}>
          <Grid container spacing={1} columns={{ xs: 1, sm:1, md: 2 }}>
          {
            Object.keys(vals).map((key, index) => (
              <SongBreakout key={index} info={vals[key]} />
            ))
          }
          </Grid>
        </Grid>
  
      </Grid>
    );
  }

}

export default hot(module)(DataVisSection);
