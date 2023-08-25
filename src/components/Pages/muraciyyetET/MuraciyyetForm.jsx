import React, { useState, useEffect } from 'react';
import { Input, Button, message } from 'antd';
import SelectOption from './SelectOption';
import axios from 'axios';

const MuraciyyetForm = () => {
  const [nameUser, setName] = useState('');
  const [phoneUser, setPhone] = useState('');
  const [emailUser, setEmail] = useState('');
  const [selectedOptionId, setSelectedOptionId] = useState(''); // Güncellendi: selectedOptionId'nin başlangıç değeri boş string

  const [failedFields, setFailedFields] = useState([]);
  // const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameUser || !phoneUser || !emailUser) {
      message.error(<span style={{ color: 'red' }}>Formu tam doldurun!</span>);
      const failedFieldsIds = [];
      if (!nameUser) failedFieldsIds.push('name');
      if (!phoneUser) failedFieldsIds.push('phone');
      if (!emailUser) failedFieldsIds.push('email');
      if (!selectedOptionId) failedFieldsIds.push('course');
      setFailedFields(failedFieldsIds);
      return;
    }



    try {
      const option = options.find((item) => item.title === selectedOptionId)

      const formData = {
        name: nameUser,
        phone: phoneUser,
        email: emailUser,
        course: option.id
      }

      // console.log(formData);
      await axios.post('https://api.softwarevillage.az/api/course-apply', formData);
      message.success('Mesaj uğurla gönderildi!');
      // setModalVisible(true);
      setFailedFields([]);
      setName('');
      setEmail('');
      setPhone('');
      setSelectedOptionId('')
    } catch (error) {
      console.error('Mesaj gönderme hatası:', error);
      message.error('Mesajınız gönderilemedi!');
    }
  };


  useEffect(() => {
    axios
      .get('https://api.softwarevillage.az/api/course-id-for-apply') // Örnek API URL, uygun bir API URL'siyle değiştirilmelidir
      .then((response) => {
        setOptions(response.data); // API yanıtındaki verileri options state'ine kaydediyoruz
      })
      .catch((error) => {
        console.error('API isteği hatası:', error);
      });
  }, []);

  return (
    <div className="muraciyyet-form-inputs-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Ad</label>
          <Input
               style={{ marginTop: '7px' }}

            className={`inp ${failedFields.includes('name') ? 'red-border' : ''}`}
            placeholder="Ad"
            type="text"
            id="name"
            value={nameUser}
            onChange={(e) => setName(e.target.value)}
          />
          {failedFields.includes('name') && <span className="error-message">Bu alan zorunludur.</span>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <Input
               style={{ marginTop: '7px' }}

            className={`inp ${failedFields.includes('email') ? 'red-border' : ''}`}
            placeholder="Daxil edin"
            type="text"
            id="email"
            value={emailUser}
            onChange={(e) => setEmail(e.target.value)}
          />
          {failedFields.includes('email') && <span className="error-message">Bu alan zorunludur.</span>}
        </div>


     
<div className="form-field">
  <label htmlFor="phone">Mobil nömrə</label>
  <Input
     style={{ marginTop: '7px' }}
    className={`inp ${failedFields.includes('phone') ? 'red-border' : ''}`}
    placeholder="Mobil nömrə"
    type="tel"
    id="phone"
    value={phoneUser === '' ? '+994' : phoneUser}
    onChange={(e) => {
      const formattedNumber = e.target.value.replace(/[^0-9+]/g, ''); // Sadece rakamları ve + sembolünü al
      setPhone(formattedNumber);
    }}
  />
  {failedFields.includes('phone') && <span className="error-message">Bu alan zorunludur.</span>}
</div>








        <SelectOption
          options={options}
          selectedOption={selectedOptionId}
          setSelectedOption={setSelectedOptionId}
          failedFields={failedFields}
        />
        <Button
          type="primary"
          htmlType="submit"
          className="send-muraciyyet-btn"
        >
          Müraciət et
        </Button>
      </form>
    </div>
  );
};

export default MuraciyyetForm;
