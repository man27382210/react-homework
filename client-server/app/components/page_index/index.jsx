import React from 'react';
import Header from './header.jsx';
import ElementList from './elementList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <ElementList />
      </div>
    );
  }
}
