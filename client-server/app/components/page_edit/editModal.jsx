import React, { PropTypes } from 'react';
import { Input } from 'react-materialize';
import Constant from '../../common/constant';

export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = {
      owner: Constant.OWNER_DEFAULT,
      title: Constant.TITLE_DEFAULT,
      category: Constant.CATEGORY_DEFAULT,
      status: Constant.STATUS_DEFAULT,
      priority: Constant.PRIORITY_DEFAULT,
    };
  }
  checkValueExist(DOMValues) {
    let valueColumnName;

    // check existance of each column
    const emptyValueExist = Constant.COLUMN_TITLES.every((key) => {
      const result = DOMValues[key] ? true : false;
      if (!result) valueColumnName = key;
      return result;
    });
    // if some column is empty
    if (valueColumnName) {
      // console.log(`column '${valueColumnName}' is empty`);
    }
    return emptyValueExist;
  }
  resetForm() {
    this.setState({
      owner: Constant.OWNER_DEFAULT,
      title: Constant.TITLE_DEFAULT,
      category: Constant.CATEGORY_DEFAULT,
      status: Constant.STATUS_DEFAULT,
      priority: Constant.PRIORITY_DEFAULT,
    });
    // this.props.onElementItemEdit({
    //   owner: Constant.OWNER_DEFAULT,
    //   title: Constant.TITLE_DEFAULT,
    //   category: Constant.CATEGORY_DEFAULT,
    //   status: Constant.STATUS_DEFAULT,
    //   priority: Constant.PRIORITY_DEFAULT,
    // });
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
  onSubmit(event) {
    event.preventDefault();

    const fieldValue = {...this.state};
    console.log(fieldValue);
    // do not validate attribute of 'index'
    // delete fieldValue.index;

    // send action to create new form element
    if (this.checkValueExist(fieldValue)) {
    //   this.props.onModalEdit(this.state);
      this.resetForm();
    }
  }
  render() {
    const formStyle = {
      /* vertical | horizontal */
      /* top | right | bottom | left */
      padding: '6% 3% 7% 3%',
      backgroundColor: 'white',
      position: 'relative',
      top: '-5vh'

    };
    const btnStyle = {
      color: '#e91e63',
    };
    return (
      <div id="edit-modal" className="container z-depth-2 valign" style={ formStyle }>
        {/* go-back btn */}
        <a
          className="btn-large waves-effect waves-teal btn-flat left-align"
          style={ btnStyle }
        >
          <i className="material-icons">reply</i>
        </a>

        {/* form */}
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="edit-modal-owner"
                type="text"
                className="validate dynamic-display"
                name="owner"
                onChange={this.onFormChange}
                value={this.state.owner}
              />
              <label className="dynamic-display">Owner name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="edit-modal-title"
                type="text"
                className="validate dynamic-display"
                onChange={this.onFormChange}
                value={this.state.title}
                name="title"
              />
              <label className="dynamic-display">Title</label>
            </div>
            <div className="input-field col s6">
              <input
                id="edit-modal-category"
                type="text"
                className="validate dynamic-display"
                onChange={this.onFormChange}
                value={this.state.category}
                name="category"
              />
              <label className="dynamic-display">category </label>
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

            <div >
              <Input
                id="edit-modal-priority"
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

            <div id ="edit-modal-submit" className="input-field col offset-s4">
              <button
                onClick={this.onSubmit}
                className="btn waves-effect waves-light indigo"
              >
                Edit
                <i className="material-icons right">mode_edit</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
