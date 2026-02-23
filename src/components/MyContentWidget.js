import { useLocation } from 'react-router-dom';
import { Box } from "@mui/material";
import Masonry from 'react-masonry-css';
import './pages/home/FeaturedWorkSection.css';

import contentDirectory from "./../directory/contentDirectory.json"
import MyArticleCard from "./MyArticleCard";

function MyContentWidget() {
    const location = useLocation();

    const content = contentDirectory["content-directory"]
    const skipPages = ["about-me", "page-not-found", "site-navigation-woven-time", "global-footprint-network-united-states-and-canada"]

    const filteredContent = Object.keys(content)
        .filter(key => !skipPages.includes(key) && location.pathname !== `/${key}`);

    const breakpointColumns = {
        default: 2,
        700: 1
    };

    return (
        <Box sx={{
            backgroundColor: '#F5F5F5',
            padding: 2,
            width: '100%',
            borderRadius: 2
        }}>
            <Masonry
                breakpointCols={breakpointColumns}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {filteredContent.map((key) => (
                    <div key={key} className="masonry-item">
                        <MyArticleCard
                            route={key}
                            cardContent={content[key]}
                            chipColor="primary"
                        />
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}

export default MyContentWidget;
