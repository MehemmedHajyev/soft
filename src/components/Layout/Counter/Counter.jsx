import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Counter = () => {
  const [count, setCount] = useState(0);

  // API'den veriyi çeken fonksiyon
  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get('https://example-api.com/count'); // API'nin URL'sini buraya yazın
      const data = response.data; // API'den gelen veri
      setCount(data.count); // Veriyi sayaca aktar
    } catch (error) {
      console.error('API hatası:', error);
    }
  };

  // Sayfa yüklendiğinde API'den veri çekmek için useEffect kullanıyoruz
  useEffect(() => {
    fetchDataFromAPI();
  }, []); // Boş dizi, sadece bir kez çalışmasını sağlar, sayfa yüklendiğinde çalışır

  return (
    <div>
      <h1 className=''>Counter</h1>
      <p>Şu anki değer: {count}</p>
      <button onClick={fetchDataFromAPI}>API'den Veri Al</button>
    </div>
  );
};

export default Counter;
