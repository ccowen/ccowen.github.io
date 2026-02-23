import { useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import contentDirectory from "./../directory/contentDirectory.json"
import MyArticleCard from "./MyArticleCard";

function MyContentWidget() {
    const location = useLocation();
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

    const content = contentDirectory["content-directory"]
    const skipPages = ["about-me", "page-not-found", "site-navigation-woven-time", "global-footprint-network-united-states-and-canada"]

    const filteredContent = Object.keys(content)
        .filter(key => !skipPages.includes(key) && location.pathname !== `/${key}`)
        .slice(0, 2);

    return (
        <Box sx={{
            backgroundColor: '#F5F5F5',
            padding: isMobile ? "12px" : "16px",
            width: '100%',
            borderRadius: 2
        }}>
            <Grid container spacing={isMobile ? 2 : 3}>
                {filteredContent.map((key) => (
                    <Grid
                        size={isMobile ? 12 : 6}
                        key={key}
                    >
                        <MyArticleCard
                            route={key}
                            cardContent={content[key]}
                            chipColor="primary"
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MyContentWidget;
