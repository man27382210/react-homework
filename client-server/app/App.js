import React, { Component } from 'react';
import MainSectionContainer from './containers/MainSectionContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MainSectionContainer />
      </div>
    );
  }
}
