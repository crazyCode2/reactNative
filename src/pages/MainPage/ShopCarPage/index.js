/**
 * 购物车
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ShopCarPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>购物车</Text>
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