import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './myAppTheme';
import './App.css';

import { AppProvider } from './contexts/AppContext';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import WovenTimeArticle from './components/pages/WovenTimeArticle';
import SiteNavigationWovenTime from './components/pages/SiteNavigationWovenTime';
import VendorScorecard from './components/pages/VendorScorecard';
import PageNotFound from './components/pages/PageNotFound';
import VendorScorecardSuccess from './components/pages/VendorScorecardSuccess';
import MusicNotation from './components/pages/MusicNotation';
import GlobalFootprintNetworkUnitedStatesAndCanada from './components/pages/GlobalFootprintNetworkUnitedStatesAndCanada';

function App() {

  useEffect(() => {
    // Only load analytics in production
    if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_GA_TRACKING_ID) {
      // Load gtag script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TRACKING_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', process.env.REACT_APP_GA_TRACKING_ID);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppProvider>
        <Box>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about-me" element={<AboutPage/>} />

            <Route path="/woven-time/interactive" element={<WovenTimeArticle/>} />
            <Route path="/vendor-scorecard" element={<VendorScorecard/>} />
            <Route path="/vendor-scorecard-success" element={<VendorScorecardSuccess/>} />
            <Route path="/western-music-notation" element={<MusicNotation/>} />
            <Route path="/global-footprint-network-united-states-and-canada" element={<GlobalFootprintNetworkUnitedStatesAndCanada/>} />

            <Route path="/site-navigation-woven-time" element={<SiteNavigationWovenTime/>} />
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </Box>
        </AppProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
