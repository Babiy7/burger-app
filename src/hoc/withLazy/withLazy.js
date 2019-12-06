import React, { Component } from "react";

const withLazy = importComponet => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }
    componentDidMount() {
      importComponet().then(component => {
        this.setState({ component: component.default });
      });
    }
    render() {
      const ComponentLazy = this.state.component;
      return this.state.component ? <ComponentLazy {...this.props} /> : null;
    }
  };
};

export default withLazy;
