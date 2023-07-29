import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import PropTypes from 'prop-types';

const QRCodeDisplay = ({ qrCodeData, selectedImage, captionText }) => {
  const qrCodeRef = useRef(null);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 200,
      height: 200,
      data: qrCodeData,
      image: selectedImage,
      dotsOptions: {
        color: "#4267b2",
        type: "rounded"
      },
      backgroundOptions: {
        color: "#e9ebee",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
      }
    });

    qrCode.append(qrCodeRef.current);
  }, [qrCodeData, selectedImage]);

  return (
    <div id="qr-code-display" ref={qrCodeRef}>
      <p>{captionText}</p>
    </div>
  );
};

QRCodeDisplay.propTypes = {
  qrCodeData: PropTypes.string.isRequired,
  selectedImage: PropTypes.string,
  captionText: PropTypes.string,
};

export default QRCodeDisplay;