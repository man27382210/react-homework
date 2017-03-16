import React from 'react';
import CreateForm from './createForm.jsx';


export default () => {
  const style = {
    paddingTop: '80px',
    paddingBottom: '48px',
    backgroundColor: '#e0e0e0', // gree
  };
  return (
    <header style={style}>
      <CreateForm />
    </header>

  );
};
