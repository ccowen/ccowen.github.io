import { Typography, Box, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';

import MyPlatformHandles from "../../MyPlatformHandles";

function HomeLeftPanel() {
  
  return (
    <Grid>
        <Typography variant="h5" gutterBottom>
            Hi!
        </Typography>
        <Typography variant="body1" gutterBottom>
            I'm a creative, detail-oriented professional with a unique blend of education and experience in 
            <Box fontWeight='700' component="span" display='inline'>
                {" data engineering, design, and music theory. "}
            </Box>
            I have experience transforming complex data into engaging, user-friendly 
            <Box fontWeight='700' component="span" display='inline'>
                {" data visualizations "}
            </Box>
            to improve user experiences and drive business insights.
        </Typography>
        <Typography variant="h5" gutterBottom>
            <Link href="/about-me">
                About Me
            </Link>
             {" or connect with me on LinkedIn or Github:"}
        </Typography>
        <MyPlatformHandles/>
    </Grid>
  );
}

export default HomeLeftPanel;