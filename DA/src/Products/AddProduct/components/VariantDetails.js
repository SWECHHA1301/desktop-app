import React, { useState } from "react";
import { ChevronDown, ChevronRight, PencilLine } from "lucide-react";

export default function VariantDetails({ openDrawer, variants, setVariants }) {
  const [isOpen, setIsOpen] = useState(true);
  const [hasVariant, setHasVariant] = useState(null);

  const toggleSection = () => setIsOpen(!isOpen);

  const removeColor = (i, _i) => {
    let updated = [...variants];
    const changedAttributeValues = variants[i]?.attrValues
      ?.split(",")
      ?.filter((_, atI) => atI !== _i);

    if (changedAttributeValues.length) {
      updated[i].attrValues = changedAttributeValues.join(", ");
    } else {
      updated = updated.filter((_, vI) => vI !== i);
    }

    setVariants([...updated]);
  };

  const removeVariant = (i) => {
    const updated = variants.filter((_, index) => index !== i);
    setVariants(updated);
  };

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px 24px",
      }}
    >
      {/* Title Row */}
      <div
        onClick={toggleSection}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>Variant Details</h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>
          {isOpen ? (
            <ChevronDown style={{ color: "#939191" }} />
          ) : (
            <ChevronRight style={{ color: "#939191" }} />
          )}
        </span>
      </div>

      {isOpen && (
        <>
          {/* Has Variant */}
          <label
            style={{
              fontSize: "14px",
              marginBottom: "4px",
              marginTop: "24px",
              display: "block",
              color: "#797979",
            }}
          >
            Has Variant
          </label>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "16px",
              fontSize: "16px",
            }}
          >
            <label
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <input
                type="radio"
                name="variant"
                value="yes"
                checked={hasVariant === "yes"}
                onChange={() => {
                  setHasVariant("yes");
                }}
              />
              Yes
            </label>
            <label
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <input
                type="radio"
                name="variant"
                value="no"
                checked={hasVariant === "no"}
                onChange={() => {
                  setHasVariant("no");
                }}
              />
              No
            </label>
          </div>

          {/* Color Boxes */}
          {variants.map((v, i) => (
            <div
              key={i}
              style={{
                border: "2px solid #3658BF",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "12px",
                width: "100%",
                maxWidth: "812px",
                position: "relative",
              }}
            >
              <label
                style={{
                  fontSize: "13px",
                  color: "#888",
                  background: "#fff",
                  padding: "0 4px",
                }}
              >
                {v?.attrName}
              </label>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "10px",
                  flexWrap: "wrap",
                }}
              >
                {v?.attrValues?.split(",")?.map((val, _i) => (
                  <span
                    key={val + _i}
                    style={{
                      border: "1px solid #3658BF",
                      borderRadius: "20px",
                      padding: "4px 12px",
                      fontSize: "13px",
                      color: "#2B50EC",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "#D4DAED",
                      cursor: "default",
                    }}
                  >
                    {val}
                    <span
                      onClick={() => removeColor(i, _i)}
                      style={{
                        fontWeight: "bold",
                        color: "#797979",
                        cursor: "pointer",
                      }}
                    >
                      ✖
                    </span>
                  </span>
                ))}
              </div>

              {/* Edit/Clear Icons */}
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "10px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <span style={{ cursor: "pointer" }}>
                  <PencilLine style={{ color: "#797979" }} />
                </span>
                <span
                  onClick={() => removeVariant(i)}
                  style={{
                    cursor: "pointer",
                    color: "#3658BF",
                    fontSize: "16px",
                  }}
                >
                  ✖
                </span>
              </div>
            </div>
          ))}

          {/* Add Variant Button */}
          {hasVariant === "yes" && (
            <button
              onClick={openDrawer}
              style={{
                border: "1px solid #3658BF",
                color: "#3658BF",
                backgroundColor: "transparent",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                width: "100%",
                maxWidth: "812px",
                height: "30px",
              }}
            >
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "12px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50px",
                    border: "2px solid #3658BF",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "2px",
                  }}
                >
                  ＋
                </span>
                <span>Add Variant Attributes</span>
              </span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
