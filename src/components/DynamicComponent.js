
import YoutubeEmbed from './YoutubeEmbed';
import DataVisSection from './pages/woven-time/DataVisSection';
import ExtendedSampleSoundCloud from './pages/woven-time/ExtendedSampleSoundCloud';
import MyPlatformHandles from './MyPlatformHandles';
import MyContentWidget from './MyContentWidget';

const components = {
  'YoutubeEmbed': YoutubeEmbed,
  'DataVisSection': DataVisSection,
  'ExtendedSampleSoundCloud': ExtendedSampleSoundCloud,
  'MyPlatformHandles': MyPlatformHandles,
  'MyContentWidget': MyContentWidget
};

const DynamicComponent = ({ componentName, ...props }) => {
  const Component = components[componentName];

  if (!Component) {
    return <div>Component not found</div>;
  }

  return <Component {...props} />;
};

export default DynamicComponent;