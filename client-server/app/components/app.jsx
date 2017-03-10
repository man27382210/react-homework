import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onElementListInit, onInitLoadingFinish } from 'actions';

class App extends React.Component {

  componentDidMount() {
    // application initialize
    console.log('welcome visiting :)');

    // ask for todoElementList from here
    this.props.onElementListInit();
  }
  componentWillReceiveProps(nextProps) {
    // when elementList was set as initializing,
    // setting loadingFinished to true means that application has finished init.
    if (nextProps.elementList !== this.props.elementList) {
      if (!this.props.loadingFinished) this.props.onInitLoadingFinish(true);
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  elementList: PropTypes.array,
  onElementListInit: PropTypes.func,
  loadingFinished: PropTypes.bool,
  onInitLoadingFinish: PropTypes.func,
  children: React.PropTypes.element.isRequired,
};

function mapStateToProps(state) {
  return {
    elementList: state.elementList,
    loadingFinished: state.loadingFinished,
  };
}

export default connect(mapStateToProps, { onElementListInit, onInitLoadingFinish })(App);
