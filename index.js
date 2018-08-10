/** @format */

import {AppRegistry} from 'react-native';
import './src/base/Config';
import './src/base/Global';
import SplashScreen from 'react-native-splash-screen'

SplashScreen.hide();
import App from './App';
import {name as appName} from './app.json';
//下面两行是屏蔽警告
// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent(appName, () => App);
