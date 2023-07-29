import React, { useState } from 'react';

const CaptionInput = ({ updateCaption }) => {
  const [caption, setCaption] = useState('');

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
    updateCaption(event.target.value);
  };

  return (
    <div id="caption-input">
      <label htmlFor="caption">Caption:</label>
      <input
        type="text"
        id="caption"
        name="caption"
        value={caption}
        onChange={handleCaptionChange}
      />
    </div>
  );
};

export default CaptionInput;