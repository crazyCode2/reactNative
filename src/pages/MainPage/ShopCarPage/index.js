/**
 * 购物车
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { BaseContainer } from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons'; //引入图标
import { Theme, Drawer, ListRow, Button } from 'teaset';
import { images } from '../../../res';

export default class ShopCarPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      rootTransform: 'none'
    };
  }

  // 显示或隐藏侧边菜单(抽屉)
  toggleMenu(side){
    let { rootTransform } = this.state;
    this.drawer = Drawer.open(this.renderDrawerMenu(), side, rootTransform);
  }

  // 侧边菜单(抽屉)
  renderDrawerMenu(){
    return (
      <View style={{backgroundColor: Theme.defaultColor, width: 260, flex: 1}}>
        <View style={{height: 60}} />
        <ListRow
          icon={
            <View style={{paddingRight: 12}}>
              <Image style={{width: 30, height: 30, tintColor: Theme.primaryColor}} source={images.error} />
            </View>
          }
          title='User name'
          />
        <ListRow
          icon={images.error}
          title='Home'
          />
        <ListRow
          icon={images.error}
          title='Store'
          bottomSeparator='none'
          />
        <View style={{flex: 1}} />
        <Button type='link' size='sm' title='Hide' onPress={() => this.drawer && this.drawer.close()} />
      </View>
    );
  }

  render() {
    return (
      <BaseContainer
        hideLeft
        title={'购物车'}
        rightView={<Icon name='md-home' size={30} onPress={() => this.toggleMenu('left')} />}
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