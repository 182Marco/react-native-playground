import * as R from 'react';
import { AppRegistry, Platform } from 'react-native';
import { HomeScreen } from '@/components';
import appConfig from '../../app.json';

const Root = () => <HomeScreen />;

const { name } = appConfig.expo;

if (Platform.OS === 'web') {
  R.useEffect(() => {
    AppRegistry.runApplication(name, {
      initialProps: {},
      rootTag: document.getElementById('app-root'),
    });
  }, []);
} else {
  AppRegistry.registerComponent(name, () => Root);
}

export default Root;
