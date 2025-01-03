import { Typography, Button, Stack, Box, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function HomeLeftPanel() {
  
  return (
    <Grid sx={{margin: '64px'}}>
        <Typography variant="h3" gutterBottom>
            Hi! I'm Caitlin Cowen
        </Typography>
        <Typography variant="body1" gutterBottom>
            I’m a creative, detail-oriented professional with a unique blend of education and experience in 
            <Box fontWeight='700' component="span" display='inline'>
                {" data engineering, design, and music theory. "}
            </Box>
            I have experience transforming complex data into engaging, user-friendly 
            <Box fontWeight='700' component="span" display='inline'>
                {" data visualizations "}
            </Box>
            to improve user experiences and drive busineess insights.
        </Typography>
        <Typography variant="h5" gutterBottom>
            {"Click "}
            <Link>
                here
            </Link>
             {" for a little more about me. On a more formal note, find me on LinkedIn or Github:"}
        </Typography>
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<LinkedInIcon />} onClick={() => window.open('https://www.linkedin.com/in/caitlin-cowen/')}>
                LinkedIn
            </Button>
            <Button variant="outlined" startIcon={<GitHubIcon />} onClick={() => window.open('https://github.com/ccowen')}>
                GitHub
            </Button>
        </Stack>
    </Grid>
  );
}

export default HomeLeftPanel;