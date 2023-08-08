import React, { useState } from 'react';
import { Input, Button, message } from 'antd';

import Map from './Map';
const { TextArea } = Input;

const MapForm = () => {
   const [nameUser, setName] = useState('');
   const [phoneUser, setPhone] = useState('');
   const [emailUser, setEmail] = useState('');
   const [subjectUser, setSubject] = useState('');
   const [messageUser, setMessage] = useState('');

   const [failedFields, setFailedFields] = useState([]); // Ekledik: Boş input alanlarını tutacak state

   async function handleSubmit(e) {
      e.preventDefault();

      // Input alanlarının değerlerini kontrol etmek için bir şart ekleyelim
      if (!nameUser || !phoneUser || !emailUser || !subjectUser || !messageUser) {
         message.error('Formu tam  doldurun!');
         // Ekledik: Boş inputlar olduğunda, failedFields state'ine boş inputların id'lerini ekleyin
         const failedFieldsIds = [];
         if (!nameUser) failedFieldsIds.push('name');
         if (!phoneUser) failedFieldsIds.push('number');
         if (!emailUser) failedFieldsIds.push('email');
         if (!subjectUser) failedFieldsIds.push('subject');
         if (!messageUser) failedFieldsIds.push('message');
         setFailedFields(failedFieldsIds);
         return; // Eğer değerler boş ise, fonksiyonu burada sonlandıralım
      }

      const formData = new FormData();
      formData.append('name', nameUser);
      formData.append('phone', phoneUser);
      formData.append('email', emailUser);
      formData.append('subject', subjectUser);
      formData.append('message', messageUser);

      try {
         await fetch(`https://api.softwarevillage.az/api/core/contact`, {
            method: 'POST',
            headers: {
               "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData).toString(),
         });

         message.success('Mesaj uğurla gönderildi!');
         // Ekledik: Mesaj gönderildiğinde, failedFields state'ini boşaltın
         setFailedFields([]);
         setName('');
         setMessage('');
         setEmail('');
         setPhone('');
         setSubject('');
      } catch (error) {
         console.error('Mesaj gönderme hatası:', error);
         message.error('Mesajiniz gönderilmədi!');
      }
   }

   return (
      <div className="map-form">
         <div className="map-form-container">
            <Map />
            <div className="map-form__form">
               
               <form onSubmit={handleSubmit}>
                  <div className="map-form__form-container">
                     <div className="map-form__form-inputs">
                        <Input
                           placeholder="Ad"
                           type='text'
                           id='name'
                           value={nameUser}
                           onChange={(e) => setName(e.target.value)}
                           // Ekledik: Boş input alanları için border rengini kırmızı olarak ayarlayın
                           style={{ borderColor: failedFields.includes('name') ? 'red' : '' }}
                        />
                        <Input
                           placeholder="Mobil nömrə"
                           type='number'
                           id='number'
                           value={phoneUser}
                           onChange={(e) => setPhone(e.target.value)}
                           // Ekledik: Boş input alanları için border rengini kırmızı olarak ayarlayın
                           style={{ borderColor: failedFields.includes('number') ? 'red' : '' }}
                        />
                     </div>
                     <div className="map-form__form-inputs">
                        <Input
                           placeholder="Elektron poçt"
                           type='text'
                           id='email'
                           value={emailUser}
                           onChange={(e) => setEmail(e.target.value)}
                           // Ekledik: Boş input alanları için border rengini kırmızı olarak ayarlayın
                           style={{ borderColor: failedFields.includes('email') ? 'red' : '' }}
                        />
                        <Input
                           placeholder="Müraciət növüt"
                           type='text'
                           id='subject'
                           value={subjectUser}
                           onChange={(e) => setSubject(e.target.value)}
                           // Ekledik: Boş input alanları için border rengini kırmızı olarak ayarlayın
                           style={{ borderColor: failedFields.includes('subject') ? 'red' : '' }}
                        />
                     </div>
                     <TextArea
                        rows={4}
                        placeholder='Mesajınız'
                        value={messageUser}
                        onChange={(e) => setMessage(e.target.value)}
                        // Ekledik: Boş input alanları için border rengini kırmızı olarak ayarlayın
                        style={{ borderColor: failedFields.includes('message') ? 'red' : '' }}
                     />
                     <Button
                        type="primary"
                        htmlType="submit"
                        className='send-about-btn'
                     >
                        Müraciət et
                     </Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default MapForm;
