import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const initialRow = {
  item1: {
    itemName: '',
    gst: '',
    quantity: '',
    discount: ''
  }
}

export default function ItemDetails() {
  const [rows, setRows] = useState(initialRow);
  const [isExpanded, setIsExpanded] = useState(true);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("none");

  useEffect(() => {
    if (isExpanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isExpanded, rows]);

  const handleAddRow = () => {
    setRows((prevRows) => ({
      ...prevRows,
      [`item${Object.keys(prevRows).length + 1}`]: {
        itemName: '',
        gst: '',
        quantity: '',
        discount: ''
      }
    }));
  };

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    padding: "8px 16px",
    borderRadius: "10px",
    marginBottom: "8px",
    border: "2px solid #797979",
    fontSize: "14px",
    height: "47px",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
    padding: "8px 16px",
    border: "2px solid #000",
    borderRadius: "10px",
    marginBottom: "12px",
    fontSize: "14px",
    height: "39px",
  };

  const cellStyle = { flex: 1, textAlign: "left" };
  const boldRight = { ...cellStyle, fontWeight: "700", textAlign: "right" };

  const handleTextChange = (e, key) => {
    const { name, value } = e.target;
    setRows({
      ...rows,
      [key]: {
        ...rows?.[key],
        [name]: value
      }
    })
  }

  return (
    <div
      style={{
        padding: "16px 24px",
        borderTop: "1px solid #D4DAED",
        borderBottom: "1px solid #D4DAED",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          fontWeight: "500",
          fontSize: "16px",
          marginBottom: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <p>Item Details</p>
        {isExpanded ? <ChevronUp color="#939191" /> : <ChevronDown color="#939191" />}
      </div>

      {/* Collapsible Content */}
      <div
        ref={contentRef}
        style={{
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          maxHeight: maxHeight,
        }}
      >
        {/* Header */}
        <div style={headerStyle}>
          <div style={{ ...cellStyle, color: "#797979", fontWeight: "600" }}>#</div>
          <div style={cellStyle}>Item Name</div>
          <div style={{ ...cellStyle, color: "#256A11", fontWeight: "400" }}>
            Discount in %
          </div>
          <div style={{ ...cellStyle, color: "#797979", fontWeight: "400" }}>
            Tax in %
          </div>
          <div style={{ ...cellStyle, color: "#797979", fontWeight: "400" }}>
            Quantity
          </div>
          <div style={{ ...cellStyle, color: "#797979", fontWeight: "400" }}>
            Subtotal
          </div>
          <div style={boldRight}>Total Amount</div>
        </div>

        {/* Scrollable List */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            marginBottom: "16px",
          }}
        >

          {/* Dynamic Rows */}
          {Object.keys(rows).map((key, index) => (
            <div key={index} style={rowStyle}>
              <div style={cellStyle}>#{index + 1}</div>
              <div style={cellStyle}>
                <input
                  value={
                    rows?.[key].itemName
                  }
                  name="itemName"
                  onChange={(e) => handleTextChange(e, key)}
                />
              </div>
              <div style={cellStyle}>
                <input
                  value={
                    rows?.[key].quantity
                  }
                  name="quantity"
                  onChange={(e) => handleTextChange(e, key)}

                />
              </div>
              <div style={cellStyle}>
                <input
                  value={
                    rows?.[key].discount
                  }
                  name="discount"
                  onChange={(e) => handleTextChange(e, key)}

                />
              </div>
              <div style={cellStyle}>
                <input
                  value={
                    rows?.[key].gst
                  }
                  name="gst"
                  onChange={(e) => handleTextChange(e, key)}

                />
              </div>
              <div style={{ ...cellStyle, color: "#797979" }}>
                {rows?.[key].amount * rows?.[key].quantity}
              </div>
              <div style={boldRight}>₹ {rows?.[key].amount * rows?.[key].quantity}</div>
            </div>
          ))}

          {/* Add Row */}
          <div
            onClick={handleAddRow}
            style={{
              border: "1px solid #797979",
              borderRadius: "10px",
              textAlign: "left",
              padding: "10px",
              color: "#797979",
              fontSize: "14px",
              fontWeight: "500",
              display: "flex",
              gap: "8px",
              cursor: "pointer",
              marginBottom: "8px",
            }}
          >
            + Add Row
          </div>
        </div>

        {/* Fixed Net Amount Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "390px",
            height: "27px",
            gap: "8px",
            marginBottom: "48px",
          }}
        >
          <span style={{ color: "#797979" }}>Net Amount: </span>
          <span
            style={{
              borderRadius: "5px",
              border: "1px solid #D4DAED",
              backgroundColor: "#D4DAED",
              textAlign: "right",
              padding: "0px 16px",
              height: "27px",

            }}
          >
            ₹ 18000.00
          </span>
        </div>
      </div>
    </div>
  );
}