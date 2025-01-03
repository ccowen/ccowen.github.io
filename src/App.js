import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import WovenTimeArticle from './components/pages/WovenTimeArticle';
import './App.css';
import HomePage from './components/pages/HomePage';
import { Box } from '@mui/material';
import theme from './app-theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/woven-time/interactive" element={<WovenTimeArticle/>} />

          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
