import { responsiveFontSizes } from '@mui/material/styles';
import mydynamictheme from './myDynamicTheme';

let mode = 'dark'

let dark_mode_theme = mydynamictheme(mode)
const theme = responsiveFontSizes(dark_mode_theme);
export default theme;