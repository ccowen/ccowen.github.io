import { Stack } from "@mui/material";

import Grid from '@mui/material/Grid2';

import MyLogoHeader from "../MyLogoHeader";
import HomeLeftPanel from "./home/HomeLeftPanel";
import HomeRightPanel from "./home/HomeRightPanel";

function HomePage() {

  return (
    <>
        <Grid container spacing={0}>
            <Grid 
                size={7}
                sx={{ backgroundColor: '#B3CAF2', minHeight: '100vh'}}
            >
                <Stack
                    direction={'column'}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        height: '100%',
                    }}
                >
                    <MyLogoHeader/>
                    <Grid container sx={{ alignItems: 'center', flex: 1 }} >
                        <HomeLeftPanel/>
                    </Grid>
                </Stack>

            </Grid>
            <Grid size={5} sx={{ backgroundColor: '#FCFCFC' }}>
                <Stack
                    direction={'column'}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        height: '100%',
                    }}
                >
                    <HomeRightPanel/>
                </Stack>
            </Grid>
        </Grid>
    </>
        /* <ArticleTextWrapper>

            <MySectionTitle style={{marginBottom: '20px'}}>
                Caitlin Cowen
            </MySectionTitle>

            <MyParagraph>
                Hi, I haven't dovoted time to create a homepage, 
                but I wanted to get my contact info on here. :)
            </MyParagraph>
            <Aside>
                <IconButton onClick={() => window.open('mailto:c.cowen111@gmail.com')}>
                    <EmailIcon fontSize="large"/>
                </IconButton>

                <IconButton onClick={() => window.open('https://www.linkedin.com/in/caitlin-cowen/')}>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>

                <IconButton onClick={() => window.open('https://github.com/ccowen')}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
            </Aside> 

        </ArticleTextWrapper>*/

  )
}

export default HomePage;
