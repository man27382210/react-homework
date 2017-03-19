import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { onElementItemDelete } from '../../actions';

export class ElementListItem extends Component {
  constructor(props) {
    super(props);
    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
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
          <Link to={`/edit/${this.props.index + 1}`}
            className="btn-floating waves-effect waves-light indigo"
            style={style}
          >
            <i className="material-icons">mode_edit</i>
          </Link>
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
  onElementItemDelete: PropTypes.func,
};

export default connect(null, { onElementItemDelete })(ElementListItem);
