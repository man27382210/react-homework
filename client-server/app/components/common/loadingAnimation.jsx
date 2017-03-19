import React from 'react';

export default () => {
  const loadingStyle = {
    height: '100vh',
    backgroundColor: '#fafafa', // grey
  };
  const contentStyle = {
    width: '100%',
  };
  return (
    <div className="valign-wrapper" style={loadingStyle}>
      <div className="valign center" style={contentStyle}>
        <div className=" cp-spinner cp-balls"></div>
        <p>now loading</p>
      </div>
    </div>
  );
}
