import React, { useState } from 'react';

const QRCodeTypeSelector = ({ selectQRCodeType }) => {
  const [selectedType, setSelectedType] = useState('URL');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    selectQRCodeType(event.target.value);
  };

  return (
    <div id="qr-code-type-selector">
      <label htmlFor="qr-code-type">QR Code Type:</label>
      <select id="qr-code-type" value={selectedType} onChange={handleTypeChange}>
        <option value="URL">URL</option>
        <option value="Wi-Fi">Wi-Fi</option>
        <option value="SMS">SMS</option>
      </select>
    </div>
  );
};

export default QRCodeTypeSelector;