import React from "react";

export default function VariantDetails({ openDrawer }) {
  return (
    <div className="ap-section">
      <h3>Variant Details</h3>
      <label>Has Variant</label>
      <div>
        <input type="radio" name="variant" /> Yes
        <input type="radio" name="variant" /> No
      </div>

      <div>
        <label>Color</label>
        <div className="ap-tag-group">
          <span className="ap-tag">Red</span>
          <span className="ap-tag">Blue</span>
        </div>
      </div>

      <button onClick={openDrawer} className="ap-add-variant-btn">
        Add Variant Attributes
      </button>
    </div>
  );
}
