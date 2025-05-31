import React from "react";
import { X, Plus } from "lucide-react";

export default function VariantDrawer({ closeDrawer }) {
  return (
    <div className="ap-drawer">
      <div className="ap-drawer-header">
        <h3 style={{ fontSize: "20px", fontWeight: "700" }}>Add Variant Attribute</h3>
        <button onClick={closeDrawer} className="close-btn">
          <X />
        </button>
      </div>

      <div className="ap-drawer-body">
        <h4 style={{ fontWeight: "600", marginBottom: "10px" }}>#1 Add Variant Attribute</h4>

        <div className="form-group">
          <label>Attribute Name</label>
          <input type="text"  />
        </div>

        <div className="form-group">
          <label>Attribute Values</label>
          <input type="text"  />
        </div>

        <div className="form-group">
          <label>Product Description</label>
          <textarea  />
        </div>

        <div className="btn-group">
          <button className="add-more-btn">
            <Plus size={16} style={{ marginRight: "4px" }} />
            Add More Variant Attributes
          </button>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
}

