import { Card, CardContent, Typography, Box, CardActionArea } from "@mui/material";

function MyArticleCard({route, cardContent}) {

    return(
        <Card sx={{margin: "24px", display: 'flex'}}>
            <CardActionArea href={`/${route}`}>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body1" gutterBottom>
                        {cardContent["page-title"]}
                    </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <Box sx={{ height: 151 }} >
                <div
                    title="Caitlin Cowen portfolio header"
                    style={{
                        height: '151px',
                        width: '151px',
                        backgroundImage: `url('/${cardContent["thumbnail-image"]}')`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                />
            </Box>

        </Card>

     );
}

export default MyArticleCard;