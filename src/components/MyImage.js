import { useState } from 'react';
import { Box, Card, CardMedia, Modal } from '@mui/material';

function MyImage({ images, alt = [], maxWidth = 600 }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {images.map((item, i) => {
        const imgAlt = alt[i] || item.split('/').pop().replace(/\.[^.]+$/, '');
        return (
          <Box key={i} sx={{}}>
            <Card sx={{ maxWidth: maxWidth, mx: 'auto' }}>
              <CardMedia
                component="img"
                image={item}
                alt={imgAlt}
                onClick={() => setOpenIndex(i)}
                sx={{
                  width: '99%',
                  height: 'auto',
                  objectFit: 'cover',
                  border: "1px black solid",
                  marginBottom: "20px",
                  cursor: 'pointer'
                }}
              />
            </Card>
          </Box>
        );
      })}

      <Modal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          onClick={() => setOpenIndex(null)}
          sx={{
            outline: 'none',
            maxWidth: '90vw',
            maxHeight: '90vh',
          }}
        >
          {openIndex !== null && (
            <img
              src={images[openIndex]}
              alt={alt[openIndex] || images[openIndex].split('/').pop().replace(/\.[^.]+$/, '')}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 4,
              }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}

export default MyImage;
