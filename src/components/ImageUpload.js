import React from "react";
import { useDropzone } from "react-dropzone";
import "../components/ImageUpload.css"; // Import the associated CSS file

const ImageUpload = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Allow only image files
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>Drop your image here to customize your mobile case!</p>
    </div>
  );
};

export default ImageUpload;
