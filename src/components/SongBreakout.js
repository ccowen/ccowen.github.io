import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import Popper from '@material-ui/core/Popper'

import {usePopupState,bindHover,bindPopper} from 'material-ui-popup-state/hooks'
import songSectionMapping from '../data/songSectionMapping.json';

function OverlineText(props) {
  return(
    <Typography variant="overline" display="block" gutterBottom sx={{ textAlign: "right", lineHeight: 1.5, marginBottom: "0.5em", paddingRight: '5px' }}>
      {props.text}
    </Typography>
  )
}

function Item(props) {
  let popupState = usePopupState({
    variant: 'popper',
    popupId: `${Math.floor(Math.random())}`,
  })

  return (
    <div>
      <Paper 
        {...bindHover(popupState)}
        square={true}
        sx={{
          height: (props.type==="normalized" ? "40px" : "20px"),
          backgroundColor: props.backgroundColor,
          borderRight: "1px dashed gray",
          backgroundImage: (props.backgroundImage),
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          "&:hover": {
            border: "1px solid #00FF00",
            background: "rgba(0, 128, 0, 0.3)"
          },
        }}
      />
      <Popper {...bindPopper(popupState)} transition placement='top-start'>
        <Paper 
          sx={{
            maxWidth: '200px',
            padding: "10px"
          }}
        >
          <Typography 
            variant="caption" 
            display="block" 
            sx={{whiteSpace: 'pre-line'}}
          >
            <span style={{"backgroundColor": "rgba(0, 128, 0, .3)"}}>{props.popoverText}</span>
          </Typography>
        </Paper>
      </Popper>
    </div>
  )
}

function convertTimestampToSeconds(val) {
    var minutes = parseInt(val.substring(0, 1))
    var seconds = parseInt(val.substring(2, 4))
  
    var startTimeSeconds = (minutes*60) + seconds
    return startTimeSeconds
  
}

function createRawDataPopoverText(props, key){
  let popoverText =  `The song section, ${key}, starts at ${props.info.sections[key]["start"]} and lasts ${props.info.sections[key]["duration"]} seconds.`

  if (props.info.sections[key]["sample_keys"] !== undefined) {
    popoverText += `\n${props.info.sections[key]["sample_keys"].length} samples are sourced from this section (highlighted in purple)-`

    props.info.sections[key]["sample_keys"].forEach(function (item, index) {
      popoverText += `\n[[s${item}]] lyrics "${props.info.samples[item]["lyrics"]}", starts @ ${props.info.samples[item]["sample_song_start"]} for ${props.info.samples[item]["sample_duration_seconds"]}s`
    });
  }

  return popoverText
}

function createRawDataGradient(props, key) {
  let cssGradient = ""

  if (key === "overtime") {
    cssGradient += "linear-gradient(to right, #ffcc80 0%, #ffcc80 100%)"
  }
  else if (props.info.sections[key]["sample_keys"] !== undefined) {
    cssGradient = "linear-gradient(to right"
    let sectionStartSeconds = convertTimestampToSeconds(props.info.sections[key]["start"])
    props.info.sections[key]["sample_keys"].forEach(function (item, index) {
      let sampleStartSeconds = convertTimestampToSeconds(props.info.samples[item]["sample_song_start"])
      let sampleStartPercentage = Math.round((sampleStartSeconds-sectionStartSeconds)/props.info.sections[key]["duration"]*100)
      let preSampleStartPercentage = (sampleStartPercentage <= 0 ? sampleStartPercentage : sampleStartPercentage-1)
      let sampleEndPerceentage = Math.round(((sampleStartSeconds+props.info.samples[item]["sample_duration_seconds"])-sectionStartSeconds)/props.info.sections[key]["duration"]*100)
      let postSampleStartPercentage = (sampleEndPerceentage >= 100 ? sampleEndPerceentage : sampleEndPerceentage+1)

      cssGradient += `, white ${(preSampleStartPercentage)}%, #d1c4e9 ${sampleStartPercentage}%, #d1c4e9 ${sampleEndPerceentage}%, white ${postSampleStartPercentage}%`
    });
    cssGradient += ")"
  }
  else {
    cssGradient = "linear-gradient(to right, white 0%, white 100%)"
  }
  return cssGradient
}

