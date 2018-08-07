/**
 * 工具类 页面
 */
import React, {Component} from 'react';
import { View, ScrollView, Text, Modal } from 'react-native'
import { CommonUtils } from '../utils/index'
import { observer } from 'mobx-react'
import { UtilsPageStore } from '../store/UtilsPageStore'
import { ListRow, Toast } from 'teaset'
import { LoadingUtils } from '../utils/index'
import { images } from "../res";

const IMAGES = [images.ic_photo1, images.ic_photo2, images.ic_photo3];

import ImageViewer from 'react-native-image-zoom-viewer';
import BaseContainer from "../components/BaseContainer";

const Images = [{
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
  // Pass props to <Image />.
  props: {
    // headers: ...
  }
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}];

@observer
export default class UtilsPage extends Component {
  store = new UtilsPageStore();

  constructor(props) {
    super(props);
    this.state = {
      modelShow: false
    }
  }

  showChooseCity = () => {
    CommonUtils.showChooseCity((value) => {
      this.store.setChooseArea(value)
    }, (value) => {
      this.store.setChooseArea(value)
    })
  };

  showBigImages = () => {
    CommonUtils.showBigImages(this.clickView, 1, IMAGES,
      (index) => {
        Toast.message(`点击了第${index + 1}张`)
      })
  };

  showLoading = () => {
    LoadingUtils.show();
    setTimeout(() => {
      LoadingUtils.hide()
    }, 2000)
  };

  showCustomLoading = () => {
    LoadingUtils.show('', '', <View style={{width: 100, height: 100, backgroundColor: 'blue'}}>
      <Text>我是自定义加载框</Text>
    </View>)
  };

  render() {
    return (<BaseContainer title={'工具类用法'}>
      <ScrollView style={{flex: 1}}>
        <ListRow
          title="城市选择"
          onPress={this.showChooseCity}
          detail={`${this.store.chooseArea.province}-${this.store.chooseArea.city}-${this.store.chooseArea.area}`}/>
        <ListRow
          ref={ref => this.clickView = ref}
          title="图片放大"
          onPress={this.showBigImages}
        />
        <ListRow
          title="显示加载框"
          onPress={this.showLoading}
        />
        <ListRow
          title="显示自定义加载框"
          onPress={this.showCustomLoading}
        />
      </ScrollView>
    </BaseContainer>);
  }
}