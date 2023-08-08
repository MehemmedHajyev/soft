import React, { useEffect, useState } from 'react';
import CustomSelect from './CustomSelect';

const Testerr = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // API'den verileri alacak işlev
    const fetchOptionsFromAPI = async () => {
      try {
        const response = await fetch('API_URL'); // API_URL, verilerin alınacağı API'nin URL'si olmalı
        const data = await response.json();
        // API'den gelen verileri uygun formata dönüştürmek gerekebilir,
        // burada API'nin döndürdüğü verilere göre düzenlemeler yapılmalı
        const formattedData = data.map((item) => ({
          value: item.value,
          label: item.label,
          // İsteğe bağlı olarak "disabled" durumunu da API'den alabilirsiniz
          disabled: item.disabled || false,
        }));
        setOptions(formattedData);
      } catch (error) {
        console.error('API fetch error:', error);
      }
    };

    // Komponent yüklendiğinde API'den verileri al
    fetchOptionsFromAPI();
  }, []);

  const handleChange = (value) => {
    setValue(value);
    // Seçilen değeri burada kullanabilirsiniz
  };

  return (
    <div>
      <h1>Select an Option:</h1>
      <CustomSelect value={value} options={options} onChange={handleChange} />
    </div>
  );
};

export default Testerr;
