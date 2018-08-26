/**
 * 第一页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BaseContainer } from '../../../components';

export default class ShopCarPage extends Component {
  render() {
    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'第一页'}
      >
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