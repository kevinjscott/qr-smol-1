import QRCodeStyling from "qr-code-styling";

const qrCodeStyling = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "https://pga.com",
  image: "src/assets/images/pga_logo_1.png",
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

export const generateQRCode = (qrCodeData, selectedImage) => {
  qrCodeStyling.update({
    data: qrCodeData,
    image: selectedImage,
  });
  return qrCodeStyling;
};

export const updateCaption = (captionText) => {
  qrCodeStyling.update({
    caption: captionText,
  });
  return qrCodeStyling;
};

export const selectQRCodeType = (qrCodeType) => {
  qrCodeStyling.update({
    qrCodeType: qrCodeType,
  });
  return qrCodeStyling;
};