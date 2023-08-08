import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const CustomSelect = ({ value, options, onChange }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: 200 }}
      placeholder="Select an option"
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
