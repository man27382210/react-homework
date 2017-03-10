import React from 'react';
import { Link } from 'react-router';

export default () => {
  const wrapperStyle = {
    height: '100vh',
    backgroundColor: '#fafafa', // grey
    position: 'relative',
  };
  const contentStyle = {
    width: '100%',
    position: 'relative',
    top: '-4em',
  };
  const headerStyle = {
    fontSize: '16em',
  };
  const btnStyle = {
    color: '#e91e63',
  };
  return (
    <div className="valign-wrapper" style={wrapperStyle}>
      <div className="valign center" style={contentStyle}>
        <h1 style={headerStyle}>404</h1>
        <h4>It looks like you are lost :(</h4>
          <Link to="/" className="waves-effect waves-light btn-flat" style={btnStyle}>
            <i className="material-icons left">home</i>
            Go back to HomePage
          </Link>
      </div>
    </div>
  );
};
