/**
 * 加载中 视图组件
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Spinkit from 'react-native-spinkit';

export class LoadingView extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.loadingContainer}>
          <Spinkit size={70} type={'9CubeGrid'}/>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});