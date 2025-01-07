import { Stack, Button } from "@mui/material";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function MyPlatformHandles() {
  
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<LinkedInIcon />} onClick={() => window.open('https://www.linkedin.com/in/caitlin-cowen/')}>
                LinkedIn
            </Button>
            <Button variant="outlined" startIcon={<GitHubIcon />} onClick={() => window.open('https://github.com/ccowen')}>
                GitHub
            </Button>
        </Stack>
    );
  }

export default MyPlatformHandles;