import React from "react";
import styles from "../../Products/AddProduct/Style";

const cardData = {
  create: [
    { title: "Sale", subtitle: "Create new sale entry." },
    { title: "Purchase", subtitle: "New Purchase entry." },
    { title: "Quotation", subtitle: "Customer product quotation." },
    { title: "Payment", subtitle: "Current Transactions." },
    { title: "Quick Invoice", subtitle: "Create quick invoice." },
    { title: "Catalogue", subtitle: "View Now." },
    { title: "Expenses", subtitle: "History of transaction." },
  ],
  quickAccess: [
    { title: "Staff Attendance", subtitle: "Staff time." },
    { title: "Connect Printer", subtitle: "Printer Online." },
    { title: "Invoice Settings", subtitle: "Billing & payment handling settings." },
    { title: "Print Price Label", subtitle: "Setting Price list Label." },
  ],
};
 

const cardStyle = {
  backgroundColor: "#3658BF40",
  padding: "16px",
  borderRadius: "10px",
 minWidth: "160px",
  flex: "1 1 200px",
};

const sectionStyle = {
//   marginBottom: "24px",
backgroundColor: "#fff" , 
borderRadius:'10px',
border:'1.5px solid black',
padding:'16px'
};

const titleStyle = {
  fontSize: "32px",
  fontWeight: "700",
  marginBottom: "32px",
  
};

const textContent ={
    display:'flex',
    flexDirection:'column',
    gap:'6px'
}

const DashboardCards = () => {
  return (
    <div style={{  fontFamily: "Arial, sans-serif", backgroundColor: "#fff" , borderRadius:'10px',
   display:'flex',gap:'42px',
   }}>
      <div style={sectionStyle}>
        <div style={titleStyle}>Create</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {cardData.create.map((item, idx) => (
            <div key={idx} style={cardStyle}>
              <div style={textContent}>
              <div style={{ fontWeight: 700 ,fontSize: "16px"}}>{item.title}</div>
              <div style={{ fontSize: "12px", color: "#797979" ,fontWeight: 700}}>{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={titleStyle}>Quick Access</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {cardData.quickAccess.map((item, idx) => (
            <div key={idx} style={cardStyle}>
            {/* icon place */}
                <div style={textContent}>
              <div style={{ fontWeight: 700 ,fontSize: "16px"}}>{item.title}</div>
              <div style={{ fontSize: "12px", color: "#797979" ,fontWeight: 700}}>{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
