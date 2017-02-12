import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { onElementItemEdit } from '../actions/';

class ElementListItem extends Component {
  constructor(props) {
    super();
    this.onEditBtnClick = this.onEditBtnClick.bind(this);
    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
    this.state = {
      ...props.element
    };
  }

  onEditBtnClick() {
    // console.log(`onEditBtnClick and element = \n${JSON.stringify(this.state)}`);
    // set state of modalDisplay
    this.props.onElementItemEdit({...this.state});
  }
  onDeleteBtnClick() {
    console.log(`onDeleteBtnClick = \n${JSON.stringify(this.state)}`);
  }
  render() {
    const style = {
      marginRight: '8px'
    };
    return (
      <tr>
        <td>{ this.state.sequenceNumber }</td>
        <td>{ this.state.status }</td>
        <td>{ this.state.category }</td>
        <td>{ this.state.title }</td>
        <td>{ this.state.owner }</td>
        <td>{ this.state.priority }</td>
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
  element: PropTypes.object,
  onElementItemEdit: PropTypes.func,
};

export default connect(null, {onElementItemEdit})(ElementListItem);
