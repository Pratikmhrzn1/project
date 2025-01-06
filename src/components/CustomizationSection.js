import React from "react";
import { useDropzone } from "react-dropzone";
import "./CustomizationSection.css"; // Import the associated CSS file

const CustomizationSection = ({
  onDrop,
  uploadedImage,
  imagePosition,
  setImagePosition,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handlePositionChange = (e) => {
    setImagePosition({
      ...imagePosition,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="customization-container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drop your image here to customize your mobile case!</p>
      </div>

      <div className="phone-case">
        {uploadedImage && (
          <img
            src={uploadedImage}
            alt="Custom Design"
            className="custom-image"
            style={{
              top: `${imagePosition.y}%`,
              left: `${imagePosition.x}%`,
            }}
          />
        )}
      </div>

      {uploadedImage && (
        <div className="controls">
          <input
            type="range"
            name="x"
            min="0"
            max="100"
            value={imagePosition.x}
            onChange={handlePositionChange}
            className="slider"
          />
          <input
            type="range"
            name="y"
            min="0"
            max="100"
            value={imagePosition.y}
            onChange={handlePositionChange}
            className="slider"
          />
        </div>
      )}
    </div>
  );
};

export default CustomizationSection;
