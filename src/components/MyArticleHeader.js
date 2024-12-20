// reference

// regular
// font-family: "gesta", sans-serif;
// font-weight: 400;
// font-style: normal;

// italic
// font-family: "gesta", sans-serif;
// font-weight: 400;
// font-style: italic;

// medium
// font-family: "gesta", sans-serif;
// font-weight: 500;
// font-style: normal;

// bold
// font-family: "gesta", sans-serif;
// font-weight: 700;
// font-style: normal;

// bold iitaliic
// font-family: "gesta", sans-serif;
// font-weight: 700;
// font-style: italic;

import { Typography, Chip } from "@mui/material";

function MyArticleHeader(props) {
  
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {props.children["page-title"]}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {props.children["author"]}, {props.children["date"]}
      </Typography>
      {/* for loop for each in props.children["article-tags"] */}
      {props.children["article-tags"].map(function(item, i){
        return <Chip label={item} key={i} color="primary"/>
      })}
    </>

  );
}

export default MyArticleHeader;