import {useState} from 'react'
import { Box, Typography, Button, Stack } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import contentByCategory from "./../directory/contentByCategory.json"
import contentDirectory from "./../directory/contentDirectory.json"
import MyArticleCard from "./MyArticleCard";
import theme from "../myAppDarkTheme";
import myColors from "../myColors";


function MyContentWidget() {
    const [ selectedCategory, setselectedCategory ] = useState('case study')

    function handleCategoryButtonClick(key) {
        setselectedCategory(key)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor: myColors.purpleBlack, padding: "16px"}}>
                <Typography variant="h4" gutterBottom>
                    My Work
                </Typography>
                <Stack direction="row" spacing={1} sx={{paddingBottom: "16px"}}>
                    {Object.keys(contentByCategory["content"]).map((key, index) => (
                        <Button 
                            variant= {(key === selectedCategory ? "contained" : "outlined" )}
                            disableElevation 
                            key={index} 
                            size="small"
                            onClick={() => handleCategoryButtonClick(key)}
                        >
                            {key}
                        </Button>
                    ))}
                </Stack>
                <Stack direction="column" spacing={1}>
                    {contentByCategory["content"][selectedCategory].map((item, i) => (
                        <MyArticleCard route={item} cardContent={contentDirectory["content-directory"][item]} />
                    ))}
                </Stack>
            </Box>
        </ThemeProvider>
    );
  }

export default MyContentWidget;