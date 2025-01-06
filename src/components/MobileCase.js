import React, { useState } from "react";
import "./MobileCase.css";
import phoneCaseImage from "../assets/Apple/xr.png";

const MobileCase = ({ uploadedImage }) => {
  const [bgColor, setBgColor] = useState("#ffffff");

  return (
    <div className="mobile-case-container">
      <div className="color-picker">
        <label>Background Color: </label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>

      {/* Mobile case display */}
      <div className="mobile-case" style={{ backgroundColor: bgColor }}>
        {/* Uploaded image */}
        {uploadedImage && (
          <img
            src={uploadedImage}
            alt="Customized Design"
            className="custom-image"
          />
        )}

        {/* Phone case overlay with camera cutout */}
        <img
          src={phoneCaseImage}
          alt="Phone Case"
          className="phone-case-overlay"
        />
      </div>
    </div>
  );
};

export default MobileCase;
