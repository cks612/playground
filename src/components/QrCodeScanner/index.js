import React from "react";
import "../../styles/_qrCodeStyles.scss";

const QrCodeScanner = () => {
  return (
    <div className="ScannerWrapper">
      <div className="scan">
        <div className="qrCode" />
        <h3>QR Code Scanning...</h3>
        <div className="border" />
      </div>
    </div>
  );
};

export default QrCodeScanner;
