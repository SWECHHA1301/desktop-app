export default function ProductInfo() {
  return (
    <div className="product-info">
      <h3 className="section-title">Product Info</h3>

      {/* Top Grid */}
      <div className="grid-row">
        {/* Left Inputs */}
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
        <div className="upload-container">
          <div className="upload-box">
            <div className="image-placeholder" />
            <div className="upload-plus">+</div>
          </div>
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
          <select className="input-select">
            <option>Product</option>
            <option>Service</option>
          </select>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        .product-info {
          padding: 16px 24px;
          border-top: 1px solid #d4daed;
          border-bottom: 1px solid #d4daed;
          margin-top: 8px;
          // height:302px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .grid-row {
          display: grid;
          grid-template-columns: 1fr 160px;
        }
        .left-column {
          display: flex;
          flex-direction: column;
          gap: 4px;
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
        }
        .description-textarea {
          height: 93px;
          resize: none;
        }
        .upload-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .upload-box {
          width: 164px;
          height: 135px;
          border: 2px solid #797979;
          border-radius: 10px;
          position: relative;
          background-color: #f9f9f9;
          right: 194px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image-placeholder {
          width: 60px;
          height: 40px;
          background-color: #aaa;
          border-radius: 4px;
        }
        .upload-plus {
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #fff;
          border: 1px solid #888;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
        }
        .product-type-container {
          margin-left: -194px;
          margin-top: 56px;
          display: flex;
          flex-direction: column;
        
        }
        .input-select {
          border-radius: 5px;
          border: 1px solid #ccc;
          background-color: #e3e6ee;
          height: 27px;
          width: 360px;
        }

        /* Responsive for small screens */
        @media (max-width: 768px) {
          .grid-row {
            grid-template-columns: 1fr;
          }
          .upload-box {
            right: 0;
            margin-top: 16px;
          }
          .product-type-container {
            margin-left: 0;
            margin-top: 16px;
          }
          .input-field,
          .input-select {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
} 