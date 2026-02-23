import { Card, CardContent, Typography, Box, CardActionArea, Chip, CardMedia } from "@mui/material";


function MyArticleCard({ route, cardContent, chipColor = "secondary" }) {
    return (
        <>
        <Card 
            sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s',
                '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)'
                }
            }}
        >
            <CardActionArea 
                href={`/${route}`}
                sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'flex-start'
                }}
            >
                {/* Image */}
                {cardContent["thumbnail-image"] ? (
                    <CardMedia
                        component="img"
                        image={`/${cardContent["thumbnail-image"]}`}
                        alt={cardContent["page-title"]}
                        sx={{ width: '100%', height: 'auto' }}
                    />
                ) : (
                    <Box
                        sx={{
                            height: 150,
                            bgcolor: 'primary.light',
                            opacity: 0.3
                        }}
                    />
                )}

                {/* Content */}
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Title */}
                    <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{
                            mb: 2,
                            fontStyle: 'italic',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            lineHeight: 1.4,
                            flexGrow: 1
                        }}
                    >
                        {cardContent["page-title"]}
                    </Typography>

                    {/* Date */}
                    {cardContent["date"] && (
                        <Typography 
                            variant="caption" 
                            color="text.secondary" 
                            sx={{ display: 'block', mb: 2 }}
                        >
                            {cardContent["date"]}
                        </Typography>
                    )}

                    {/* Tags */}
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {cardContent["article-tags"].map((tag, i) => (
                            <Chip 
                                key={i}
                                label={tag.toUpperCase()} 
                                size="medium" 
                                color={chipColor}
                                sx={{ 
                                    fontWeight: 'bold',
                                    marginBottom: "4px"
                                }} 
                            />
                            // <Chip label={item} key={i} color="secondary" size="small" sx={{ marginBottom: .5 }}/
                        ))}
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    );
}

export default MyArticleCard;
