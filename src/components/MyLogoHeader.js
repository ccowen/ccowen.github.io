function MyLogoHeader() {
    return(
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
               backgroundImage:  "url('/portfolio-header.png')",
               backgroundSize: "100%",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
            }}
         />
      </a>

     );
}

export default MyLogoHeader;