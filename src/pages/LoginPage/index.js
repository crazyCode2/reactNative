/**
 * 登录页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { RouteHelper } from 'react-navigation-easy-helper';
import { BaseContainer } from '../../components';

@inject('userStore')
@observer
export default class LoginPage extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: 'LoginPage',
  });

  // 登录操作
  _login = () => {
    const { userStore, navigation } = this.props;
    const { routeName, params, successCallBack } = navigation.state.params;
    userStore.login({
      account: '157xxxxxxxx',
      password: '111111',
      store: this.store,
      type: 'account',
      callBack: () => {
        if (userStore.isLogin) {
          if (routeName) {
            RouteHelper.replace(routeName, params)
          }
          if (successCallBack) {
            RouteHelper.goBack();
            successCallBack();
          }
        }
      }
    })
  };

  // 注册操作
  _register = () => {
    alert('注册');
  }

  render() {
    return (
      <BaseContainer
        hideLeft
        title={'登录页'}
        rightTitle={'注册'}
        rightPress={this._register}
      >
        <Button onPress={this._login} title={'登录'}/>

        <Button onPress={() => {
          this.props.navigation.navigate('LaunchPage')
        }} title={'跳转启动页'}/>
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});