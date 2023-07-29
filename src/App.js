```javascript
import React, { useState } from 'react';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodeDisplay from './components/QRCodeDisplay';
import QRCodeInput from './components/QRCodeInput';
import ImageSelector from './components/ImageSelector';
import CaptionInput from './components/CaptionInput';
import QRCodeTypeSelector from './components/QRCodeTypeSelector';
import UploadButton from './components/UploadButton';
import './styles/App.css';

function App() {
  const [qrCodeData, setQrCodeData] = useState({ type: 'URL', value: 'https://pga.com' });
  const [selectedImage, setSelectedImage] = useState('src/assets/images/pga_logo_1.png');
  const [captionText, setCaptionText] = useState('');
  const [qrCodeType, setQrCodeType] = useState('URL');

  const handleQRCodeDataChange = (newData) => {
    setQrCodeData(newData);
  };

  const handleImageSelection = (newImage) => {
    setSelectedImage(newImage);
  };

  const handleCaptionChange = (newCaption) => {
    setCaptionText(newCaption);
  };

  const handleQRCodeTypeChange = (newType) => {
    setQrCodeType(newType);
  };

  return (
    <div className="App">
      <QRCodeTypeSelector onTypeChange={handleQRCodeTypeChange} />
      <QRCodeInput onInputChange={handleQRCodeDataChange} qrCodeType={qrCodeType} />
      <ImageSelector onImageSelect={handleImageSelection} selectedImage={selectedImage} />
      <UploadButton onImageUpload={handleImageSelection} />
      <CaptionInput onCaptionChange={handleCaptionChange} />
      <QRCodeGenerator qrCodeData={qrCodeData} selectedImage={selectedImage} captionText={captionText} />
      <QRCodeDisplay qrCodeData={qrCodeData} selectedImage={selectedImage} captionText={captionText} />
    </div>
  );
}

export default App;
```