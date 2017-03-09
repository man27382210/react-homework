import React from 'react';
import EditModal from './editModal.jsx';

export default () => {
  const style = {
    height: '100vh',
    backgroundColor: '#e0e0e0', // gray
  };
  return (
    <div
      className="valign-wrapper"
      style={style}
    >
      <EditModal />
    </div>

  );
};
