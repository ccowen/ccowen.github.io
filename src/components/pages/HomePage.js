import { Stack, Collapse, Box } from "@mui/material";
import { useAppContext } from "../../contexts/AppContext";
import MyLogoHeader from "../MyLogoHeader";
import HomeLeftPanel from "./home/HomeLeftPanel";
import MyContentWidget from "./../MyContentWidget"
import myColors from "../../myColors";

function HomePage() {
    const { isContentExpanded } = useAppContext();

    return (
        <>
            <MyLogoHeader colorOverride="transparent"/>
            
            <Box sx={{ display: 'flex', minHeight: '100vh', overflow: 'hidden', backgroundColor: myColors.whiteGray }}>
                {/* Collapsible Left Panel */}
                <Collapse orientation="horizontal" in={!isContentExpanded} timeout={500} unmountOnExit>
                    <Stack direction={'column'} sx={{ alignItems: 'center', justifyContent: 'space-evenly', height: '100%' }}>
                        <HomeLeftPanel/>
                    </Stack>
                </Collapse>

                {/* Content Panel - Always visible */}
                <Box sx={{
                    flex: 1, 
                    backgroundColor: myColors.whiteGray, 
                    minHeight: '100vh - 203px',
                    display: 'flex',
                    alignItems: 'center',     // Centers vertically
                    justifyContent: 'center', // Centers horizontally
                    padding: '64px'           // Replaces the margin from inner Box
                }}>
                    <MyContentWidget/>
                </Box>
            </Box>
        </>
    );
}

export default HomePage;