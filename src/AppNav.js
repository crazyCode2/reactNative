/**
 * 导航页
 */
import { createStackNavigator } from 'react-navigation';
// 引导页
import GuidePage from './pages/GuidePage';
// 启动页
import LaunchPage from './pages/LaunchPage';
// 登录页
import LoginPage from './pages/LoginPage';
// 主页面
import MainPage from './pages/MainPage';
// 首页--详情页
import HomeDetailPage from './pages/MainPage/HomePage/HomeDetailPage';
// 我的--列表页
import MineListPage from './pages/MainPage/MinePage/MineListPage';
// 我的--目录页
import MineCatalogPage from './pages/MainPage/MinePage/MineCatalogPage';
// 我的--详情页
import MineDetailPage from './pages/MainPage/MinePage/MineDetailPage';
// 测试页
import TeasetApp from '../node_modules/teaset/example/App';

export const AppNavigator = createStackNavigator (
  {
    Guide: { // 引导页
      screen: GuidePage
    },
    Launch: { // 启动页
      screen: LaunchPage
    },
    Login: { // 登录页
      screen: LoginPage
    },
    Main: { // 主页面
      screen: MainPage
    },
    HomeDetail: { // 首页--详情页
      screen: HomeDetailPage
    },
    MineList: { // 我的--列表页
      screen: MineListPage
    },
    MineCatalog: { // 我的--目录页
      screen: MineCatalogPage
    },
    MineDetail: { // 我的--详情页
      screen: MineDetailPage
    },
    TeasetApp: {
      screen: TeasetApp,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login', // 默认启动页
    navigationOptions: {
      header: null
    }
  }
);