import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { onElementItemEdit } from '../actions/';

class ElementListItem extends Component {
  constructor(props) {
    super(props);
    this.onEditBtnClick = this.onEditBtnClick.bind(this);
    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
  }
  onEditBtnClick() {
    // console.log(`onEditBtnClick and element = \n${JSON.stringify(this.state)}`);
    // set state of modalDisplay
    console.log(`index =${this.props.index}`);
    this.props.onElementItemEdit({...this.props.element, index: this.props.index});
  }
  onDeleteBtnClick() {
    console.log(`onDeleteBtnClick = \n${JSON.stringify(this.props.element)}`);
  }
  render() {
    const style = {
      marginRight: '8px'
    };
    return (
      <tr>
        <td>{ this.props.element.sequenceNumber }</td>
        <td>{ this.props.element.status }</td>
        <td>{ this.props.element.category }</td>
        <td>{ this.props.element.title }</td>
        <td>{ this.props.element.owner }</td>
        <td>{ this.props.element.priority }</td>
        <td>
          <a
            href="#edit-modal"
            className="btn-floating waves-effect waves-light indigo"
            style={style}
            onClick={ this.onEditBtnClick }
          >
            <i className="material-icons">mode_edit</i>
          </a>
          <a
            className="btn-floating waves-effect waves-light red"
            onClick={ this.onDeleteBtnClick }
          >
            <i className="material-icons">delete</i>
          </a>
        </td>
      </tr>
    );
  }
}
ElementListItem.PropTypes = {
  element: PropTypes.object.isRequired,
  index: PropTypes.number,
  onElementItemEdit: PropTypes.func,
};

export default connect(null, {onElementItemEdit})(ElementListItem);
