import { Card, CardContent, Typography, Box, CardActionArea, Chip } from "@mui/material";

function MyArticleCard({route, cardContent}) {
    const card_max_height = 150;

    return(
        <Card sx={{display: 'flex', height: card_max_height}}>
            <CardActionArea href={`/${route}`} sx={{minWidth: '182px'}}>
                <CardContent 
                    sx={{
                        height: card_max_height,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 2
                    }}
                >
                    <Typography 
                        variant="subtitle2" 
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 4, // Limits to 4 lines max
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            lineHeight: 1.2,
                            marginBottom: 1
                        }}
                    >
                        {cardContent["page-title"]}
                    </Typography>
                    <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 0.5,
                        overflow: 'hidden',
                    }}>
                        {cardContent["article-tags"].map(function(item, i){
                            return <Chip label={item} key={i} color="secondary" size="small" sx={{ marginBottom: .5 }}/>
                        })}
                    </Box>
                </CardContent>
            </CardActionArea>
            <Box sx={{ height: card_max_height, width: card_max_height, flexShrink: 0 }} >
                <div
                    title="project thumbnail"
                    style={{
                        height: `${card_max_height}px`,
                        width: `${card_max_height}px`,
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