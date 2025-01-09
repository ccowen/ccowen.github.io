import { createTheme } from '@mui/material/styles';

import myColors from './myColors';

const font = {
    headings: "'gesta', 'Ubuntu', sans-serif",
    body: "'ivyora-display', serif"
}

function mydynamictheme(mode) {

  let theme = createTheme({
    palette: {
        mode,
        ...(mode === 'light'
        ? { 
            primary: {
                main: myColors.primary.main,
                light: myColors.primary.light
            }}
        :{ 
            primary: {
                main: myColors.primary.main,
                light: myColors.dark.light
            }
        })
    }
    ,
    typography: {
      'h3': {
        fontFamily: font.headings,
        fontWeight: 500,
        fontStyle: 'normal',
        color: mode === 'light' ? myColors.primary.main : myColors.whiteGray
      },
      'h4': {
        fontFamily: font.headings,
        fontWeight: 500,
        fontStyle: 'normal',
        color: mode === 'light' ? myColors.primary.main : myColors.whiteGray
      },
      'h5': {
        fontFamily: font.headings,
        fontWeight: 500,
        fontStyle: 'normal',
        color: mode === 'light' ? myColors.primary.main : myColors.whiteGray
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
        fontFamily: font.body,
        color: mode === 'light' ? myColors.purpleBlack : myColors.whiteGray
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
          colorPrimary: (({ theme }) => ({
            backgroundColor: 'transparent',
            [theme.breakpoints.down('lg')]: {
              backgroundColor: myColors.whiteGray,
            },
          })),
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
      MuiCard:{
        styleOverrides: {
          root: {
            boxShadow: 'none',
            backgroundColor: mode === 'light' ? myColors.whiteGray : myColors.purple
          }
        }
      }
    }
  })

  return theme
}

export default mydynamictheme