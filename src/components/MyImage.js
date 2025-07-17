import { Box, Card, CardMedia } from '@mui/material';

function MyImage({ images, maxWidth = 600 }) {
  return ( 
    <>
      {images.map((item, i) => {
        return (
          <Box key={i} sx={{}}>
            <Card sx={{ maxWidth: maxWidth, mx: 'auto' }}>
              <CardMedia
                component="img"
                image={item}
                alt="Example"
                sx={{
                  width: '99%',
                  height: 'auto',
                  objectFit: 'cover',
                  border: "1px black solid",
                  marginBottom: "20px"
                }}
              />
            </Card>
          </Box>
        );
      })}
    </>
  );
}

export default MyImage;
