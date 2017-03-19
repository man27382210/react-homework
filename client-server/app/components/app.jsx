import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onElementListInit, onInitLoadingFinish } from '../actions';
import LoadingAnimation from './common/loadingAnimation.jsx';
const ANIMATION_STAY_SECOND = 0.8;
class App extends React.Component {

  constructor(props) {
    super(props);
    this.Init = this.Init.bind(this);

    // when the final route match '*', it means catch component NotFound
    const routePath = props.routes[props.routes.length - 1].path;
    let pageNotFound;
    if (routePath) {
      pageNotFound = routePath.match(/\*/) ? true : false;
    } else {
      pageNotFound = false;
    }

    // skip loading animation when server-side rendering,
    // otherwise, loading animation will persist at least 0.8 seconds.
    const serverSideRendering = props.loadingFinished || false;

    // set local state
    this.state = {
      finishDelay: serverSideRendering,
      pageNotFound,
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
    /*
     * situations to skip loading animation
     * 1. server-side rendering
     * 2. component is NotFound
    */
    if (this.state.finishDelay && this.props.loadingFinished || this.state.pageNotFound) {
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
  routes: React.PropTypes.array,
};

function mapStateToProps(state) {
  return {
    elementList: state.elementList,
    loadingFinished: state.loadingFinished,
  };
}

export default connect(mapStateToProps, { onElementListInit, onInitLoadingFinish })(App);
