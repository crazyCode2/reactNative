/**
 * 导航页
 */
import { StackNavigator } from 'react-navigation';
import { configRoute } from 'react-navigation-easy-helper';
// 引导页
import GuidePage from './pages/GuidePage';
// 启动页
import LaunchPage from './pages/LaunchPage';
// 登录页
import LoginPage from './pages/LoginPage';
// 主页面
import MainPage from './pages/MainPage';
// 测试页
import TeasetApp from '../node_modules/teaset/example/App';

export const AppNavigator = StackNavigator(
  configRoute({
    GuidePage: {screen: GuidePage}, // 引导页
    LaunchPage: {screen: LaunchPage}, // 启动页
    LoginPage: {screen: LoginPage}, // 登录页
    MainPage: {screen: MainPage}, // 主页面
    TeasetApp: {
      screen: TeasetApp, navigationOptions: {
        header: null
      }
    },
  }), {
    initialRouteName: 'LaunchPage', // 默认启动页
    navigationOptions: {
      header: null
    }
  }
);