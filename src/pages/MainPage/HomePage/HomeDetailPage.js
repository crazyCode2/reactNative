/**
 * 首页--详情页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BaseContainer } from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons'; //引入图标
import { createDrawerNavigator } from 'react-navigation';
// 第一页
import FirstScreen from './FirstScreen';
// 第二页
import SecondScreen from './SecondScreen';
// 侧边菜单(抽屉)
const MyDrawerNavigator = createDrawerNavigator({
  First: {
    screen: FirstScreen,
  },
  Second: {
    screen: SecondScreen,
  },
},{
  drawerWidth: 220, // 抽屉宽
  drawerPosition: 'left', // 抽屉在左边还是右边
  // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
  contentOptions: {
    initialRouteName: FirstScreen, // 默认页面组件
    activeTintColor: '#008AC9',  // 选中文字颜色
    activeBackgroundColor: '#f5f5f5', // 选中背景颜色
    inactiveTintColor: '#000',  // 未选中文字颜色
    inactiveBackgroundColor: '#fff', // 未选中背景颜色
    style: {  // 样式
      //
    }
  }
});

export default class HomeDetailPage extends Component {
  state = {
    detail: ''
  }

  // 生命周期--组件加载完毕
  componentDidMount(){
    // 获取路由传参
    let detail = this.props.navigation.state.params.detail;
    this.setState({
      detail
    });
  }

  // 显示或隐藏侧边菜单(抽屉)
  toggleMenu(){
    // this.props.navigation.openDrawer(); // 打开抽屉
    // this.props.navigation.closeDrawer(); // 关闭抽屉
  }

  render() {
    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
        rightView={<Icon name='md-home' size={30} onPress={() => this.toggleMenu()} />}
      >
        <Text>{JSON.stringify(this.state.detail)}</Text>
      </BaseContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  }
});