import React, { useState, useMemo } from 'react';
import { Box, Typography, Button, Chip, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Masonry from 'react-masonry-css';
import './FeaturedWorkSection.css'; // CSS file for masonry styles
import MyArticleCard from '../../MyArticleCard';

import theme from '../../../myAppDarkTheme';
import { ThemeProvider } from '@mui/material/styles';


function FeaturedWorkSection({ allProjects }) {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [selectedTags, setSelectedTags] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3); // Start with 6 projects

    // Masonry breakpoint configuration
    const breakpointColumns = {
        default: 3,
        1100: 2,
        700: 1
    };

    // Get all unique tags from all projects
    const allTags = useMemo(() => {
        const tags = new Set();
        allProjects.forEach(project => {
            project.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    }, [allProjects]);

    // Get all matching projects (filtered but not sliced)
    const matchingProjects = useMemo(() => {
        if (selectedTags.length === 0) {
            return allProjects;
        }
        return allProjects.filter(project => 
            selectedTags.every(tag => project.tags.includes(tag))
        );
    }, [allProjects, selectedTags]);

    // Filter projects based on selected tags and visible count
    const filteredProjects = useMemo(() => {
        return matchingProjects.slice(0, visibleCount);
    }, [matchingProjects, visibleCount]);

    // Toggle tag selection
    const handleTagClick = (tag) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
        // Reset visible count when filter changes
        setVisibleCount(6);
    };

    // Clear all filters
    const handleClearFilters = () => {
        setSelectedTags([]);
        setVisibleCount(6);
    };

    // Load more projects (add 3 more)
    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    // Check if there are more projects to load
    const hasMoreProjects = filteredProjects.length < matchingProjects.length;

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h4" component="h2" fontWeight="bold" color="grey.200">
                Featured Work
            </Typography>

            {/* Filter Tags */}
            <Box sx={{ mt: 3, mb: 4 }}>
                <Typography variant="body2" sx={{ mb: 2, fontWeight: 'medium' }} color="white">
                    Filter by topic:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    {allTags.map((tag) => (
                        <Chip 
                            key={tag}
                            label={tag.toUpperCase()}
                            onClick={() => handleTagClick(tag)}
                            sx={{ 
                                bgcolor: selectedTags.includes(tag) ? '#9d5aa9' : 'grey.200',
                                color: selectedTags.includes(tag) ? 'white' : '#2c0f31',
                                fontWeight: selectedTags.includes(tag) ? 'bold' : 'medium',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                '&:hover': {
                                    bgcolor: selectedTags.includes(tag) ? 'secondary.dark' : 'grey.300',
                                }
                            }}
                        />
                    ))}
                </Box>
                {selectedTags.length > 0 && (
                    <Button 
                        size="small" 
                        onClick={handleClearFilters}
                        sx={{ textTransform: 'none' }}
                    >
                        Clear filters
                    </Button>
                )}
            </Box>

            {/* Masonry Layout for Cards */}
            {filteredProjects.length > 0 ? (
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {filteredProjects.map((project) => (
                        <div key={project.key} className="masonry-item">
                            <MyArticleCard 
                                route={project.key}
                                cardContent={{
                                    "page-title": project.title,
                                    "article-tags": project.tags,
                                    "thumbnail-image": project.thumbnail,
                                    "date": project.date
                                }}
                            />
                        </div>
                    ))}
                </Masonry>
            ) : (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="body1" color="text.secondary">
                        No projects match the selected filters.
                    </Typography>
                    <Button 
                        variant="outlined" 
                        onClick={handleClearFilters}
                        sx={{ mt: 2 }}
                    >
                        Clear filters
                    </Button>
                </Box>
            )}

            {/* View All and Load More Buttons */}
            <Box sx={{ mt: 6, textAlign: 'center', display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                {hasMoreProjects && (
                    <Button 
                        variant="outlined" 
                        size="large"
                        sx={{ px: 4, py: 1.5 }}
                        onClick={handleLoadMore}
                    >
                        Load More Projects
                    </Button>
                )}
            </Box>
        </ThemeProvider>
    );
}

export default FeaturedWorkSection;