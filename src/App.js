import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import WovenTimeArticle from './components/pages/WovenTimeArticle';
import './App.css';
import HomePage from './components/pages/HomePage';
import { Box } from '@mui/material';

const color = { 
  palette: {
    primary: {
      main: '#6A84AA',
      light: '#B3CAF2'
    }
  }
}

const font = {
  headings: "'gesta', 'Ubuntu', sans-serif",
  body: "'ivyora-display', serif"
}

let theme = createTheme({
  palette: {
    primary: {
      main: color.palette.primary.main,
      light: color.palette.primary.light
    }
  },
  typography: {
    'h3': {
      fontFamily: font.headings,
      fontWeight: 500,
      fontStyle: 'normal',
      color: color.palette.primary.main
    },
    'h4': {
      fontFamily: font.headings,
      fontWeight: 500,
      fontStyle: 'normal',
      color: color.palette.primary.main
    },
    'h5': {
      fontFamily: font.headings
    },
    // TODO light italic
    'subtitle1': {
      fontFamily: font.body,
      fontWeight: 300,
      fontStyle: 'normal'
    },
    'subtitle2': {
      fontFamily: font.headings,
      fontWeight: 300,
      fontStyle: 'italic'
    },
    'body1': {
      fontFamily: font.body
    },
    'body2': {
      fontFamily: font.body
    }
  },
  components: {
    // Name of the component
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          boxShadow: 'none'
        },
      }
    },
    MuiChip: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontFamily: font.headings,
          fontWeight: 700,
          fontStyle: 'normal',
          textTransform: 'uppercase',
          margin: '4px 12px 16px 0px',
        },
      }
    },
  },
})

theme = responsiveFontSizes(theme);

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
