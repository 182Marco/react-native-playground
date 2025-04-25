import { AppRegistry, Platform } from 'react-native';
import { HomeScreen } from '@/components';
import appConfig from '../../app.json';
import React, { useEffect } from 'react';

const Root = () => <HomeScreen />;

const { name } = appConfig.expo;

if (Platform.OS === 'web') {
  useEffect(() => {
    const rootTag = document.getElementById('app-root');
    if (rootTag) {
      AppRegistry.runApplication(name, {
        initialProps: {},
        rootTag,
      });
    } else {
      console.error("Element with id 'app-root' not found.");
    }
  }, []);
} else {
  AppRegistry.registerComponent(name, () => Root);
}

export default Root;
