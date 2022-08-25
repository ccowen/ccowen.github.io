import { Paper } from "@mui/material";

function Aside(props) {
  
  return (
    <Paper square={true} sx={{padding: '10px 10px 10px 15px', margin: "20px 10px 20px 20px", backgroundColor: 'lightgrey'}}>
        {props.children}
    </Paper>
  );
}

export default Aside;
