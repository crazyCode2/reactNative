/**
 * 将路由添加到栈
 */
import React, { Component } from 'react';
import { RouteHelper } from './RouteHelper';
// hoist-non-react-statics@2.5.0
import hoistNonReactStatics from 'hoist-non-react-statics';

export const addToRouteStack = (OldComponent) => {
  class NewComponent extends Component {
    static displayName = `addToRouteStack(${OldComponent.displayName ||
    OldComponent.name})`;

    componentDidMount() {
      RouteHelper.addStack(this.props.navigation);
    }

    componentWillUnmount() {
      RouteHelper.remove(this.props.navigation);
    }

    render() {
      return <OldComponent
        {...this.props}
        {...this.props.navigation.state.params}
      />
    }
  }

  return hoistNonReactStatics(NewComponent, OldComponent)
};

export function configRoute(routeConfig) {
  for (let name in routeConfig) {
    let Component = routeConfig[name].screen;
    routeConfig[name].screen = addToRouteStack(Component)
  }
  return routeConfig
}