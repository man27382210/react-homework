import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit(event) {
    // prevent default form action
    event.preventDefault();
    const opt = {
      owner: document.getElementById('create-form-owner').value,
      title: document.getElementById('create-form-title').value,
      category: document.getElementById('create-form-category').value,
      status: document.getElementById('create-form-status').value,
      priority: document.getElementById('create-form-priority').value,
    };

    console.log(`submit and\n ${JSON.stringify(opt)}`);
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
              <input id="create-form-owner" type="text" className="validate" />
              <label>Owner name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="create-form-title" type="text" className="validate" />
              <label >Title</label>
            </div>
            <div className="input-field col s6">
              <input id="create-form-category" type="text" className="validate" />
              <label >category </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s3">
              <select id="create-form-status" value={0}>
                <option value="0" disabled>Choose your status</option>
                <option value="1">open</option>
                <option value="2">pending</option>
                <option value="3">processing</option>
                <option value="4">closed</option>
              </select>
              <label>Status </label>
            </div>

            <div className="input-field col s3">
              <select id="create-form-priority"value={0}>
                <option value="0" disabled>Choose your priority</option>
                <option value="1">Emergency</option>
                <option value="2">important</option>
                <option value="3">normal</option>
                <option value="4">nothing</option>
              </select>
              <label>Priority </label>
            </div>

            <div className="input-field col s3 offset-s3">
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
