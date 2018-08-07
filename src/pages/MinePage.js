/**
 * 我的页面
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';
import { images } from "../res";

export default class MinePage extends Component {
  render() {
    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
        <ImageBackground style={{height: 200}} source={images.ic_photo3}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});