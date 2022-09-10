import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Grid, Typography, Button, Collapse } from '@mui/material';
import ReactPlayer from 'react-player/youtube'

import SongBreakout from './SongBreakout';
import ReactPlayerDuration from './ReactPlayerDuration';
import songData from '../data/songData.json';
import colors from '../data/dataVisColors.js'
import measureStartTimes from '../data/measureStartTimes.js'

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

  handlePlayPause = () => {
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
    this.setState({ playing: true })
  }

  handlePause = () => {
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
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    this.setState({ playing: this.state.loop })
  }

  handleDuration = (duration) => {
    this.setState({ duration })
  }

  ref = player => {
    this.player = player
  }

  calcMeasure = (seconds) => {

    var index=measureStartTimes.findIndex(function(number) {
      return number > seconds;
    });
    return index
  }

  render() {

    const vals = songData['records']['sample_songs']

    return (
      <Grid 
        container 
        spacing={1} 
        columns={{ xs: 1, sm: 4, md: 7 }}
        sx={{
          backgroundColor: "#1c1c1f",
        }}
      >
        <Grid item md={3} sm={2} xs={1} sx={{"height": '500px'}}>
          <ReactPlayer 
            url={this.state.url} 
            width='100%'
            ref={this.ref}
            style={{backgroundColor: colors.stripdefaultColor, marginBottom: '5px'}}
            playing={this.state.playing}
            controls={this.state.controls}
            light={this.state.light}
            loop={this.state.loop}
            playbackRate={this.state.playbackRate}
            volume={this.state.volume}
            muted={this.state.muted}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onPlaybackRateChange={this.handleOnPlaybackRateChange}
            onEnded={this.handleEnded}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
          />

          <Typography variant='caption' sx={{color: 'white'}}>
            click here first to start <Button sx={{ margin: '0px 5px', color: colors.rawDataHightlightColor}} onClick={this.handlePlayPause} variant="outlined">{this.state.playing ? 'Pause' : 'Play'}</Button>
            Playback time: <ReactPlayerDuration seconds={this.state.duration * this.state.played} />
            , Measure number: {this.calcMeasure(this.state.duration * this.state.played)}
          </Typography>
              
        </Grid>
        <Grid item md={4} sm={2} xs={1} sx={{"height": '500px', overflowY: 'scroll'}}>
          <Grid container spacing={1} columns={{ xs: 1, sm:1, md: 2 }} >
          {
            Object.keys(vals).map((key, index) => (

                <SongBreakout 
                  key={index} 
                  info={vals[key]} 
                  in={vals[key]['active_mashup_measures'].includes(this.calcMeasure(this.state.duration * this.state.played))}
                  measure={this.calcMeasure(this.state.duration * this.state.played)}
                /> 
            ))
          }
          </Grid>

        </Grid>
  
      </Grid>
    );
  }

}

export default hot(module)(DataVisSection);
