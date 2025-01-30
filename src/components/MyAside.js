import { Paper } from "@mui/material";

import ContentParser from "./ContentParser";

function Aside(props) {
  
  return (
    <Paper 
      square={true} 
      sx={{
        padding: '10px 10px 0px 15px', 
        margin: "20px 10px 20px 20px",
        // no longer displaying large blocks of json, pass param if needeed in future
        // maxHeight: '600px',
        overflow: 'scroll',
        backgroundColor: '#dfdfe6'
      }}>
        {props.children}
    </Paper>
  );
}

function MyAside(props) {
  
    return (
        <Aside>
          <ContentParser contents={props.content} />
        </Aside>
    );
  }

export default MyAside;