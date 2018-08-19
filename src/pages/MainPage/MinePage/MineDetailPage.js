/**
 * 我的--详情页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { BaseContainer, CartoonCell } from '../../../components';
// import { RouteHelper } from 'react-navigation-easy-helper';
import { CartoonStore } from '../../../store/Mine/CartoonStore.js';
// toJS 将可观察数据 转换成 普通数据
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class MineDetailPage extends Component {
  // 漫画数据
  store = new CartoonStore();

  // 生命周期--组件加载完毕
  componentDidMount(){
    let id = this.props.navigation.state.params.id;
    // 请求数据
    this.store.loadData(id);
  }

  render() {
    return (
      <BaseContainer
        store={this.store}
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
      >
        <ScrollView style={styles.container}>
          {
            this.store.data.books && this.store.data.books.map((item, index) =>
              <CartoonCell
                key={item.id}
                cover={item.cover}
                title={item.title}
              />
            )
          }
        </ScrollView>
      </BaseContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    // alignItems:'flex-start'
    // justifyContent: 'center'
  }
});