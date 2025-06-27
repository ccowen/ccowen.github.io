import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../contexts/AppContext"; // Import the context

function MyLogoHeader({colorOverride}) {
    const navigate = useNavigate();
    const { setIsContentExpanded } = useAppContext();

    const handleMyWorkClick = () => {
        setIsContentExpanded(true);  // Set expanded state
        navigate('/');               // Navigate to home page
    };

    const handleHomeClick = () => {
        setIsContentExpanded(false); // Reset expanded state when going home
        navigate('/');
    };

    return(
        <AppBar position="fixed" {...(colorOverride ? {color: colorOverride} : {})}>
            <Toolbar>
                <div 
                    onClick={handleHomeClick}
                    style={{
                        display:'block',
                        height: '75px',
                        width: '291px',
                        cursor: 'pointer', // Make it clear it's clickable
                    }}
                >
                    <div
                        title="Caitlin Cowen portfolio header"
                        style={{
                            height: '75px',
                            width: '291px',
                            backgroundImage: `url('${process.env.PUBLIC_URL}/portfolio-header.png')`,
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    />
                </div>
                
                <div style={{flexGrow: 1}} />
                
                <Button 
                    onClick={() => navigate('/about-me')}
                >
                    ABOUT ME
                </Button>
                
                <Button 
                    onClick={handleMyWorkClick}
                >
                    MY WORK
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default MyLogoHeader;