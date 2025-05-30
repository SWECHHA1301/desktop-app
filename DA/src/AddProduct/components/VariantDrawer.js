import React from "react";
import { X } from "lucide-react";

export default function VariantDrawer({ closeDrawer }) {
  return (
    <div className="ap-drawer">
      <div className="ap-drawer-header">
        <h3>Add Variant Attribute</h3>
        <button onClick={closeDrawer}>
          <X />
        </button>
      </div>

      <div className="ap-drawer-body">
        <input type="text" placeholder="Attribute Name" />
        <input type="text" placeholder="Attribute Values (comma separated)" />
        <textarea placeholder="Product Description" />
        <button className="ap-save-btn">Save</button>
      </div>
    </div>
  );
}
