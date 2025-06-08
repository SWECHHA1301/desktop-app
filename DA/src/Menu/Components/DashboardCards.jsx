import React from "react";
import saleIcon from "../assets/sale.png"
import purchaseIcon from "../assets/purchase.png"
import quotationIcon from "../assets/quotation.png"
import paymentIcon from "../assets/payment.png"
import quickInvoiceIcon from "../assets/quickInvoice.png"
import catalogueIcon from "../assets/catalogue.png"
import expenseIcon from "../assets/expenses.png"
import staffIcon from "../assets/staffAttendance.png"
import printerIcon from "../assets/connectPrinter.png"
import invoiceIcon from "../assets/invoiceSettings.png"
import labelIcon from "../assets/printLabel.png"
const cardData = {
  create: [
    { title: "Sale", subtitle: "Create new sale entry." ,icon:saleIcon},
    { title: "Purchase", subtitle: "New Purchase entry." ,icon:purchaseIcon},
    { title: "Quotation", subtitle: "Customer product quotation.",icon:quotationIcon },
    { title: "Payment", subtitle: "Current Transactions." ,icon:paymentIcon},
    { title: "Quick Invoice", subtitle: "Create quick invoice." ,icon:quickInvoiceIcon},
    { title: "Catalogue", subtitle: "View Now." ,icon:catalogueIcon},
    { title: "Expenses", subtitle: "History of transaction.",icon:expenseIcon },
  ],
  quickAccess: [
    { title: "Staff Attendance", subtitle: "Staff time." ,icon:staffIcon },
    { title: "Connect Printer", subtitle: "Printer Online." ,icon:printerIcon },
    { title: "Invoice Settings", subtitle: "Billing & payment handling settings.",icon:invoiceIcon },
    { title: "Print Price Label", subtitle: "Setting Price list Label." ,icon:labelIcon},
  ],
};
 

const cardStyle = {
  backgroundColor: "#3658BF40",
  padding: "16px",
  borderRadius: "10px",
 minWidth: "160px",
  flex: "1 1 200px",
  display:'flex',
  alignItems:'center',
  gap:'10px'
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
    gap:'4px'
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
                           {item.icon && (
      <img
        src={item.icon}
        alt={item.title}
        style={{ width: "50px", height: "50px", }}
      />
    )}
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
                {item.icon && (
      <img
        src={item.icon}
        alt={item.title}
        style={{ width: "50px", height: "50px", }}
      />
    )}
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
