import { Grid, Typography } from "@mui/material";

import MyArticleHeader from "./MyArticleHeader";
import MyLogoHeader from "./MyLogoHeader";
import ContentParser from "./ContentParser";
import MyContentWidget from "./MyContentWidget";
import MyFooter from "./MyFooter";

function ArticleWrapper({headers, contents}) {

  // Split contents into segments of regular and full-width items
  const segments = [];
  let currentRegular = [];

  contents.forEach((item) => {
    if (item.fullWidth) {
      if (currentRegular.length > 0) {
        segments.push({ type: 'regular', items: currentRegular });
        currentRegular = [];
      }
      segments.push({ type: 'fullWidth', items: [item] });
    } else {
      currentRegular.push(item);
    }
  });
  if (currentRegular.length > 0) {
    segments.push({ type: 'regular', items: currentRegular });
  }

  const lastRegularIndex = segments.reduce((last, seg, i) => seg.type === 'regular' ? i : last, -1);

  return (
    <>
      <MyLogoHeader/>

      {segments.map((segment, i) => {
        if (segment.type === 'fullWidth') {
          return <ContentParser key={i} contents={segment.items} />;
        }

        const isFirst = segments.findIndex(s => s.type === 'regular') === i;
        const isLast = i === lastRegularIndex;

        return (
          <Grid key={i} container sx={{ justifyContent: "center" }} >
            <Grid item xs={8} m={6} lg={6}>
              {isFirst && <MyArticleHeader>{headers}</MyArticleHeader>}
              <ContentParser contents={segment.items} />
              {isLast && (
                <>
                  <Typography variant="h5" gutterBottom sx={{marginTop: "48px"}}>
                    Thanks for reading! You can read more of my featured work ...
                  </Typography>
                  <MyContentWidget/>
                </>
              )}
            </Grid>
          </Grid>
        );
      })}

      <MyFooter />
    </>
  );
}

export default ArticleWrapper;
