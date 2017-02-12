import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { onModalEdit, onElementItemEdit } from  '../actions/';
import Constant from '../common/constant';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.onFormChange = this.onFormChange.bind(this);
    this.state = {
      ...this.props.modalDisplay
    };
  }
  componentWillReceiveProps(nextProps) {
    // receive central state and set local state
    this.setState({
      ...nextProps.modalDisplay
    });
  }
  onFormChange(event) {
    if (this.state.hasOwnProperty(event.target.name)) {
      const value = {};
      value[event.target.name] = event.target.value;
      this.setState({
        ...value
      });
    }
  }
  render() {
    const style = {
      marginTop: '16px',
      marginBottom: '16px',
      paddingRight: '32px'
    };
    return (
      <div>
        <div id="edit-modal" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="edit-modal-owner"
                  type="text"
                  className="validate"
                  name="owner"
                  onChange={this.onFormChange}
                  value={this.state.owner}
                />
                <label>Owner name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  id="edit-modal-title"
                  type="text"
                  className="validate"
                  onChange={this.onFormChange}
                  value={this.state.title}
                  name="title"
                />
                <label >Title</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="edit-modal-category"
                  type="text"
                  className="validate"
                  onChange={this.onFormChange}
                  value={this.state.category}
                  name="category"
                />
                <label >category </label>
              </div>
            </div>

            <div className="row">
              <div>
                <Input
                  id="edit-modal-status"
                  s={3}
                  type="select"
                  label="status"
                  name="status"
                  onChange={this.onFormChange}
                  value={this.state.status}
                >
                  <option value={Constant.STATUS_DEFAULT} disabled>Choose your status</option>
                  <option value={Constant.STATUS_OPEN}>open</option>
                  <option value={Constant.STATUS_PENDING}>pending</option>
                  <option value={Constant.STATUS_PROCESSING}>processing</option>
                  <option value={Constant.STATUS_CLOSED}>closed</option>
                </Input>
              </div>

              <div>
                <Input
                  id="edit-modal-priorty"
                  s={3}
                  type="select"
                  label="priority"
                  name="priority"
                  onChange={this.onFormChange}
                  value={this.state.priority}
                >
                  <option value={Constant.PRIORITY_DEFAULT} disabled>Choose your priority</option>
                  <option value={Constant.PRIORITY_EMERGENCY}>Emergency</option>
                  <option value={Constant.PRIORITY_IMPORTANT}>important</option>
                  <option value={Constant.PRIORITY_NORAML}>normal</option>
                  <option value={Constant.PRIORITY_NOTHING}>nothing</option>
                </Input>
              </div>
            </div>
          </div>
          <div className="modal-footer" style={style}>
            <button
              className="modal-action modal-close btn waves-effect waves-light indigo"
              onClick={this.props.onModalEdit}
            >
              Edit
              <i className="material-icons right">mode_edit</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
EditModal.propTypes = {
  modalDisplay: PropTypes.object,
  onModalEdit: PropTypes.func,
  onElementItemEdit: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    modalDisplay: state.modalDisplay
  };
}

export default connect(mapStateToProps, { onModalEdit, onElementItemEdit })(EditModal);
