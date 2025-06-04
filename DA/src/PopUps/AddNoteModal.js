import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const AddNoteModal = ({ onClose, onSave }) => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [applyToAll, setApplyToAll] = useState(false);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const notes = ["no sugar", "Extra hot", "no sugar", "no sugar"];
  const itemOptions = ["Capacino", "Latte"];

  const wrapperRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNote = (note) => {
    setSelectedNotes((prev) =>
      prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]
    );
  };

  const filteredOptions = itemOptions.filter((opt) =>
    opt.toLowerCase().includes(itemName.toLowerCase())
  );

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <span>Add Note to :</span>
        </div>

        <div style={styles.content}>
          <div style={styles.formRow}>
            <label style={styles.label}>Item Name :</label>
            <div style={{ position: "relative", flex: 1 }} ref={wrapperRef}>
              <input
                type="text"
                value={itemName}
                onChange={(e) => {
                  setItemName(e.target.value);
                  setDropdownOpen(true);
                }}
                onFocus={() => setDropdownOpen(true)}
                style={{
                  width: "100%",
                  height: 36,
                  padding: "6px 32px 6px 10px",
                  fontSize: 14,
                  borderRadius: 10,
                  border: "1px solid #ccc",
                }}
              />
              <ChevronDown
                size={18}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#666",
                  cursor: "pointer",
                }}
              />
              {dropdownOpen && filteredOptions.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 40,
                    left: 0,
                    right: 0,
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    zIndex: 10,
                    maxHeight: 120,
                    overflowY: "auto",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  {filteredOptions.map((opt, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setItemName(opt);
                        setDropdownOpen(false);
                      }}
                      style={{
                        padding: "8px 12px",
                        cursor: "pointer",
                        fontSize: 14,
                        color: "#333",
                      }}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              ...styles.noteTags,
              gap: "24px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {notes.map((note, idx) => {
              const isSelected = selectedNotes.includes(note);
              return (
                <div
                  key={idx}
                  onClick={() => toggleNote(note)}
                  style={{
                    ...styles.noteTag,
                    border: isSelected
                      ? "2px solid #3658BF"
                      : "1px solid transparent",
                    background: isSelected ? "#D4DAED" : "#f0f0f0",
                    color: isSelected ? "#3658BF" : "#333",
                  }}
                >
                  {note}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 20 }}>
            <label style={{ ...styles.label, marginBottom: "10px" }}>
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
              rows={3}
            />
          </div>

          <div style={styles.checkboxRow}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={applyToAll}
                onChange={() => setApplyToAll(!applyToAll)}
                style={{ cursor: "pointer" }}
              />
              <span style={{ marginLeft: 8 }}>Apply same to all the items</span>
            </label>
          </div>
        </div>

        <div style={styles.footer}>
          <button style={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button
            style={styles.saveBtn}
            onClick={() =>
              onSave({
                itemName,
                description,
                applyToAll,
                notes: selectedNotes,
              })
            }
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    width: 556,
    background: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    fontFamily: "sans-serif",
    boxShadow: "0 10px 24px rgba(0,0,0,0.2)",
  },
  header: {
    background: "#3662C8",
    color: "white",
    padding: "14px 20px",
    fontSize: 18,
    fontWeight: 700,
  },
  content: {
    padding: "51px",
  },
  formRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    width: 110,
    fontWeight: 700,
    fontSize: 16,
    color: "#797979",
  },
  noteTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 8,
  },
  noteTag: {
    width: "91px",
    height: "26px",
    padding: "6px 12px",
    borderRadius: 10,
    fontSize: 14,
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textarea: {
    width: 455,
    height: 104,
    borderRadius: 10,
    border: "1px solid #797979",
    padding: "10px",
    fontSize: 14,
  },
  checkboxRow: {
    marginTop: 14,
    display: "flex",
    alignItems: "center",
  },
  footer: {
    background: "#f5f5f5",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
  },
  cancelBtn: {
    background: "#fff",
    border: "1px solid #ccc",
    padding: "8px 16px",
    borderRadius: 8,
    fontSize: 14,
    cursor: "pointer",
  },
  saveBtn: {
    background: "#3662C8",
    color: "#fff",
    padding: "8px 16px",
    fontSize: 14,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};

export default AddNoteModal;
