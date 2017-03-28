import React from 'react';

const OPTIONS = [
  'Publish',
  'Draft'
];

const renderOptions = (options) => (
  options.map((option) => {
    return (
      <option key={option} value={option}>{option}</option>
    );
  })
);

const StatusSelect = ({ value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
  >
    {renderOptions(OPTIONS)}
  </select>
);

StatusSelect.propTypes = {
  onChange: React.PropTypes.func
};

export default StatusSelect;
