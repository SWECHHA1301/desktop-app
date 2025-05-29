import {ChevronDown} from "lucide-react";
export default function ItemDetails() {
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
    height:'47px',
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
    height:'39px',
  };

  const cellStyle = { flex: 1, textAlign: "left" };

  const boldRight = { ...cellStyle, fontWeight: "700", textAlign: "right" };

  return (

  

    <div style={{ padding: "16px 24px" ,borderTop:'1px solid #D4DAED',borderBottom:'1px solid #D4DAED',
       height: '348px' }}>
      <div style={{ fontWeight: "500", fontSize: "16px", marginBottom: "12px", display:'flex',
        justifyContent:'space-between',alignItems:'center'
      }}>

        <p>Item Details</p>
        <ChevronDown color="#939191"/>
      </div>

      {/* Header */}
      <div style={headerStyle}>
        <div style={{ ...cellStyle, color: "#797979", fontWeight: "600" }}>#</div>
        <div style={cellStyle}>Item Name</div>
        <div style={{ ...cellStyle, color: "#256A11", fontWeight: "400" }}>Discount in %</div>
        <div style={{ ...cellStyle, color: "#797979", fontWeight: "400" }}>Tax in %</div>
        <div style={{ ...cellStyle, color: "#797979", fontWeight: "400" }}>Subtotal</div>
        <div style={boldRight}>Total Amount</div>
      </div>

      {/* Row 1 */}
      <div style={rowStyle}>
        <div style={cellStyle}>#1</div>
        <div style={{ ...cellStyle, fontWeight: "600" }}>Samsung S10</div>
        <div style={{ ...cellStyle, color: "#256A11" }}>10 %</div>
        <div style={{ ...cellStyle, color: "#797979"}}>Gst@3.0%</div>
        <div style={{ ...cellStyle, color: "#797979"}}>9956.31 × 1 = 9956.3</div>
        <div style={boldRight}>₹ 9,198.73</div>
      </div>

      {/* Row 2 */}
      <div style={rowStyle}>
        <div style={cellStyle}>#2</div>
        <div style={cellStyle}>
          <select style={{ padding: "4px", borderRadius: "4px" }}>
            <option>Item</option>
          </select>
        </div>
        <div style={cellStyle}>
          <select style={{ padding: "4px", borderRadius: "4px" }}>
            <option>Discount</option>
          </select>
        </div>
        <div style={cellStyle}>
          <select style={{ padding: "4px", borderRadius: "4px" }}>
            <option>Tax</option>
          </select>
        </div>
        <div style={{ ...cellStyle, color: "#797979"}}>9956.31 × 1 = 9956.3</div>
        <div style={boldRight}>₹ 9,198.73</div>
      </div>

      {/* Add Row Placeholder */}
      <div
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
        }}
      >
        + Add Row
      </div>

      {/* Net Amount */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "390px",
          height: "27px",
          marginTop:'24px',
          gap:'8px'
        }}
      >
        <span style={{color:'#797979'}}>Net Amount: </span>
        <span 
        style={{
          borderRadius: "5px",
          border: "1px solid #D4DAED",
          backgroundColor: "#D4DAED",
          textAlign: "right",
          padding:'0 16px',
          height:'27px'
        }}>₹ 18000.00</span>
      </div>
    </div>

  );
}
