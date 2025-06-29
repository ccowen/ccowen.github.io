import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import contentDirectory from "./../directory/contentDirectory.json"
import MyArticleCard from "./MyArticleCard";
import theme from "../myAppDarkTheme";
import myColors from "../myColors";
import { useAppContext } from "../contexts/AppContext";

function MyContentWidget() {
    let location = useLocation();
    const { isContentExpanded } = useAppContext();
    const muiTheme = useTheme(); // Renamed to avoid conflict
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
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
                const cardWidth = isMobile ? 320 : 420; // Smaller cards on mobile
                let calculatedCardsPerRow;
                
                if (isMobile) {
                    // Force 1 card per row on mobile
                    calculatedCardsPerRow = 1;
                } else {
                    calculatedCardsPerRow = Math.floor(containerWidth / cardWidth) || 1;
                }
                
                // Calculate how many rows can fit vertically
                const availableHeight = isMobile ? window.innerHeight - 150 : window.innerHeight - 200;
                const cardHeight = isMobile ? 160 : 182; // Shorter cards on mobile
                const rowsPerPage = Math.floor(availableHeight / cardHeight) || 1;
                
                // Total cards = cards per row × rows per page
                const newCardsPerPage = Math.max(1, calculatedCardsPerRow * rowsPerPage);

                setCardsPerRow(calculatedCardsPerRow);
                setCardsPerPage(newCardsPerPage);
                setGridSize(12 / calculatedCardsPerRow); // 12 for mobile (1 card), 6 for desktop (2 cards)
            }
        }

        // Debounce resize events and add delay for layout to settle
        let timeoutId;
        const debouncedCalculate = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setTimeout(calculateCardsPerPage, 50);
            }, 150);
        };

        const panelChangeCalculate = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(calculateCardsPerPage, 400);
        };

        setTimeout(calculateCardsPerPage, 100);
        
        window.addEventListener('resize', debouncedCalculate);
        
        if (containerRef.current) {
            panelChangeCalculate();
        }
        
        return () => {
            window.removeEventListener('resize', debouncedCalculate);
            clearTimeout(timeoutId);
        };
    }, [location, isContentExpanded, isMobile]); // Added isMobile dependency

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

    const showNavigation = totalPages > 1;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                backgroundColor: myColors.purpleBlack, 
                padding: isMobile ? "12px" : "16px", 
                flexGrow: '1',
                width: '100%',
                maxWidth: '100%',
                overflow: 'hidden'
            }}>
                {/* Header with navigation */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: 2,
                    flexWrap: isMobile ? 'wrap' : 'nowrap'
                }}>
                    <Typography variant={isMobile ? "h5" : "h4"} sx={{ 
                        marginBottom: isMobile ? 1 : 0,
                        width: isMobile ? '100%' : 'auto',
                        textAlign: isMobile ? 'center' : 'left'
                    }}>
                        My Work
                    </Typography>
                    
                    {showNavigation && (
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1,
                            width: isMobile ? '100%' : 'auto',
                            justifyContent: isMobile ? 'center' : 'flex-end'
                        }}>
                            <Typography variant="overline" sx={{ 
                                color: 'text.secondary', 
                                mr: 1,
                                fontSize: isMobile ? '0.7rem' : '0.75rem'
                            }}>
                                {currentPage + 1} of {totalPages}
                            </Typography>
                            <IconButton 
                                onClick={goToPrev}
                                sx={{ 
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                                }}
                                size={isMobile ? "medium" : "small"}
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
                                size={isMobile ? "medium" : "small"}
                            >
                                <ChevronRight />
                            </IconButton>
                        </Box>
                    )}
                </Box>

                {/* Cards container */}
                <Box ref={containerRef} sx={{ overflow: 'hidden', width: '100%' }}>
                    <Grid container spacing={isMobile ? 2 : 3}>
                        {currentCards.map((item) => (
                            <Grid 
                                size={gridSize} // Will be 12 on mobile, 6 on desktop
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

                {/* Dots indicator */}
                {showNavigation && (
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        mt: isMobile ? 2 : 3,
                        gap: 1
                    }}>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Box
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                sx={{
                                    width: isMobile ? 10 : 8,
                                    height: isMobile ? 10 : 8,
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