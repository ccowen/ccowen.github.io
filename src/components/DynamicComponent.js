import { Link } from '@mui/material';

import YoutubeEmbed from './YoutubeEmbed';
import DataVisSection from './pages/woven-time/DataVisSection';
import ExtendedSampleSoundCloud from './pages/woven-time/ExtendedSampleSoundCloud';

const MyLink = ({...props}) => {
  return (
    <Link 
      target="_blank" 
      href={props.href} 
      variant='body1'
      sx={{"marginBottom":"15px!important", "lineHeight": '155%!importtantt'}}
    >{props.text}</Link>
  )
}
const components = {
  'YoutubeEmbed': YoutubeEmbed,
  'DataVisSection': DataVisSection,
  'ExtendedSampleSoundCloud': ExtendedSampleSoundCloud,
  'MyLink': MyLink
};

const DynamicComponent = ({ componentName, ...props }) => {
  const Component = components[componentName];

  if (!Component) {
    return <div>Component not found</div>;
  }

  return <Component {...props} />;
};

export default DynamicComponent;