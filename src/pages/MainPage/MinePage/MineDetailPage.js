/**
 * 我的--详情页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BaseContainer } from '../../../components';
// import { RouteHelper } from 'react-navigation-easy-helper';

export default class MineDetailPage extends Component {
  // 生命周期--组件加载完毕
  componentDidMount(){
    // 接收路由传参
    let id = this.props.navigation.state.params.id;
    alert(id);
    // 请求数据
    // this.store.loadData(id);
  }

  render() {
    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
      >
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