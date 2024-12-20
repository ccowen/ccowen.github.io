import { Grid, AppBar } from "@mui/material";

import MyTextHeader from "./MyArticleHeader";
import MyLogoHeader from "./MyLogoHeader";
import ContentParser from "./ContentParser";

function ArticleWrapper({headers, contents}) {
  
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <MyLogoHeader />
      </AppBar>

      <Grid container sx={{ justifyContent: "center" }} >
        <Grid item xs={8} m={6} lg={6}>
          <MyTextHeader>{headers}</MyTextHeader>
          <ContentParser contents={contents} />
        </Grid>
      </Grid>
    </>
  );
}

export default ArticleWrapper;
