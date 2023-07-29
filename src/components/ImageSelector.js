import React, { useState } from 'react';
import './ImageSelector.css';

const ImageSelector = ({ selectImage }) => {
  const [selectedImage, setSelectedImage] = useState('pga_logo_1.png');

  const images = ['pga_logo_1.png', 'pga_logo_2.png', 'pga_logo_3.png', 'None'];

  const handleImageSelection = (image) => {
    setSelectedImage(image);
    selectImage(image);
  };

  return (
    <div id="image-selector">
      {images.map((image, index) => (
        <button
          key={index}
          className={`image-button ${selectedImage === image ? 'selected' : ''}`}
          onClick={() => handleImageSelection(image)}
        >
          {image !== 'None' && (
            <img src={`./assets/images/${image}`} alt={image} className="image-preview" />
          )}
          {image}
        </button>
      ))}
    </div>
  );
};

export default ImageSelector;