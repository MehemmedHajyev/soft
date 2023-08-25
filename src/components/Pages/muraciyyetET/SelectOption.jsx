import { Select } from 'antd';

const { Option } = Select;

const SelectOption = ({options, selectedOption, setSelectedOption, failedFields }) => {


  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  return (
    // <div className="form-field">
    //   <label htmlFor="subject">Müraciət növünü seçin</label>
    //   <Select
    //     className={`inp ${failedFields.includes('subject') && !selectedOption ? 'red-border' : ''}`}
    //     placeholder="Müraciət növünü seçin"
    //     id="subject"
    //     value={selectedOption}
    //     onChange={handleSelectChange}
    //   >
    //     <Option value="">Seçin</Option>
    //     {/* API'den alınan seçenekleri kullanarak Option bileşenlerini oluşturuyoruz */}
    //     {options.map((option) => (
    //       <Option key={option.id} value={option.title}>
    //         {option.label}
    //       </Option>
    //     ))}
    //   </Select>
    //   {failedFields.includes('subject') && !selectedOption && <span className="error-message">Bu alan zorunludur.</span>}
    // </div>
    <div className="form-field">
  <label htmlFor="subject">Müraciət növünü seçin</label>
  <Select
       style={{ marginTop: '7px' }}

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
  {failedFields.includes('course') && !selectedOption && <span className="error-message">Bu alan zorunludur.</span>}
</div>
  );
};

export default SelectOption;
