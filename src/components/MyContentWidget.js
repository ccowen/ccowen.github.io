import { Box, Typography, Button, Stack } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import contentByCategory from "./../directory/contentByCategory.json"
import MyArticleCard from "./MyArticleCard";
import theme from "../myAppDarkTheme";
import myColors from "../myColors";


function MyContentWidget() {
  
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor: myColors.purpleBlack, padding: "16px"}}>
                <Typography variant="h4" gutterBottom>
                    My Work
                </Typography>
                <Stack direction="row" spacing={1} sx={{paddingBottom: "16px"}}>

                    {Object.keys(contentByCategory["content"]).map((key, index) => (
                        <Button variant="contained" disableElevation key={index} size="small">
                            {key}
                        </Button>
                    ))}
                </Stack>
                <Stack direction="column" spacing={1}>

                    <MyArticleCard title="Case Study: Site Navigation of ‘Woven Time’ Publication to ‘Woven Time’ expanded version on my website"/>
                    <MyArticleCard title="Case Study: Site Navigation of ‘Woven Time’ Publication to ‘Woven Time’ expanded version on my website"/>

                </Stack>
            </Box>
        </ThemeProvider>
    );
  }

export default MyContentWidget;