import React from 'react';

export default () => {
  // Modal Structure
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
              <input id="owner" type="text" className="validate" />
              <label>Owner name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="title" type="text" className="validate" />
              <label >Title</label>
            </div>
            <div className="input-field col s6">
              <input id="category" type="text" className="validate" />
              <label >category </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s3">
              <select value={0}>
                <option value="0" disabled>Choose your status</option>
                <option value="1">open</option>
                <option value="2">pending</option>
                <option value="3">processing</option>
                <option value="4">closed</option>
              </select>
              <label>Status </label>
            </div>

            <div className="input-field col s3">
              <select value={0}>
                <option value="0" disabled>Choose your priority</option>
                <option value="1">Emergency</option>
                <option value="2">important</option>
                <option value="3">normal</option>
                <option value="4">nothing</option>
              </select>
              <label>Priority </label>
            </div>

          </div>



        </div>
        <div className="modal-footer" style={style}>
          <button className="modal-action modal-close btn waves-effect waves-light indigo">
            Edit
            <i className="material-icons right">mode_edit</i>
          </button>
        </div>
      </div>
    </div>
  );
};
