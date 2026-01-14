import { Box, Container } from '@mui/material';

/**
 * Section Component - Reusable wrapper for homepage sections
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to render inside the section
 * @param {string} props.id - Optional id for anchor links (e.g., "about", "work")
 * @param {string} props.bgcolor - Background color (default: 'transparent')
 * @param {number|string} props.py - Vertical padding in theme spacing units (default: 8)
 * @param {number|string} props.px - Horizontal padding in theme spacing units (default: 0)
 * @param {boolean} props.fullWidth - If true, removes Container max-width constraint
 * @param {object} props.sx - Additional MUI sx prop styles
 */
const MySectionWrapper = ({ 
  children, 
  id,
  bgcolor = 'transparent',
  py = 8,
  px = 0,
  fullWidth = false,
  sx = {},
  ...props 
}) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        bgcolor,
        py,
        px,
        ...sx
      }}
      {...props}
    >
      {fullWidth ? (
        <Box sx={{ px: 3}}>
          {children}
        </Box>
      ) : (
        <Container maxWidth="lg">
          {children}
        </Container>
      )}
    </Box>
  );
};

export default MySectionWrapper;
