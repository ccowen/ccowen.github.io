import { Typography, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import ArticleTextWrapper from "../ArticleTextWrapper";
import Aside from "../Aside";


function MyParagraph(props) {
    return(
        <Typography variant="body1" sx={{"marginBottom":"15px", "lineHeight": '155%'}}>
            {props.children}
        </Typography>
    )
}

function MySectionTitle(props) {
    return(
        <Typography variant="h5" gutterBottom style={props.style}>
            {props.children}
        </Typography>
    )
}


function HomePage() {

  return (
    <div>
        <ArticleTextWrapper>

            <MySectionTitle style={{marginBottom: '20px'}}>
                Caitlin Cowen
            </MySectionTitle>

            <MyParagraph>
                Hi, I haven't dovoted time to create a homepage, 
                but I wanted to get my contact info on here. :)
            </MyParagraph>
            <Aside>
                <IconButton onClick={() => window.open('mailto:c.cowen111@gmail.com')}>
                    <EmailIcon fontSize="large"/>
                </IconButton>

                <IconButton onClick={() => window.open('https://www.linkedin.com/in/caitlin-cowen/')}>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>

                <IconButton onClick={() => window.open('https://github.com/ccowen')}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
            </Aside>

        </ArticleTextWrapper>


    </div>
  );
}

export default HomePage;
