import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const SelectOption = ({options, selectedOption, setSelectedOption, failedFields }) => {


  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="form-field">
      <label htmlFor="subject">Müraciət növünü seçin</label>
      <Select
        className={`inp ${failedFields.includes('subject') && !selectedOption ? 'red-border' : ''}`}
        placeholder="Müraciət növünü seçin"
        id="subject"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <Option value="">Seçin</Option>
        {/* API'den alınan seçenekleri kullanarak Option bileşenlerini oluşturuyoruz */}
        {options.map((option) => (
          <Option key={option.id} value={option.title}>
            {option.label}
          </Option>
        ))}
      </Select>
      {failedFields.includes('subject') && !selectedOption && <span className="error-message">Bu alan zorunludur.</span>}
    </div>
  );
};

export default SelectOption;
