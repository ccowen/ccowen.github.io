import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography, Fade } from '@mui/material';
import Popper from '@mui/material/Popper'

import {usePopupState,bindHover,bindPopper} from 'material-ui-popup-state/hooks'
import songSectionMapping from '../../../data/pages/woven-time/songSectionMapping.json';
import colors from '../../../data/pages/woven-time/dataVisColors.js'


function OverlineText(props) {
  return(
    <Typography 
      variant="overline" 
      display="block" 
      gutterBottom 
      sx={{ 
        textAlign: "right", 
        lineHeight: 1.5, 
        marginBottom: "5px", 
        paddingRight: '8px', 
        color: colors.textColor,
        fontSize: '8px'
      }}
    >
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
          height: (props.type==="transformed" ? "40px" : "20px"),
          backgroundColor: props.backgroundColor,
          borderRight: colors.borderStyle,
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
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
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
          </Fade>
        )}
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
  let activeArr = []

  if (key === "overtime") {
    let sampleKeys = props.info.sections["overtime"]["sample_keys"]
    sampleKeys.forEach(function (item, index) {
      activeArr.push(props.info.samples[item]["mashup_measure"].includes(props.measure))
    })
    let active = activeArr.includes(true)
    let gradientColor = active ? colors.rawDataHightlightColorActive : colors.rawDataHightlightColor

    cssGradient += `linear-gradient(to right, ${gradientColor} 0%, ${gradientColor} 100%)`
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

      let active = props.info.samples[item]["mashup_measure"].includes(props.measure)
      let gradientColor = active ? colors.rawDataHightlightColorActive : colors.rawDataHightlightColor
      cssGradient += `, ${colors.stripdefaultColor} ${(preSampleStartPercentage)}%, ${gradientColor} ${sampleStartPercentage}%, ${gradientColor} ${sampleEndPerceentage}%, ${colors.stripdefaultColor} ${postSampleStartPercentage}%`
    });
    cssGradient += ")"
  }
  else {
    cssGradient = `linear-gradient(to right, ${colors.stripdefaultColor} 0%, ${colors.stripdefaultColor} 100%)`
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
            type="raw"
            popoverText={createRawDataPopoverText(props, key)}
            backgroundImage={createRawDataGradient(props, key)}
          />
        </Grid>

      ))
    )

}

function doesTransformedDataSectionHaveSample(props, key) {
  let m = []
  let l = 0
  const intersection = Object.keys(props.info.sections).filter(element => key.includes(element));

  intersection.forEach( function (item, index) {
    if (props.info.sections[item]["sample_keys"] !== undefined) {
      m.push(true)
      l = l + props.info.sections[item]["sample_keys"].length
    }
  })

  return [m.includes(true), l]

}

function TransformedData(props) {
  
  function popOverTextWithSample(num_samples, section, index) {
    return `The ${num_samples} samples in the ${section} section are matched with this point in the day (${index}/7).    `
  }

  let popOverTextWithOutSample = `For this song, no samples are matched with this time of the day.`
  return (
    Object.keys(songSectionMapping).map((key, index) => (
      <Grid item xs={1} key={key}>
        <Item 
          type="transformed" 
          backgroundColor={doesTransformedDataSectionHaveSample(props, songSectionMapping[key])[0] ? 'black' : colors.stripdefaultColor}
          backgroundImage={doesTransformedDataSectionHaveSample(props, songSectionMapping[key])[0] ? `url('/sun_position${parseInt(key)}_for_${props.info.type}.jpg')` : null}
          popoverText={doesTransformedDataSectionHaveSample(props, songSectionMapping[key])[0] ? popOverTextWithSample(doesTransformedDataSectionHaveSample(props, songSectionMapping[key])[1], songSectionMapping[key], index+1): popOverTextWithOutSample}
        />
      </Grid>
    ))
  )
}


export default function SongBreakout(props) {

  return (

    <Grid item md={1} xs={1} 
    sx={{
      display: (props.in ? "block" : "none")
    }}
    >
    <Fade in={props.in}>

      <Box sx={{ 
        padding: "5px 0px 0px 0px",
        backgroundColor: colors.cardColor,
        borderRadius: '3px'
      }}>

        <Typography variant="h6" display="block" sx={{paddingLeft: '5px', color: colors.textColor}}>
          Song: '{props.info.name}'
        </Typography>
        <Typography variant="subtitle1" display="block" gutterBottom sx={{padding: '0px 0px 5px 5px', color: colors.textColor}}>
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
              borderLeft: colors.borderStyle
            }}
          >
            <TransformedData info={props.info}/>
          </Grid>
        </Stack>
        <OverlineText text={"transformed data"}/>

        {/* // parent container for raw data */}
        <Stack direction="row">
          <Grid 
            container 
            spacing={0} 
            columns={100}
            sx={{ 
              marginBottom: "2px",
              borderLeft: colors.borderStyle
            }}
          >
            <RawData info={props.info} totalDuration={props.info.total_duration} measure={props.measure}/>
          </Grid>
        </Stack>
        <OverlineText text={"raw data"}/>

      </Box>
      </Fade>

    </Grid>
  );
}