import { Stack, Collapse, Box, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useAppContext } from "../../contexts/AppContext";

import MyLogoHeader from "../MyLogoHeader";
import HomeLeftPanel from "./home/HomeLeftPanel";
import MyContentWidget from "./../MyContentWidget"
import myColors from "../../myColors";

function HomePage() {
    const { isContentExpanded } = useAppContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Debug logging
    console.log('isMobile:', isMobile, 'window width:', window.innerWidth);


    return (
        <>
            <MyLogoHeader colorOverride={myColors.whiteGray}/>
            
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', minHeight: '100vh', overflow: 'hidden', backgroundColor: myColors.whiteGray }}>
                {/* Collapsible Left Panel */}
                <Collapse orientation={isMobile ? "vertical" : "horizontal"} in={!isContentExpanded} timeout={500} unmountOnExit>
                    <Box sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', 
                        justifyContent: 'space-evenly', 
                        height: '100%' ,
                        padding: isMobile ? '20px' : '64px',
                        paddingTop: isMobile ? '40px' : '0px'
                    }}>
                        <HomeLeftPanel/>
                    </Box>
                </Collapse>

                {/* Content Panel - Always visible */}
                <Box sx={{
                    flex: 1, 
                    backgroundColor: myColors.whiteGray, 
                    minHeight: '100vh - 203px',
                    display: 'flex',
                    alignItems: 'center',     // Centers vertically
                    justifyContent: 'center', // Centers horizontally
                    padding: isMobile ? '20px' : '64px',
                    paddingTop: '64px'
                }}>
                    <MyContentWidget/>
                </Box>
            </Box>
        </>
    );
}

export default HomePage;