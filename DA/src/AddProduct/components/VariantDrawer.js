import React, { useState } from "react";
import { X, Plus } from "lucide-react";

export default function VariantDrawer({
  closeDrawer,
  handleSaveVariant = () => {},
}) {
  const [variants, setVariants] = useState([
    { attrName: "", attrValues: "", description: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...variants];
    updated[index][field] = value;
    setVariants(updated);
  };

  const handleAddMore = () => {
    setVariants([
      ...variants,
      { attrName: "", attrValues: "", description: "" },
    ]);
  };

  const handleSave = () => {
    handleSaveVariant(variants);
    closeDrawer();
  };

  return (
    <div className="ap-drawer">
      <div className="ap-drawer-header">
        <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
          Add Variant Attribute
        </h3>
        <button onClick={closeDrawer} className="close-btn">
          <X />
        </button>
      </div>

      <div className="ap-drawer-body">
        {variants.map((variant, index) => (
          <div key={index} style={{ marginBottom: "24px" }}>
            <h4 style={{ fontWeight: "600", marginBottom: "10px" }}>
              #{index + 1} Add Variant Attribute
            </h4>

            <div className="form-group">
              <label>Attribute Name</label>
              <input
                type="text"
                value={variant.attrName}
                onChange={(e) =>
                  handleChange(index, "attrName", e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Attribute Values (comma separated)</label>
              <input
                type="text"
                value={variant.attrValues}
                onChange={(e) =>
                  handleChange(index, "attrValues", e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Product Description</label>
              <textarea
                value={variant.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </div>

      <div className="btn-group">
        <button className="add-more-btn" onClick={handleAddMore}>
          <Plus size={16} style={{ marginRight: "4px" }} />
          Add More Variant Attributes
        </button>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
