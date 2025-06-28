import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import contentDirectory from "./../directory/contentDirectory.json"
import MyArticleCard from "./MyArticleCard";
import theme from "../myAppDarkTheme";
import myColors from "../myColors";
import { useAppContext } from "../contexts/AppContext";

function MyContentWidget() {
    let location = useLocation();
    const { isContentExpanded } = useAppContext();
    const [currentPage, setCurrentPage] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(2);
    const [cardsPerRow, setCardsPerRow] = useState(2);
    const [gridSize, setGridSize] = useState(6)
    const containerRef = useRef(null);

    const content = contentDirectory["content-directory"]
    const skipPages = ["about-me", "page-not-found", "future-friday-may-2025", "site-navigation-woven-time"]

    // Filter content and convert to array
    const filteredContent = Object.keys(content)
        .filter(key => !skipPages.includes(key) && location.pathname !== `/${key}`)
        .map(key => ({ key, ...content[key] }));

    // Calculate cards per page based on container width and height
    useEffect(() => {
        const calculateCardsPerPage = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const cardWidth = 420; // Approximate card width including spacing
                const calculatedCardsPerRow = Math.floor(containerWidth / cardWidth) || 1;
                
                // Calculate how many rows can fit vertically
                const availableHeight = window.innerHeight - 200;
                const cardHeight = 182; 
                const rowsPerPage = Math.floor(availableHeight / cardHeight) || 1;
                
                // Debug logging
                // console.log('Container width:', containerWidth);
                // console.log('Available height:', availableHeight);
                // console.log('Cards per row:', calculatedCardsPerRow);
                // console.log('Rows per page:', rowsPerPage);
                // console.log('Cards per page:', calculatedCardsPerRow * rowsPerPage);
                
                // Total cards = cards per row × rows per page
                const newCardsPerPage = Math.max(1, calculatedCardsPerRow * rowsPerPage); // Minimum 1 card

                setCardsPerRow(calculatedCardsPerRow);
                setCardsPerPage(newCardsPerPage);
                setGridSize(12 / calculatedCardsPerRow); // Update grid size for MUI Grid
            }
        }

        // Debounce resize events and add delay for layout to settle
        let timeoutId;
        const debouncedCalculate = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                // Double timeout to ensure DOM has updated
                setTimeout(calculateCardsPerPage, 50);
            }, 150);
        };

        // For panel collapse/expand, use a longer delay
        const panelChangeCalculate = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(calculateCardsPerPage, 400); // Wait for animation + buffer
        };

        // Initial calculation with delay
        setTimeout(calculateCardsPerPage, 100);
        
        // Use different delays for resize vs panel changes
        window.addEventListener('resize', debouncedCalculate);
        
        // Trigger calculation when panel state changes
        if (containerRef.current) {
            panelChangeCalculate();
        }
        
        return () => {
            window.removeEventListener('resize', debouncedCalculate);
            clearTimeout(timeoutId);
        };
    }, [location, isContentExpanded]); // The isContentExpanded change will trigger this

    // Reset to first page when cards per page changes
    useEffect(() => {
        setCurrentPage(0);
    }, [cardsPerPage]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredContent.length / cardsPerPage);
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = filteredContent.slice(startIndex, endIndex);

    const goToNext = () => {
        setCurrentPage(prev => (prev + 1) % totalPages);
    };

    const goToPrev = () => {
        setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    };

    // Don't show navigation if all cards fit on one page
    const showNavigation = totalPages > 1;
    
    // Debug logging
    // console.log("In render - cardsPerRow:", cardsPerRow);
    // console.log("In render - gridSize:", gridSize);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor: myColors.purpleBlack, padding: "16px", flexGrow: '1'}}>
                {/* Header with navigation */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: 2
                }}>
                    <Typography variant="h4">
                        My Work
                    </Typography>
                    
                    {showNavigation && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="overline" sx={{ color: 'text.secondary', mr: 1 }}>
                                {currentPage + 1} of {totalPages}
                            </Typography>
                            <IconButton 
                                onClick={goToPrev}
                                sx={{ 
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                                }}
                                size="small"
                            >
                                <ChevronLeft />
                            </IconButton>
                            <IconButton 
                                onClick={goToNext}
                                sx={{ 
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                                }}
                                size="small"
                            >
                                <ChevronRight />
                            </IconButton>
                        </Box>
                    )}
                </Box>

                {/* Cards container */}
                <Box ref={containerRef} sx={{ overflow: 'hidden' }}>
                    <Grid container spacing={3}>
                        {currentCards.map((item) => (
                            <Grid 
                                size={{ xs: gridSize, sm: gridSize, md: gridSize, lg: gridSize }} 
                                key={item.key}
                            >
                                <MyArticleCard 
                                    route={item.key} 
                                    cardContent={content[item.key]} 
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Optional: Dots indicator */}
                {showNavigation && (
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        mt: 3,
                        gap: 1
                    }}>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Box
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    backgroundColor: index === currentPage ? 'white' : 'rgba(255,255,255,0.3)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        backgroundColor: index === currentPage ? 'white' : 'rgba(255,255,255,0.6)'
                                    }
                                }}
                            />
                        ))}
                    </Box>
                )}
            </Box>
        </ThemeProvider>
    );
}

export default MyContentWidget;