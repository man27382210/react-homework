import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { onCreateFormSubmit } from '../../actions';
import Constant from '../../common/constant';

export class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.state = {
      owner: Constant.OWNER_DEFAULT,
      title: Constant.TITLE_DEFAULT,
      category: Constant.CATEGORY_DEFAULT,
      status: Constant.STATUS_DEFAULT,
      priority: Constant.PRIORITY_DEFAULT,
    };
  }
  resetForm() {
    this.setState({
      owner: Constant.OWNER_DEFAULT,
      title: Constant.TITLE_DEFAULT,
      category: Constant.CATEGORY_DEFAULT,
      status: Constant.STATUS_DEFAULT,
      priority: Constant.PRIORITY_DEFAULT,
    });
  }

  checkValueExist(DOMValues) {
    let valueColumnName;

    // check existance of each column
    const emptyValueExist = Object.keys(DOMValues).every((key) => {
      const result = DOMValues[key] ? true : false;
      if (!result) valueColumnName = key;
      return result;
    });
    // if some column is empty
    // if (valueColumnName) {
    //   console.log(`column '${valueColumnName}' is empty`);
    // }
    return emptyValueExist;
  }
  onSubmit(event) {
    // prevent default form action
    event.preventDefault();

    // send action to create new form element
    if (this.checkValueExist(this.state)) {
      this.props.onCreateFormSubmit(this.state);
      this.resetForm();
    }
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
    const createFormStyle = {
      padding: '20px',
      backgroundColor: 'white',
    };
    return (
      <div id="create-form" className="container z-depth-2" style={ createFormStyle }>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="create-form-owner"
                type="text"
                className={'validate ' + (this.state.owner.length > 0 ? 'valid' : '')}
                name="owner"
                onChange={this.onFormChange}
                value={this.state.owner}
              />
              <label className={this.state.owner.length > 0 ? 'active' : ''}>Owner name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="create-form-title"
                type="text"
                className={'validate ' + (this.state.title.length > 0 ? 'valid' : '')}
                onChange={this.onFormChange}
                value={this.state.title}
                name="title"
              />
              <label className={this.state.title.length > 0 ? 'active' : ''}>Title</label>
            </div>
            <div className="input-field col s6">
              <input
                id="create-form-category"
                type="text"
                className={'validate ' + (this.state.category.length > 0 ? 'valid' : '')}
                onChange={this.onFormChange}
                value={this.state.category}
                name="category"
              />
              <label className={this.state.category.length > 0 ? 'active' : ''}>Category</label>
            </div>
          </div>

          <div className="row">
            <div>
              <Input
                id="create-form-status"
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
                id="create-form-priority"
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

            <div id ="create-form-submit" className="input-field col s3 offset-s3">
              <button onClick={this.onSubmit} className="btn waves-effect waves-light">
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
CreateForm.propTypes = {
  onCreateFormSubmit: PropTypes.func
};

export default connect(null, { onCreateFormSubmit })(CreateForm);
