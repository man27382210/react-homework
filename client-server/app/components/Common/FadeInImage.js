import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import styles from './FadeInImage.css';

class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
  }

  handleImageLoaded() {
    this.setState({
      isLoaded: true
    });
  }

  handleImageErrored() {
    this.setState({
      isLoaded: true
    });
    const imgTag = ReactDOM.findDOMNode(this.refs.img);
    imgTag.src = '/img/640x480.png';
  }

  render() {
    return (
      <img
        ref="img"
        className={`${styles.image} ${this.state.isLoaded && styles.imageLoaded}`}
        src={this.props.src}
        onLoad={this.handleImageLoaded}
        onError={this.handleImageErrored}
      />
    );
  }
}

LazyImage.propTypes = {
  src: React.PropTypes.string.isRequired
};

export default LazyImage;
