/**
 * 我的
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { RouteHelper } from 'react-navigation-easy-helper';
import ListRow from 'teaset/components/ListRow/ListRow';
import { BaseContainer } from '../../../components';
import { observer } from 'mobx-react';

@observer
export default class MinePage extends Component {
  // 跳转详情页
  goDetail = (id) => {
    RouteHelper.navigate('MineDetailPage',{id: id});
  }

  render() {
    return (
      <BaseContainer
        store={this.store}
        hideLeft
        title={'我的'}
      >
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
          <ListRow
            title={'全部'}
            onPress={() => this.goDetail('1004')}
          />
          <ListRow
            title={'恋爱'}
            onPress={() => this.goDetail('2008001')}
          />
          <ListRow
            title={'日漫'}
            onPress={() => this.goDetail('4')}
          />
          <ListRow
            title={'古风'}
            onPress={() => this.goDetail('4007')}
          />
          <ListRow
            title={'校园'}
            onPress={() => this.goDetail('5002')}
          />
          <ListRow
            title={'搞笑'}
            onPress={() => this.goDetail('14')}
          />
          <ListRow
            title={'穿越'}
            onPress={() => this.goDetail('5010')}
          />
          <ListRow
            title={'VIP'}
            onPress={() => this.goDetail('5011')}
          />
          <ListRow
            title={'畅销'}
            onPress={() => this.goDetail('5029003')}
          />
          <ListRow
            title={'都市'}
            onPress={() => this.goDetail('4003')}
          />
          <ListRow
            title={'治愈'}
            onPress={() => this.goDetail('4001')}
          />
          <ListRow
            title={'漫威'}
            onPress={() => this.goDetail('2010001')}
          />
          <ListRow
            title={'热血'}
            onPress={() => this.goDetail('1')}
          />
          <ListRow
            title={'玄幻'}
            onPress={() => this.goDetail('7001')}
          />
          <ListRow
            title={'冒险'}
            onPress={() => this.goDetail('4006')}
          />
          <ListRow
            title={'完结'}
            onPress={() => this.goDetail('3001')}
          />
        </ScrollView>
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});