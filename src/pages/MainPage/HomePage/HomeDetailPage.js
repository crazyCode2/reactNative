/**
 * 首页--详情页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { BaseContainer, CameraButton } from '../../../components';
// import Icon from 'react-native-vector-icons/Ionicons'; //引入图标

export default class HomeDetailPage extends Component {
  state = {
    detail: '',
    file: '',
    fileName: ''
  }

  // 生命周期--组件加载完毕
  componentDidMount(){
    // 获取路由传参
    let detail = this.props.navigation.state.params.detail;
    this.setState({
      detail
    });
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

  render() {
    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
      >
        <ScrollView>
          {/*<Text>{JSON.stringify(this.state.detail)}</Text>*/}
          <CameraButton
            style={styles.cameraBtn}
            photos={[]}
            onFileUpload={this.onFileUpload.bind(this)}
          />
          <Text>{JSON.stringify(this.state.file)}</Text>
          <Text>{this.state.fileName}</Text>
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