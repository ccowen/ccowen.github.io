import Grid from '@mui/material/Grid2';

import MyContentWidget from "../../MyContentWidget";

function HomeRightPanel() {
    // use state for what tag is selected, one at a time
    // button color filled if name matches selected
  
  return (
    <Grid sx={{margin: '64px'}}>
        <MyContentWidget/>
    </Grid>
  );
}

export default HomeRightPanel;