function calcRawDataItemWidth(props, key, totalSeconds) {
  // if there is overtime, leave space for it
  if (props.info.sections["overtime"]) {
    if (key ==="overtime") {
      return 5
    }
    else {
      return (props.info.sections[key].duration/totalSeconds)*95
    }
  }
  else {
    return (props.info.sections[key].duration/totalSeconds)*100
  }
}

function RawData(props){

    let totalSeconds = convertTimestampToSeconds(props.totalDuration)
    return (
      Object.keys(props.info.sections).map((key, index) => (

        <Grid item xs={calcRawDataItemWidth(props, key, totalSeconds)} key={key}>
          <Item 
            type="rawß"
            backgroundColor='white'
            popoverText={createRawDataPopoverText(props, key)}
            backgroundImage={createRawDataGradient(props, key)}
          />
        </Grid>

      ))
    )

}

function doesNormalizedDataSectionHaveSample(props, key) {
  let m = ""
  const findOne = (haystack, arr) => {
    arr.some(v => (haystack.includes(v) ? m = v : null ))
  }
  findOne(Object.keys(props.info.sections), key)
  if (m !== "" && props.info.sections[m]["sample_keys"] !== undefined) {
    return [true, props.info.sections[m]["sample_keys"].length]
  }
  return [false, 0]

}

function NormalizedData(props) {
  
  function popOverTextWithSample(num_samples, section, index) {
    return `The ${num_samples} samples in the ${section} section are matched with this point in the day (${index}/7).    `
  }

  let popOverTextWithOutSample = `For this song, no samples are matched with this time of the day.`
  return (
    Object.keys(songSectionMapping).map((key, index) => (
      <Grid item xs={1} key={key}>
        <Item 
          type="normalized" 
          backgroundColor={doesNormalizedDataSectionHaveSample(props, songSectionMapping[key])[0] ? '#d1c4e9' : 'white'}
          backgroundImage={doesNormalizedDataSectionHaveSample(props, songSectionMapping[key])[0] ? `url('/sun_position${parseInt(key)}_for_${props.info.type}.jpg')` : null}
          popoverText={doesNormalizedDataSectionHaveSample(props, songSectionMapping[key])[0] ? popOverTextWithSample(doesNormalizedDataSectionHaveSample(props, songSectionMapping[key])[1], songSectionMapping[key], index+1): popOverTextWithOutSample}
        />
      </Grid>
    ))
  )
}


export default function SongBreakout(props) {

  return (
    <Grid item md={1} xs={1}>
      <Box sx={{ 
        padding: "5px 0px",
        backgroundColor: "#ede7f6",
        borderRadius: '3px'
      }}>

        <Typography variant="h6" display="block" sx={{paddingLeft: '5px'}}>
          Song: '{props.info.name}'
        </Typography>
        <Typography variant="subtitle1" display="block" gutterBottom sx={{paddingLeft: '5px'}}>
          {props.info.artist}
        </Typography>

        {/* // parent container for normlized data */}
        <Stack direction="row">
          <Grid 
            container 
            spacing={0} 
            columns={7} 
            sx={{ 
              marginBottom: "2px", 
              borderTop: "1px solid gray",  
              borderBottom: "1px solid gray",
              borderLeft: "1px dashed gray"
            }}
          >
            <NormalizedData info={props.info}/>
          </Grid>
        </Stack>
        <OverlineText text={"normalized data"}/>

        {/* // parent container for raw data */}
        <Stack direction="row">
          <Grid 
            container 
            spacing={0} 
            columns={100}
            sx={{ 
              marginBottom: "2px", 
              borderTop: "1px solid gray",  
              borderBottom: "1px solid gray",
              borderLeft: "1px dashed gray"
            }}
          >
            <RawData info={props.info} totalDuration={props.info.total_duration}/>
          </Grid>
        </Stack>
        <OverlineText text={"raw data"}/>

      </Box>
    </Grid>

  );
}