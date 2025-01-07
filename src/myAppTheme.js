import { responsiveFontSizes } from '@mui/material/styles';
import mydynamictheme from './myDynamicTheme';

let mode = 'light'

let light_mode_theme = mydynamictheme(mode)
const theme = responsiveFontSizes(light_mode_theme);
export default theme;