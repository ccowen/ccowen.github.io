import { Paper } from "@mui/material";

function Aside(props) {
  
  return (
    <Paper 
      square={true} 
      sx={{
        padding: '10px 10px 0px 15px', 
        margin: "20px 10px 20px 20px", 
        maxHeight: '600px',
        overflow: 'scroll',
        backgroundColor: '#dfdfe6'
      }}>
        {props.children}
    </Paper>
  );
}

export default Aside;
