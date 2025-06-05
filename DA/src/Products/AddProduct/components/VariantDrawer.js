import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import styles from "../Style"; // adjust path if needed

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
    <div style={styles.drawer}>
      <div style={styles.drawerHeader}>
        <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
          Add Variant Attribute
        </h3>
        <button onClick={closeDrawer} style={styles.closeBtn}>
          <X />
        </button>
      </div>

      <div style={styles.drawerBody}>
        {variants.map((variant, index) => (
          <div key={index} style={{ marginBottom: "24px" }}>
            <h4 style={{ fontWeight: "600", marginBottom: "10px" }}>
              #{index + 1} Add Variant Attribute
            </h4>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Attribute Name</label>
              <input
                type="text"
                value={variant.attrName}
                onChange={(e) =>
                  handleChange(index, "attrName", e.target.value)
                }
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>
                Attribute Values (comma separated)
              </label>
              <input
                type="text"
                value={variant.attrValues}
                onChange={(e) =>
                  handleChange(index, "attrValues", e.target.value)
                }
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Product Description</label>
              <textarea
                value={variant.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
                style={styles.textarea}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={styles.btnGroup}>
        <button style={styles.addMoreBtn} onClick={handleAddMore}>
          <Plus size={16} style={{ marginRight: "4px" }} />
          Add More Variant Attributes
        </button>
        <button style={styles.saveButton} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
