import React, { useState } from "react";
import Header from "./components/Header.js";
import MobileCase from "./components/MobileCase.js";
import "./App.css";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null); // To store uploaded image URL
  const [bgColor, setBgColor] = useState("#ffffff"); // To store selected background color

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file)); // Create object URL for the uploaded image
    }
  };

  // Function to handle background color change
  const handleColorChange = (color) => {
    setBgColor(color); // Update the background color state
  };

  return (
    <div className="App">
      {/* Header component with color picker */}
      <Header onColorChange={handleColorChange} />

      {/* Image upload input */}
      <div className="image-upload-container">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="image-upload-input"
        />
      </div>

      {/* MobileCase component to display the phone case with background color and uploaded image */}
      <MobileCase uploadedImage={uploadedImage} bgColor={bgColor} />
    </div>
  );
}

export default App;
