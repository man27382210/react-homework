import React, { Component } from 'react';
import MainSection from './components/MainSection';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <MainSection />
      </div>
    );
  }
}
