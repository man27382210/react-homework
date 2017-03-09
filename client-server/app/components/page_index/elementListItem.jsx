import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { onElementItemEdit, onElementItemDelete } from 'actions';

export class ElementListItem extends Component {
  constructor(props) {
    super(props);
    this.onEditBtnClick = this.onEditBtnClick.bind(this);
    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
  }
  onEditBtnClick() {
    // set state of modalDisplay
    this.props.onElementItemEdit({...this.props.element, index: this.props.index});
  }
  onDeleteBtnClick() {
    // delete element from the list
    this.props.onElementItemDelete({...this.props.element, index: this.props.index});
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
ElementListItem.propTypes = {
  element: PropTypes.object.isRequired,
  index: PropTypes.number,
  onElementItemEdit: PropTypes.func,
  onElementItemDelete: PropTypes.func,
};

export default connect(null, {onElementItemEdit, onElementItemDelete})(ElementListItem);
