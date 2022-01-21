import React from 'react';

const MySelect = ({ options, defaulValue, value, onChange }) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option key={defaulValue} disabled value={defaulValue}>
        {defaulValue}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default MySelect;
