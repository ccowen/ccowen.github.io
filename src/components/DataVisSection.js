import { Grid } from '@mui/material';
import ReactPlayer from 'react-player/youtube'

import SongBreakout from './SongBreakout';
import songData from '../data/songData.json';


function DataVisSection() {
  const vals = songData['records']['sample_songs']

  return (
    <Grid container columns={{ xs: 1, sm: 4, md: 7 }}>
      <Grid item md={3} sm={2} xs={1}>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </Grid>
      <Grid item md={4} sm={2} xs={1}>
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

export default DataVisSection;
