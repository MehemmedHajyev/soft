import React from 'react'
import { useState } from 'react';
import Map from './Map';

const MapForm = () => {

   const [nameUser, setName] = useState('');
   const [phoneUser, setPhone] = useState('');
   const [emailUser, setEmail] = useState('');
   const [subjectUser, setSubject] = useState('');
   const [messageUser, setMessage] = useState('');


   async function handleSubmit(e) {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', nameUser);
      formData.append('phone', phoneUser);
      formData.append('email', emailUser);
      formData.append('subject', subjectUser);
      formData.append('message', messageUser);

      await fetch(`https://api.softwarevillage.az/api/core/contact`, {
         method: 'POST',
         mode: 'no-cors',
         headers: {
            "Content-Type": "application/json",
         },
         body: formData,
      })
   }

   function handleClick(){
      setName('');
      setMessage('');
      setEmail('');
      setPhone('');
      setSubject('');
   }

   return (
      <div className="map-form">
         <div className="map-form-container">
          <Map />
            <div className="map-form__form">
               <form  onSubmit={handleSubmit}>
                  <div className="map-form__form-container">
                     <div className="map-form__form-inputs">
                        <input type="text" placeholder="Ad" id='name' value={nameUser} onChange={(e) => setName(e.target.value)} />
                        <input type="number" placeholder="Mobil nömrə" id='number' value={phoneUser} onChange={(e) => setPhone(e.target.value)} />
                     </div>
                     <div className="map-form__form-inputs">
                        <input type="text" placeholder="Elektron poçt" id='email' value={emailUser} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Müraciət növü" id='subject' value={subjectUser} onChange={(e) => setSubject(e.target.value)} />
                     </div>
                     <div className="map-form__form-inputs">
                        <textarea cols="30" rows="10" placeholder='Mesajınız' id='message' value={messageUser} onChange={(e) => setMessage(e.target.value)}></textarea>
                     </div>
                     <button className="map-form__btn" onClick={handleClick}>Mesaj göndər</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default MapForm