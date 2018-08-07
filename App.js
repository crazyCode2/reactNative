/**
 * 入口文件
 */
import React, { Component } from 'react';
import { AppNavigator } from "./src/AppNav";
import { Provider } from 'mobx-react';
import { BaseAppStore } from './src/store/index';
import { RouteHelper } from 'react-navigation-easy-helper';

const store = new BaseAppStore();
const needLoginPage = ['UserPage'];

//设置路由拦截器,项目所有跳转方法推荐都用RouteHelper.navigate()
RouteHelper.routeInterceptor = (routeName, params) => {
  if (!store.userStore.isLogin && needLoginPage.indexOf(routeName) !== -1) {
    RouteHelper.navigate('LoginPage', {
      routeName,
      params
    });
    return false;
  }
  console.log(store, params);
  return true
};


export default class App extends Component<Props> {
  render() {
    return <Provider {...store}>
      <AppNavigator/>
    </Provider>
  }
}