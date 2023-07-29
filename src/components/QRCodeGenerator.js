import React, { useEffect, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { QRCodeDataSchema } from '../utils/qrCodeStyling';

const QRCodeGenerator = ({ qrCodeData, qrCodeType, selectedImage, captionText }) => {
  const [qrCode, setQRCode] = useState(null);

  useEffect(() => {
    if (!qrCode) {
      const qrCodeObj = new QRCodeStyling({
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
      setQRCode(qrCodeObj);
    } else {
      qrCode.update({
        data: qrCodeData,
        image: selectedImage,
      });
      qrCode.append(document.getElementById("qr-code-display"));
    }
  }, [qrCode, qrCodeData, selectedImage]);

  useEffect(() => {
    if (qrCode) {
      qrCode.append(document.getElementById("qr-code-display"));
    }
  }, [qrCode]);

  return (
    <div>
      <h2>Your QR Code</h2>
      <div id="qr-code-display" />
      <p>{captionText}</p>
    </div>
  );
};

export default QRCodeGenerator;