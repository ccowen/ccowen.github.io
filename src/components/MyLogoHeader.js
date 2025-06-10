import { AppBar } from "@mui/material";

function MyLogoHeader({colorOverride}) {
    return(
      <AppBar position="sticky"  {... colorOverride ? {color: colorOverride} : {}}>
         <a 
            href="/"
            style={{
               display:'block',
               height: '75px',
               width: '291px',
            }}
         >
            <div
               title="Caitlin Cowen portfolio header"
               style={{
                  height: '75px',
                  width: '291px',
                  backgroundImage:  `url('${process.env.PUBLIC_URL}/portfolio-header.png')`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
               }}
            />
         </a>
      </AppBar>

     );
}

export default MyLogoHeader;