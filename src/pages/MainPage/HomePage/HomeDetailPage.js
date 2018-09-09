/**
 * 首页--详情页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { BaseContainer, CameraButton } from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons'; //引入图标
import { Theme, Drawer, ListRow, Button } from 'teaset';
import { images } from '../../../res';

export default class HomeDetailPage extends Component {
  state = {
    detail: '',
    file: '',
    fileName: '',
    rootTransform: 'none'
  }

  // 生命周期--组件加载完毕
  componentDidMount(){
    console.log(this.props);
    // // 获取路由传参
    // let detail = this.props.navigation.state.params.detail;
    // this.setState({
    //   detail
    // });
  }

  // 上传图片
  onFileUpload(file, fileName){
    this.setState({
      file,
      fileName
    });

    // return this.props.uploadAvatar({
    //   id: this.props.user.ID,
    //   type:'logo',
    //   obj:'user',
    //   corpId: this.props.cropId
    // }, file, fileName)
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
    const { detail } = this.props;
    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
        rightView={<Icon name='md-home' size={30} onPress={() => this.toggleMenu('left')} />}
      >
        <ScrollView>
          {/*<Text>{JSON.stringify(this.state.detail)}</Text>*/}
          <CameraButton
            style={styles.cameraBtn}
            photos={[]}
            onFileUpload={this.onFileUpload.bind(this)}
          />
          <Text>{JSON.stringify(detail)}</Text>
        </ScrollView>
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