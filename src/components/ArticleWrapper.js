import { Grid, Typography } from "@mui/material";

import MyArticleHeader from "./MyArticleHeader";
import MyLogoHeader from "./MyLogoHeader";
import ContentParser from "./ContentParser";
import MyContentWidget from "./MyContentWidget";

function ArticleWrapper({headers, contents}) {
  
  return (
    <>
      <MyLogoHeader/>

      <Grid container sx={{ justifyContent: "center" }} >
        <Grid item xs={8} m={6} lg={6}>
          <MyArticleHeader>{headers}</MyArticleHeader>
          <ContentParser contents={contents} />
          <Typography variant="h5" gutterBottom sx={{marginTop: "24px"}}>
            Thanks for reading! If you want more ...
          </Typography>
          <MyContentWidget/>
        </Grid>
      </Grid>
    </>
  );
}

export default ArticleWrapper;
