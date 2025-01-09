import { Stack } from "@mui/material";
import Grid from '@mui/material/Grid2';
import MyLogoHeader from "../MyLogoHeader";
import HomeLeftPanel from "./home/HomeLeftPanel";
import MyContentWidget from "./../MyContentWidget"
import myColors from "../../myColors";

function HomePage() {

  return (
    <>
        <Grid container spacing={0}>
            <Grid 
                size={{lg:7, md:5, sm:12 }}
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
                    <MyLogoHeader colorOverride="transparent"/>
                    <Grid container sx={{ alignItems: 'center', flex: 1 }} >
                        <HomeLeftPanel/>
                    </Grid>
                </Stack>

            </Grid>
            <Grid size={{lg:5, md:7, sm:12 }} sx={{ backgroundColor: myColors.whiteGray }}>
                <Stack
                    direction={'column'}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        height: '100%'
                    }}
                >
                    <Grid sx={{margin: '64px'}}>
                        <MyContentWidget/>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    </>

  )
}

export default HomePage;
