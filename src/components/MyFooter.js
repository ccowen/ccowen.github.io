import { Button, Box, Typography } from "@mui/material";



function MyFooter() {

    return(
        <>
            {/* Footer */}
            <Box 
                component="footer"
                sx={{ 
                    bgcolor: 'grey.900', 
                    color: 'white', 
                    py: 6,
                    textAlign: 'center'
                }}
            >
                <Typography variant="body2" color="grey.400" sx={{ mb: 2 }}>
                    © 2026 Caitlin Cowen. All rights reserved.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <Button 
                        color="inherit" 
                        sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
                        onClick={() => window.open('https://www.linkedin.com/in/caitlin-cowen/')}
                    >
                        LinkedIn
                    </Button>
                    <Button 
                        color="inherit" 
                        sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
                        href="mailto:c.cowen111@gmail.com"
                    >
                        Email
                    </Button>
                </Box>
            </Box>
        </>

    );
}

export default MyFooter;