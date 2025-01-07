import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";

function MyArticleCard({title, image, tags}) {

    return(
        <Card sx={{margin: "24px", display: 'flex'}}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1" gutterBottom>
                    {title}
                </Typography>
                </Box>

            </CardContent>
            <Box sx={{ height: 151 }} >
                <div
                    title="Caitlin Cowen portfolio header"
                    style={{
                        height: '151px',
                        width: '151px',
                        backgroundImage:  "url('/sun_position4_for_vocal.jpg')",
                        //   backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                />
            </Box>

        </Card>

     );
}

export default MyArticleCard;