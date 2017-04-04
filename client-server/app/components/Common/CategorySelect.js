import React from 'react';

const OPTIONS = [
  'Sports & Outdoors',
  'Kids & Baby',
  'Shoes',
  'Bags & Accessories',
  'Beauty & Health',
  'Clothing',
  'Food & Drinks',
  'Toys & Hobbies',
  'Electronics',
  'Cars & Motorcycles',
  'Others'
];

const renderOptions = (options) => (
  options.map((option) => {
    return (
      <option key={option} value={option}>{option}</option>
    );
  })
);

const CategorySelect = ({ value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
  >
    {renderOptions(OPTIONS)}
  </select>
);

CategorySelect.propTypes = {
  onChange: React.PropTypes.func
};

export default CategorySelect;
