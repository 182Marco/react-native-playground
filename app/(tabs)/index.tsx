import { AppRegistry, Platform } from 'react-native';
import { HomeScreen } from '@/components';
import appConfig from '../../app.json';

const Root = () => <HomeScreen />;

const { name } = appConfig.expo;

const runAppOnWeb = () => {
  const rootTag = document.getElementById('app-root');
  if (rootTag) {
    AppRegistry.runApplication(name, {
      initialProps: {},
      rootTag,
    });
  } else {
    console.error("Element with id 'app-root' not found.");
  }
};

if (Platform.OS === 'web') {
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', runAppOnWeb);
  } else {
    console.error('document is not defined');
  }
} else {
  AppRegistry.registerComponent(name, () => Root);
}

export default Root;
