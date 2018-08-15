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
import { ListRow, Input } from 'teaset';
/**
 * @inject 注入需要的store
 * @observer 修饰react组件类
 */
import { inject, observer } from 'mobx-react';
import { RouteHelper } from 'react-navigation-easy-helper';
import { BaseContainer } from '../../components';

// @inject 注入需要的store
@inject('userStore')
// @observer 修饰react组件类
@observer
export default class LoginPage extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: 'LoginPage',
  });

  state = {
    account: '', // 用户名
    password: '' // 密码
  }

  // 登录操作
  _login = () => {
    const { userStore, navigation } = this.props;
    // const { routeName, params, successCallBack } = navigation.state.params;

    console.log(userStore);
    console.log(navigation);
    console.log(this.store);

    // userStore.login({
    //   account: '157xxxxxxxx',
    //   password: '111111',
    //   store: this.store,
    //   type: 'account',
    //   callBack: () => {
    //     if (userStore.isLogin) {
    //       if (routeName) {
    //         RouteHelper.replace(routeName, params)
    //       }
    //       if (successCallBack) {
    //         RouteHelper.goBack();
    //         successCallBack();
    //       }
    //     }
    //   }
    // });
  };

  // 注册操作
  _register = () => {
    this.props.navigation.navigate('LaunchPage')
  }

  render() {
    return (
      <BaseContainer
        hideLeft
        title={'登录页'}
        rightTitle={'注册'}
        rightPress={this._register}
      >
        {/*用户名*/}
        <ListRow title='用户名' detail={
          <Input
            style={{width: 200}}
            value={this.state.account}
            placeholder='用户名'
            onChangeText={text => 
              this.setState({account: text})
            }
          />
        } topSeparator='full' />
        {/*密码*/}
        <ListRow title='密码' detail={
          <Input
            style={{width: 200}}
            value={this.state.password}
            placeholder='密码'
            onChangeText={text => 
              this.setState({password: text})
            }
          />
        } topSeparator='full' />
        {/*登录*/}
        <Button onPress={this._login} title={'登录'} />

        {/*<Button onPress={() => {
          this.props.navigation.navigate('LaunchPage')
        }} title={'跳转启动页'}/>*/}
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