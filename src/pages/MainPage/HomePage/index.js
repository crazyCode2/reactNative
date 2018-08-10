/**
 * 首页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>首页</Text>
      </View>
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