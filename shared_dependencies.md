Shared Dependencies:

1. Exported Variables:
   - `qrCodeData`: The data to be encoded in the QR code, shared across `App.js`, `QRCodeGenerator.js`, `QRCodeInput.js`, and `QRCodeDisplay.js`.
   - `selectedImage`: The selected image for the QR code, shared across `App.js`, `ImageSelector.js`, `UploadButton.js`, and `QRCodeDisplay.js`.
   - `captionText`: The caption text for the QR code, shared across `App.js`, `CaptionInput.js`, and `QRCodeDisplay.js`.
   - `qrCodeType`: The type of the QR code (URL, Wi-Fi, SMS), shared across `App.js`, `QRCodeTypeSelector.js`, `QRCodeInput.js`, and `QRCodeGenerator.js`.

2. Data Schemas:
   - `QRCodeDataSchema`: The schema for the data to be encoded in the QR code, used in `QRCodeInput.js` and `QRCodeGenerator.js`.

3. ID Names of DOM Elements:
   - `qr-code-display`: The ID of the DOM element where the QR code is displayed, used in `QRCodeDisplay.js` and `App.js`.
   - `image-selector`: The ID of the DOM element where the image is selected, used in `ImageSelector.js` and `App.js`.
   - `caption-input`: The ID of the DOM element where the caption is inputted, used in `CaptionInput.js` and `App.js`.
   - `qr-code-type-selector`: The ID of the DOM element where the QR code type is selected, used in `QRCodeTypeSelector.js` and `App.js`.
   - `upload-button`: The ID of the DOM element for the upload button, used in `UploadButton.js` and `App.js`.

4. Message Names:
   - `QR_CODE_GENERATED`: The message name for when a QR code is generated, used in `QRCodeGenerator.js` and `App.js`.
   - `IMAGE_SELECTED`: The message name for when an image is selected, used in `ImageSelector.js` and `App.js`.
   - `CAPTION_UPDATED`: The message name for when the caption is updated, used in `CaptionInput.js` and `App.js`.
   - `QR_CODE_TYPE_SELECTED`: The message name for when a QR code type is selected, used in `QRCodeTypeSelector.js` and `App.js`.

5. Function Names:
   - `generateQRCode`: The function to generate the QR code, used in `QRCodeGenerator.js` and `App.js`.
   - `selectImage`: The function to select an image, used in `ImageSelector.js` and `App.js`.
   - `updateCaption`: The function to update the caption, used in `CaptionInput.js` and `App.js`.
   - `selectQRCodeType`: The function to select a QR code type, used in `QRCodeTypeSelector.js` and `App.js`.
   - `uploadImage`: The function to upload an image, used in `UploadButton.js` and `App.js`.