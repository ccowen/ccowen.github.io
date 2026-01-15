import { AppBar, Button, Toolbar, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import myColors from "../myColors";

function MyLogoHeader({colorOverride}) {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMyWorkClick = () => {
        // If already on homepage, just scroll
        if (window.location.pathname === '/') {
            const element = document.getElementById('my-work');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on another page, navigate to home then scroll
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById('my-work');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        setAnchorEl(null);
    };

    const handleHomeClick = () => {
        navigate('/');
        setAnchorEl(null); // Close menu if open
    };

    const handleAboutClick = () => {
        navigate('/about-me');
        setAnchorEl(null); // Close menu if open
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return(
        <AppBar 
            position="fixed"
            style={colorOverride ? { background: colorOverride, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' } : {}}
        >
            <Toolbar>
                {/* Logo - responsive sizing */}
                <div onClick={handleHomeClick} style={{
                    display:'block',
                    height: isMobile ? '50px' : '75px',
                    width: isMobile ? '194px' : '291px', // Proportionally smaller
                    cursor: 'pointer',
                    flexShrink: 0
                }}>
                    <div title="Caitlin Cowen portfolio header" style={{
                        height: isMobile ? '50px' : '75px',
                        width: isMobile ? '194px' : '291px',
                        backgroundImage: `url('${process.env.PUBLIC_URL}/portfolio-header.png')`,
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }} />
                </div>
                
                <div style={{flexGrow: 1}} />
                
                {/* Desktop Navigation */}
                {!isMobile && (
                    <>
                        <Button onClick={handleAboutClick} sx={{ color: myColors.purpleBlack }}>
                            ABOUT ME
                        </Button>
                        <Button onClick={handleMyWorkClick} sx={{ color: myColors.purpleBlack }}>
                            MY WORK
                        </Button>
                    </>
                )}

                {/* Mobile Navigation */}
                {isMobile && (
                    <>
                        <IconButton edge="end" color={myColors.purpleBlack} aria-label="menu" onClick={handleMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                            <MenuItem onClick={handleAboutClick}>ABOUT ME</MenuItem>
                            <MenuItem onClick={handleMyWorkClick}>MY WORK</MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default MyLogoHeader;