import { Grid } from "@mui/material";

function ArticleTextWrapper(props) {
  
  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8}>
            {props.children}
        </Grid>
    </Grid>
  );
}

export default ArticleTextWrapper;
