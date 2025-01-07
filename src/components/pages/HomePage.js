import { Stack } from "@mui/material";
import Grid from '@mui/material/Grid2';
import MyLogoHeader from "../MyLogoHeader";
import HomeLeftPanel from "./home/HomeLeftPanel";
import HomeRightPanel from "./home/HomeRightPanel";

import myColors from "../../myColors";
function HomePage() {

  return (
    <>
        <Grid container spacing={0}>
            <Grid 
                size={7}
                sx={{ backgroundColor: myColors.primary.light, minHeight: '100vh'}}
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
            <Grid size={5} sx={{ backgroundColor: myColors.whiteGray }}>
                <Stack
                    direction={'column'}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        height: '100%'
                    }}
                >
                    <HomeRightPanel/>
                </Stack>
            </Grid>
        </Grid>
    </>

  )
}

export default HomePage;
