import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function TemirPage() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation + 5);
    }, 50);

    return () => clearInterval(interval);
  }, [rotation]);

  const containerStyle = {
    maxWidth: '800px',
    margin: '200px auto',
    padding: '20px',
    textAlign: 'center',
  };

  const iconStyle = {
    fontSize: '50px',
    color: '#fff',
    marginBottom: '20px',
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.05s',
  };

  const mainContentStyle = {
    padding: '20px 0',
  };

  const paragraphStyle = {
    color: '#fff',
    fontSize: '24px', // Yazı boyutunu büyüttük
  };

  return (
    <div style={containerStyle}>
      <FontAwesomeIcon icon={faCog} style={iconStyle} />
      <header>
        <h1 style={paragraphStyle}>softwarevillage.az</h1>
      </header>
      <main style={mainContentStyle}>
        <p style={paragraphStyle}>Səhifəmizdə Bərpa işləri aparılır</p>
      </main>
    </div>
  );
}

export default TemirPage;
