import React, { useState, useEffect } from 'react';

const QRCodeInput = ({ qrCodeType, qrCodeData, setQRCodeData }) => {
  const [inputFields, setInputFields] = useState([]);

  useEffect(() => {
    switch (qrCodeType) {
      case 'URL':
        setInputFields(['URL']);
        setQRCodeData({ URL: qrCodeData.URL || 'https://pga.com' });
        break;
      case 'Wi-Fi':
        setInputFields(['SSID', 'Password', 'Encryption']);
        setQRCodeData({
          SSID: qrCodeData.SSID || '',
          Password: qrCodeData.Password || '',
          Encryption: qrCodeData.Encryption || ''
        });
        break;
      case 'SMS':
        setInputFields(['Number', 'Message']);
        setQRCodeData({
          Number: qrCodeData.Number || '',
          Message: qrCodeData.Message || ''
        });
        break;
      default:
        setInputFields([]);
    }
  }, [qrCodeType]);

  const handleInputChange = (event, field) => {
    setQRCodeData({ ...qrCodeData, [field]: event.target.value });
  };

  return (
    <div>
      {inputFields.map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input
            type="text"
            value={qrCodeData[field] || ''}
            onChange={(event) => handleInputChange(event, field)}
          />
        </div>
      ))}
    </div>
  );
};

export default QRCodeInput;