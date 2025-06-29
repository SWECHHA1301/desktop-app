import { useState } from "react";
import {
  ChevronDown,
  ChevronDown as ChevronDownIcon,
  ChevronRight,
  Pencil,
} from "lucide-react";
import ImageSelector from "../../../Common/ImageSelector";
export default function ProductInfo() {
  const [isOpen, setIsOpen] = useState(true);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="product-info-wrapper">
      {/* Header with toggle */}
      <div className="header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="section-title">Product Info</h3>
        <div className="toggle-icon">
          {isOpen ? (
            <ChevronDown style={{ color: "#939191" }} />
          ) : (
            <ChevronRight style={{ color: "#939191" }} />
          )}
        </div>
      </div>

      {/* Collapsible content */}
      <div className={`collapsible ${isOpen ? "open" : "closed"}`}>
        {/* Top Grid */}
        <div className="grid-row">
          <div className="left-column">
            <div className="field">
              <label>Product Name *</label>
              <input type="text" className="input-field" />
            </div>
            <div className="field">
              <label>Product Code</label>
              <input type="text" className="input-field" />
            </div>
          </div>

          {/* Image Upload */}
          <div className="upload-box">
            <ImageSelector />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid-row">
          <div className="left-column">
            <label>Product Description</label>
            <textarea className="input-field description-textarea" />
          </div>

          <div className="product-type-container">
            <label>Product Type</label>
            <div className="select-wrapper">
              <select className="input-select">
                <option>Product</option>
                <option>Service</option>
              </select>
              <ChevronDown className="select-icon" size={16} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-info-wrapper {
          border-top: 1px solid #d4daed;
          border-bottom: 1px solid #d4daed;
          margin-top: 8px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          cursor: pointer;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }

        .toggle-icon {
          cursor: pointer;
        }

        .collapsible {
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 24px;
        }

        .collapsible.open {
          max-height: 1000px;
          padding-bottom: 16px;
        }

        .collapsible.closed {
          max-height: 0;
          padding-bottom: 0;
        }

        .grid-row {
          display: grid;
          grid-template-columns: 1fr 160px;
          gap: 24px;
          align-items: start;
        }

        .left-column {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 390px;
        }

        .field {
          display: flex;
          flex-direction: column;
        }

        label {
          font-size: 14px;
          margin-bottom: 4px;
        }

        .input-field {
          width: 390px;
          height: 27px;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background-color: #e3e6ee;
          font-size: 14px;
        }

        .description-textarea {
          height: 93px;
          resize: none;
          width: 390px;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background-color: #e3e6ee;
          font-size: 14px;
        }

        .upload-box {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

          right: 194px;
        }

        .product-type-container {
          margin-left: -194px;
          margin-top: 75px;
          display: flex;
          flex-direction: column;
          max-width: 360px;
        }

        .select-wrapper {
          position: relative;
          width: 100%;
        }

        .input-select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          border-radius: 5px;
          border: 1px solid #ccc;
          background-color: #e3e6ee;
          height: 27px;
          width: 100%;
          padding: 5px 30px 5px 10px;
          font-size: 14px;
          cursor: pointer;
        }

        .select-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #666;
        }

        @media (max-width: 768px) {
          .grid-row {
            grid-template-columns: 1fr;
          }

          .product-type-container {
            margin-left: 0;
            margin-top: 16px;
          }

          .input-field,
          .input-select,
          .description-textarea {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
