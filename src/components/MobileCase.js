import React, { useState } from "react";
import "./MobileCase.css";
import iphone11 from "../assets/Apple/11proand11promax.png";
import iphonexs from "../assets/Apple/x-xs-and-xs-max.png";
import iphone6 from "../assets/Apple/iphone-6-iphne-6s-iphone-6-plus-iphone-6s-plus-iphone-7-and-iphone-8.png";
import iphone13 from "../assets/Apple/iphone-13-mini-iphone-13-iphone-14-iphone-14-plus.png";
import iphone12 from "../assets/Apple/12-pro-and-12-pro-max.png";
import iphone15 from "../assets/Apple/15-and-15-plus.png";
import iphone15pro from "../assets/Apple/15-pro-and-15-pro-max.png";
import iphone16 from "../assets/Apple/16-and-16-plus.png";
import iphonexr from "../assets/Apple/iphone-xr.png";
import iphone16pro from "../assets/Apple/16-pro-and-16-pro-max.png";
import iphone13mini from "../assets/Apple/iphone-13-mini-iphone-13-iphone-14-iphone-14-plus.png";
import GalaxyS20 from "../assets/Samsung/S20-ULTRA.png";
import SamsungA03 from "../assets/Samsung/SAMSUNG-A03-S-A02-S-M02-S.png";
import SamsungA13 from "../assets/Samsung/SAMSUNG-A13-4-G-A52-A52-S-5-G-A71-A72-A73-A33-5-G-A23-A53.png";
import SamsungA32 from "../assets/Samsung/SAMSUNG-A32-4-G.png";
import SamsungA50 from "../assets/Samsung/SAMSUNG-A50-A50-S-A30-S-A70-A70-S-A02-M02.png";
import SamsungMO1 from "../assets/Samsung/SAMSUNG-M01-A10.png";
const MobileCase = ({ uploadedImage }) => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const [selectedBrand, setSelectedBrand] = useState("Apple");

  const [selectedModel, setSelectedModel] = useState("iphone11");

  const [phoneImage, setPhoneImage] = useState(iphone11);

  const [price, setPrice] = useState(19.99);

  const modelsByBrand = {
    apple: [
      {
        value: "iphone-11",

        label: "iPhone 11 pro and 11 pro max",

        image: iphone11,

        price: 19.99,
      },

      {
        value: "x-xs-and-xs-max",

        label: "iPhone XS pro max",

        image: iphonexs,

        price: 24.99,
      },
      {
        value:
          "iphone-6-iphne-6s-iphone-6-plus-iphone-6s-plus-iphone-7-and-iphone-8",

        label: "iPhone 6 to iPhone 8",

        image: iphone6,

        price: 24.99,
      },
      {
        value: "iphone-13",

        label: "iPhone 13",

        image: iphone13,

        price: 29.99,
      },
      {
        value: "iphone-14-iphone-14-plus",

        label: "iPhone 14",

        image: iphone13,

        price: 39.99,
      },
      {
        value: "12-pro",

        label: "iPhone 12 pro",

        image: iphone12,

        price: 29.99,
      },
      {
        value: "12-pro",

        label: "iPhone 12 pro-max",

        image: iphone12,

        price: 19.99,
      },
      {
        value: "iphone-15",

        label: "iPhone-15",

        image: iphone15,

        price: 19.99,
      },
      {
        value: "iphone-15-plus",

        label: "iPhone-15 Plus",

        image: iphone15,

        price: 29.99,
      },
      {
        value: "iphone-15-pro",

        label: "iPhone-15 Pro",

        image: iphone15pro,

        price: 29.99,
      },
      {
        value: "iphone-15-pro-max",

        label: "iPhone-15 Pro Max",

        image: iphone15pro,

        price: 39.99,
      },
      {
        value: "iphone-16",

        label: "iPhone-16",

        image: iphone16,

        price: 29.99,
      },
      {
        value: "iphone-16-plus",

        label: "iPhone-16 Plus",

        image: iphone16,

        price: 39.99,
      },
      {
        value: "iphone-xr",

        label: "iPhone XR",

        image: iphonexr,

        price: 29.99,
      },
      {
        value: "iphone-16-pro",

        label: "iPhone-16 Pro",

        image: iphone16pro,

        price: 39.99,
      },
      {
        value: "iphone-16-pro-max",

        label: "iPhone-16 Pro Max",

        image: iphone16pro,

        price: 49.99,
      },
      {
        value: "iphone-13-mini",

        label: "iPhone 13 mini",

        image: iphone13mini,

        price: 29.99,
      },
    ],
    samsung: [
      {
        value: "galaxy-s20",
        label: "Galaxy S20",
        image: GalaxyS20,
        price: 22.99,
      },
      {
        value: "samsung-a03",
        label: "Samsung A03",
        image: SamsungA03,
        price: 19.99,
      },
      {
        value: "samsung-a03",
        label: "Samsung MO2",
        image: SamsungA03,
        price: 19.99,
      },
      {
        value: "samsung-a13",
        label: "Samsung A13",
        image: SamsungA13,
        price: 24.99,
      },
      {
        value: "samsung-a13",
        label: "Samsung A52",
        image: SamsungA13,
        price: 29.99,
      },
      {
        value: "samsung-a13",
        label: "Samsung A52 S",
        image: SamsungA13,
        price: 29.99,
      },
      {
        value: "samsung-a13",
        label: "Samsung A71",
        image: SamsungA13,
        price: 34.99,
      },
      {
        value: "samsung-a13",
        label: "Samsung A72",
        image: SamsungA13,
        price: 39.99,
      },
      {
        value: "samsung-a13",
        label: "Samsung A73",
        image: SamsungA13,
        price: 44.99,
      },
      {
        value: "samsung-a13",
        label: "Samsung A33",
        image: SamsungA13,
        price: 29.99,
      },
      {
        value: "samsung-a13",
        label: "Samsung A23",
        image: SamsungA13,
        price: 29.99,
      },
      {
        value: "samsung-a-32",
        label: "Samsung A-32",
        image: SamsungA32,
        price: 39.99,
      },
      {
        value: "samsung-a50",
        label: "Samsung A50",
        image: SamsungA50,
        price: 39.99,
      },
      {
        value: "samsung-a50",
        label: "Samsung A50 S",
        image: SamsungA50,
        price: 39.99,
      },
      {
        value: "samsung-a50",
        label: "Samsung A30",
        image: SamsungA50,
        price: 39.99,
      },
      {
        value: "samsung-a50",
        label: "Samsung A70",
        image: SamsungA50,
        price: 49.99,
      },
      {
        value: "samsung-a50",
        label: "Samsung A70 -S",
        image: SamsungA50,
        price: 44.99,
      },
      {
        value: "samsung-a51",
        label: "Samsung A02",
        image: SamsungA50,
        price: 44.99,
      },
      {
        value: "samsung-a51",
        label: "Samsung M02",
        image: SamsungA50,
        price: 44.99,
      },
      {
        value: "samsung-a51",
        label: "Samsung M01",
        image: SamsungMO1,
        price: 44.99,
      },
      {
        value: "samsung-a51",
        label: "Samsung A10",
        image: SamsungMO1,
        price: 59.99,
      },
    ],
  };

  const handleModelChange = (e) => {
    const selectedModel = e.target.value;

    setSelectedModel(selectedModel);

    const modelData = modelsByBrand[selectedBrand].find(
      (model) => model.value === selectedModel
    );

    if (modelData) {
      setPhoneImage(modelData.image);

      setPrice(modelData.price);
    }
  };

  return (
    <div className="mobile-case-container">
      {/* Left section: Phone case preview */}{" "}
      <div className="mobile-case-preview">
        {" "}
        <div className="color-picker">
          <label>Background Color: </label>{" "}
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="mobile-case" style={{ backgroundColor: bgColor }}>
          {" "}
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="Customized Design"
              className="custom-image"
            />
          )}{" "}
          <img
            src={phoneImage}
            alt="Phone Case"
            className="phone-case-overlay"
          />{" "}
        </div>{" "}
      </div>
      {/* Right section: Customization options */}{" "}
      <div className="customization-options">
        <h2>Customize Your Mobile Case</h2> {/* Brand selection */}{" "}
        <div className="form-group">
          <label htmlFor="brand">Select Brand:</label>{" "}
          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              const firstModel = modelsByBrand[e.target.value][0];
              setSelectedModel(firstModel.value);
              setPhoneImage(firstModel.image);
              setPrice(firstModel.price);
            }}
          >
            <option value="">Select your brand</option>{" "}
            <option value="apple">Apple</option>{" "}
            <option value="samsung">Samsung</option>{" "}
            <option value="oneplus">OnePlus</option>{" "}
          </select>{" "}
        </div>
        {/* Model selection */}{" "}
        <div className="form-group">
          <label htmlFor="model">Select Model:</label>{" "}
          <select id="model" value={selectedModel} onChange={handleModelChange}>
            {" "}
            {modelsByBrand[selectedBrand] &&
              modelsByBrand[selectedBrand].map((model) => (
                <option key={model.value} value={model.value}>
                  {model.label}{" "}
                </option>
              ))}{" "}
          </select>{" "}
        </div>
        {/* Price display */}{" "}
        <div className="form-group">
          {" "}
          <p>
            Cost: <strong>${price.toFixed(2)}</strong>{" "}
          </p>{" "}
        </div>
        <button className="customize-btn">Add to Cart</button>{" "}
      </div>{" "}
    </div>
  );
};

export default MobileCase;
