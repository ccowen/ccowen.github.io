import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Grid, Typography, Button, Collapse } from '@mui/material';
import ReactPlayer from 'react-player/youtube'

import SongBreakout from './SongBreakout';
import ReactPlayerDuration from './ReactPlayerDuration';
import songData from '../../../data/pages/woven-time/songData.json';
import colors from '../../../data/pages/woven-time/dataVisColors.js'
import measureStartTimes from '../../../data/pages/woven-time/measureStartTimes.js'
import notesByMeasureNumber from '../../../data/notesByMeasureNumber.js'

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
      this.load('https://www.youtube.com/watch?v=Ipgo7yn7g0s')
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
    const measureNumber = this.calcMeasure(this.state.duration * this.state.played)

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

          <Typography variant='caption' sx={{color: 'white'}} gutterBottom>
            click here first to start <Button sx={{ margin: '0px 5px', color: colors.rawDataHightlightColor}} onClick={this.handlePlayPause} variant="outlined">{this.state.playing ? 'Pause' : 'Play'}</Button>
            Playback time: <ReactPlayerDuration seconds={this.state.duration * this.state.played} />
            , Measure number: {measureNumber}
          </Typography>
            
          <div>
            <Typography variant='caption' sx={{color: 'white'}} gutterBottom>
            <span style={{ display: 'inline-block', margin: '5px 5px 0px 0px', width: '15px', height: '15px', backgroundColor: '#F9E3D5'}}/>
            vocal samples
          </Typography>
          <Typography variant='caption' sx={{color: 'white'}} gutterBottom>
            <span style={{ display: 'inline-block', margin: '5px 5px 0px 5px', width: '15px', height: '15px', backgroundColor: '#ECF3FE'}}/>
            instrumental samples
          </Typography>
          </div>

          <div>
            {notesByMeasureNumber['records'].map((element,index) => (
              (notesByMeasureNumber['active_measures'].includes(measureNumber) && 
                  element['measures'].includes(measureNumber) ? 
                  <Typography variant="subtitle2" sx={{color: 'white'}}>
                    * {element['note']}
                  </Typography> 
                  : null )
            ))}
          </div>

              
        </Grid>
        <Grid item md={4} sm={2} xs={1} sx={{"height": '500px', overflowY: 'scroll'}}>
          <Grid container spacing={1} columns={{ xs: 1, sm:1, md: 2 }} >
          {
            Object.keys(vals).map((key, index) => (

                <SongBreakout 
                  key={index} 
                  info={vals[key]} 
                  in={vals[key]['active_mashup_measures'].includes(measureNumber)}
                  measure={measureNumber}
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
