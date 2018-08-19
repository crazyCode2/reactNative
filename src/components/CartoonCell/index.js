/**
 * 漫画 子组件
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

export default class CartoonCell extends Component {
  render() {
    return (
      <View style={styles.cell}>
        <Image
          style={styles.image}
          source={{uri: this.props.cover}}
          alt=''
        />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cell: {
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 0,
    marginRight: 0,
    width: '33.3333333333%',
    height: 170,
    alignSelf:'flex-start'
  },
  image: {
    flex: 1,
    height: 150
  },
  title: {
    textAlign: 'center',
    lineHeight: 20
  }
});