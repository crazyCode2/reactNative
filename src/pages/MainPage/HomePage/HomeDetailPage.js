/**
 * 首页--详情页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BaseContainer } from '../../../components';
// import { RouteHelper } from 'react-navigation-easy-helper';

export default class HomeDetailPage extends Component {
  render() {
    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
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