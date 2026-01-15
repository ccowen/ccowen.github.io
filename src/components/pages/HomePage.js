import { Box, Typography, Button, Grid, Card, Chip, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { LinkedIn, GitHub, BarChart, Code, Storage, Cloud, MenuBook, Palette,
    Groups, AutoStories, Campaign, Lightbulb, Handshake
 } from '@mui/icons-material';

import MyLogoHeader from "../MyLogoHeader";
import MySectionWrapper from "../MySectionWrapper"; // You'll need to add this component
import myColors from "../../myColors";
import contentDirectory from "./../../directory/contentDirectory.json";
import FeaturedWorkSection from "./home/FeaturedWorkSection";
import MyFooter from "../MyFooter";

function HomePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const technicalSkills = [
        { name: 'Power BI/ reporting', icon: BarChart },
        { name: 'Python', icon: Code },
        { name: 'SQL', icon: Storage },
        { name: 'Data Analysis', icon: MenuBook },
        { name: 'React/ D3.js', icon: Code },
        { name: 'AWS/ data pipelines', icon: Cloud },
    ];

    const professionalSkills = [
        { name: 'Cross Team Collaboration', icon: Groups },
        { name: 'Data Storytelling', icon: AutoStories },
        { name: 'Communication', icon: Campaign },
        { name: 'Problem Solving', icon: Lightbulb },
        { name: 'Design', icon: Palette },
        { name: 'Stakeholder Management', icon: Handshake },
    ];

    // Process content directory to get featured work
    const excludeKeys = ['about-me', 'site-navigation-woven-time', 'page-not-found'];
    const allProjects = Object.entries(contentDirectory['content-directory'])
        .filter(([key]) => !excludeKeys.includes(key))
        .map(([key, value]) => ({
            key: key,
            title: value['page-title'],
            tags: value['article-tags'],
            thumbnail: value['thumbnail-image'],
            date: value['date']
        }));

    return (
        <>
            <MyLogoHeader colorOverride={`linear-gradient(135deg, #f3e0ff 0%, ${myColors.primary.light} 100%)`} />
            
            <Box sx={{ backgroundColor: myColors.whiteGray }}>
                {/* Hero MySectionWrapper */}
                <MySectionWrapper 
                    py={isMobile ? 12 : 16}  
                    sx={{ 
                        background: `linear-gradient(135deg, #f3e0ff 0%, ${myColors.primary.light} 100%)`
                    }}
                >
                    <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                        Welcome & hello!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '900px', mb: 4, lineHeight: 1.7 }}>
                        I'm a creative, detail-oriented professional with a unique blend of education 
                        and experience in <strong>data engineering, analytics & reporting, design, and music theory</strong>. 
                        I have experience transforming complex data into engaging, user-friendly{' '}
                        <strong>data visualizations</strong> to improve user experiences and drive 
                        business insights.
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: 2 }}>
                        <Typography color="text.secondary" variant="body1" sx={{ mb: isMobile ? 0 : 0 }}>
                            Connect with me:
                        </Typography>
                        <Button 
                            variant="outlined" 
                            startIcon={<LinkedIn />}
                            sx={{ borderWidth: 2, borderColor: 'primary.main' }}
                            onClick={() => window.open('https://www.linkedin.com/in/caitlin-cowen/')}
                        >
                            LinkedIn
                        </Button>
                    </Box>
                </MySectionWrapper>

                {/* Professional Skills */}
                <MySectionWrapper bgcolor="background.paper" py={isMobile ? 6 : 10}>
                    <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                        Professional Skills
                    </Typography>
                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        {professionalSkills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <Grid item xs={6} sm={4} md={2} key={skill.name}>
                                    <Card 
                                        sx={{ 
                                            textAlign: 'center', 
                                            p: 3,
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: 4
                                            }
                                        }}
                                    >
                                        <Icon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                                        <Typography variant="body1" fontWeight="medium">
                                            {skill.name}
                                        </Typography>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                    
                </MySectionWrapper>

                {/* Technical Skills */}
                <MySectionWrapper bgcolor="background.paper" py={isMobile ? 6 : 10}>
                    <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                        Technical Skills
                    </Typography>
                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        {technicalSkills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <Grid item xs={6} sm={4} md={2} key={skill.name}>
                                    <Card 
                                        sx={{ 
                                            textAlign: 'center', 
                                            p: 3,
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: 4
                                            }
                                        }}
                                    >
                                        <Icon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                                        <Typography variant="body1" fontWeight="medium">
                                            {skill.name}
                                        </Typography>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                    
                </MySectionWrapper>

                {/* Featured Work */}
                <MySectionWrapper id="my-work" py={isMobile ? 6 : 10} bgcolor={myColors.purpleBlack}>
                    {/* <Box id="my-work"> */}

                    <FeaturedWorkSection allProjects={allProjects} />
                    {/* </Box> */}
                </MySectionWrapper>

                {/* Beyond the Data - Personal MySectionWrapper */}
                <MySectionWrapper 
                    bgcolor="linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 100%)"
                    py={isMobile ? 6 : 10}
                >
                    <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                        Beyond the Data
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        {/* Currently Reading */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ p: 3, height: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                    <MenuBook sx={{ fontSize: 32, color: 'primary.main' }} />
                                    <Typography variant="h6" fontWeight="bold">
                                        Currently Reading
                                    </Typography>
                                </Box>
                                {/* Book 1 */}
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="body1" fontWeight="medium" sx={{ mb: 1 }}>
                                        Lessons in Chemistry
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                        by Bonnie Garmus
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                                        "A brilliant chemist in the 1960s breaks barriers in science and television cooking."
                                    </Typography>
                                </Box>

                                {/* Book 2 */}
                                <Box>
                                    <Typography variant="body1" fontWeight="medium" sx={{ mb: 1 }}>
                                        Vera Wong's Unsolicited Advice for Murderers
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                        by Jesse Q. Sutanto
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                                        "A cozy mystery about a tea shop owner who surprisingly takes solving a murder into her own hands,
                                        making friends along the way."
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>

                        {/* Recent Artwork */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ p: 3, height: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                    <Palette sx={{ fontSize: 32, color: 'primary.main' }} />
                                    <Typography variant="h6" fontWeight="bold">
                                        Recent Artwork
                                    </Typography>
                                </Box>
                                <Box 
                                    sx={{ 
                                        width: '100%', 
                                        bgcolor: 'grey.200',
                                        background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
                                        borderRadius: 2,
                                        mb: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }} 
                                >
                                    <img 
                                        src="/painting-sample.png" 
                                        alt="Recent painting" 
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Box>
                                <Typography variant="body2">
                                    I paint to capture motion and energy - windy skies, swaying trees, and the dynamic patterns found in nature.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </MySectionWrapper>

                {/* Interdisciplinary Background */}
                <MySectionWrapper py={isMobile ? 6 : 10}>
                    <Card 
                        sx={{ 
                            p: isMobile ? 3 : 5,
                            borderLeft: 4,
                            borderColor: 'primary.main'
                        }}
                    >
                        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                            An Interdisciplinary Approach
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                            With an MA in Music Theory & Cognition and 7+ years in data visualization, I bring a unique
                            perspective to understanding patterns - whether in musical structures or complex datasets.
                            This interdisciplinary background helps me create visualizations that display data
                            and tell compelling stories.
                        </Typography>
                        <Button 
                            variant="text" 
                            sx={{ color: 'primary.main', fontWeight: 'medium' }}
                            href="/about-me"
                        >
                            Read more about my background →
                        </Button>
                    </Card>
                </MySectionWrapper>

                {/* Footer */}
                <MyFooter />

            </Box>
        </>
    );
}

export default HomePage;
