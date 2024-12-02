import { InterpreterMode } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

function MyParagraph({header, content}) {
  return(
    <>
      {header != null ? <MySectionTitle>{header}</MySectionTitle> : null}
      {Object.keys(content).map((key, index) => (
        <Typography key={index} variant="body1" sx={{"marginBottom":"15px", "lineHeight": '155%'}}>
          {content[key]}
        </Typography>
      ))}
    </>
  )
}

function MySectionTitle(props) {
  return(
      <Typography variant="h5" gutterBottom style={props.style}>
          {props.children}
      </Typography>
  )
}

function ContentParser({contents}) {
  const renderedContent = [];

  {contents.map((item, i) => (
    renderedContent.push(
      (item.type == "text" ?
        <MyParagraph key={i} header={item.header} content={item.content}/>
      : null)
    ))
  )}
  return renderedContent
}
function ArticleWrapper({contents}) {
  
  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8}>
          <ContentParser contents={contents} />
        </Grid>
    </Grid>
  );
}

export default ArticleWrapper;
