/**
 * 首页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { RouteHelper } from 'react-navigation-easy-helper';
import ListRow from 'teaset/components/ListRow/ListRow';
import { NewsStore } from '../../../store/NewsStore.js';
import { toJS } from 'mobx';
import { BaseContainer } from '../../../components';
import { observer } from 'mobx-react';

@observer
export default class HomePage extends Component {

  store = new NewsStore();

  // 跳转详情页


  render() {
    return (
      <BaseContainer
        store={this.store}
        hideLeft
        title={'首页'}
        rightTitle={'详情'}
        rightPress={() => RouteHelper.navigate('HomeDetailPage')}
      >
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
          <ListRow
            title={'重新刷新'}
            onPress={() => {
              this.store.loadData();
              console.log(toJS(this.store.data.tid));
            }}
          />
          {
            this.store.data.tid && this.store.data.tid.map((item, index) =>
              <Text key={item.title}>{JSON.stringify(item)}</Text>
            )
          }
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