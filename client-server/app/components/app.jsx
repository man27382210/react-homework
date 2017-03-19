import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onElementListInit, onInitLoadingFinish } from '../actions';
import LoadingAnimation from './common/loadingAnimation.jsx';
const ANIMATION_STAY_SECOND = 0.8;
class App extends React.Component {

  constructor(props) {
    super(props);
    this.Init = this.Init.bind(this);

    // skip loading animation when server-side rendering,
    // otherwise, loading animation will persist at least 0.8 seconds.
    const serverSideRendering = props.loadingFinished || false;
    this.state = {
      finishDelay: serverSideRendering,
    };
  }
  componentDidMount() {
    this.Init();
  }
  componentWillReceiveProps(nextProps) {
    // when elementList was set as initializing,
    // setting loadingFinished to true means that application has finished init.
    if (nextProps.elementList !== this.props.elementList) {
      if (!this.props.loadingFinished) this.props.onInitLoadingFinish(true);
    }
  }
  Init() {
    // application initialize
    console.log('welcome visiting :)');

    // waiting for play waiting animtion
    setTimeout(() => {
      this.setState({
        finishDelay: true
      });
    }, ANIMATION_STAY_SECOND * 1000);

    // ask for todoElementList from here
    this.props.onElementListInit();
  }
  render() {
    if (this.state.finishDelay && this.props.loadingFinished) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
    return (
      <LoadingAnimation />
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
