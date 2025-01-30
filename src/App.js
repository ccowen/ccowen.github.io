import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './myAppTheme';
import './App.css';

import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import WovenTimeArticle from './components/pages/WovenTimeArticle';
import SiteNavigationWovenTime from './components/pages/SiteNavigationWovenTime';
import VendorScorecard from './components/pages/VendorScorecard';
import PageNotFound from './components/pages/PageNotFound';
import VendorScorecardSuccess from './components/pages/VendorScorecardSuccess';
import MusicNotation from './components/pages/MusicNotation';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/about-me" element={<AboutPage/>} />

            <Route exact path="/woven-time/interactive" element={<WovenTimeArticle/>} />
            <Route exact path="/vendor-scorecard" element={<VendorScorecard/>} />
            <Route exact path="/vendor-scorecard-success" element={<VendorScorecardSuccess/>} />
            <Route exact path="/western-music-notation" element={<MusicNotation/>} />

            <Route exact path="/site-navigation-woven-time" element={<SiteNavigationWovenTime/>} />
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
