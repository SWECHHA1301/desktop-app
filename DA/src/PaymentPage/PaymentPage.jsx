import React from 'react';
import { ChevronLeft, ChevronRight ,ChevronDown, AlignJustify} from "lucide-react";
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    background: 'white',
    minHeight: '100vh',
    maxWidth:'1300px',
    //  position:'relative',
  },
  header: {
    backgroundColor: '#3658BF',
    padding: '24px',
    borderRadius: '10px 10px 0 0',
   
   lineHeight:'100%',
    width:'100%',
    fontWeight: '700',
    height:'140px',
    fontSize:'16px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    
  },
  controlButton:{
 display: 'flex',
    gap: '16px',
    
  },

  tab: {
     color: 'white',
    backgroundColor: '#3658BF',
    
    borderRadius: '5px',
    cursor: 'pointer',
    border:'1.5px solid white',
    width:'240px',
    height:'50px',
  },
  activeTab: {
    backgroundColor: 'white',
    color:'#3658BF',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    padding:'24px'
  },
  card: {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '16px',
    boxShadow: '4px 4px 6.6px #3658BF',
    maxWidth:'300px',
    height:'148px'
  },
  cardHeader: {
    fontSize: '20px',
    fontWeight: '700',
    lineHeight:'100%'
  },
  amount: {
    fontSize: '24px',
    fontWeight: '400',
  
  },
  paymentType: {
   
    borderRadius: '10px',
  
    fontSize: '16px',
    fontWeight: '400',
    display: 'inline-block',
    marginTop: '6px',
    width:'80px',
    height:'30px',
    margin:'6px 0 0 8px'
  },
  cash: {
    backgroundColor: '#E5C2C2',
    border:'1px solid #F70B0B',
    color:' #F70B0B'
  },
  greenCash: {
    backgroundColor: '#AADFB3',
     border:'1px solid #256A10',
    color:' #256A10',
  },
  addPayment: {
    // marginTop: '30px',
    // padding: '12px 20px',
    backgroundColor: '#3658BF',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    fontSize: '24px',
    cursor: 'pointer',
    fontWeight:'700',
    width:'314px',
    height:'70px',
    position:'absolute',
    right:'0',
    bottom:'0'
  },
};

const PaymentCard = ({ name, type, amount }) => {
  const paymentStyle =
    type === 'Cash' ? styles.greenCash : styles.cash;

  return (
    <div style={styles.card}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <div>
      <div style={styles.cardHeader}>{name}</div>
      <button style={{ ...styles.paymentType, ...paymentStyle }}>{type}</button>
      </div>
      <div style={{display:'flex' ,flexDirection:'column',textAlign:'right',fontSize:'13x',fontWeight:'400',
        color:'#797979',gap:'6px'}}>
        <p>{}/25-26</p>
         <p> Sat Apr 05 2025</p>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'4px'}}>
        <div style={{fontSize:'16px',fontWeight:'400',color:'#797979',marginLeft:'8px'}}>Amount</div>
        <div>:</div>
      <div style={styles.amount}>₹{amount}</div>
      </div>
      <div style={{fontSize:'13px',fontWeight:'700',color:'#797979',marginTop:'4px'}}>1/24</div>
    </div>
  );
};

const PaymentPage = () => {
  const payments = new Array(15).fill({
    name: 'Airy',
    type: 'Cash',
    amount: 245,
  });

  payments[0].type = 'Cash'; // Red one
  for (let i = 1; i < payments.length; i++) payments[i].type = 'Cash';

  return (
    <div style={styles.container}>
      <div style={styles.header}>
       <div style={{
     display: 'flex',
  alignItems:'center',
  gap: '8px',
  fontWeight: '700',
  fontsize: '16px',
  color:'white',
 }}>
          <ChevronLeft style={{ color: "white", width: "20px" }} />
          <ChevronRight style={{ color: "black", width: "20px" }} />
          <p>Invoice  /  Sale Invoices</p>
        </div>


      <div style={styles.controlButton}>
        <button style={styles.tab}>Sale Invoices</button>
        <button style={styles.tab}>Proforma Quotations</button>
        <button style={styles.tab}>Purchases</button>
        <button style={styles.tab}>Payments</button>
        <button style={{ ...styles.tab, ...styles.activeTab }}>Expenses</button>
        </div>
      </div>

      <div style={styles.cardGrid}>
        {payments.map((payment, index) => (
          <PaymentCard
            key={index}
            name={payment.name}
            type={payment.type}
            amount={payment.amount}
          />
        ))}
      </div>

      <button style={styles.addPayment}>+ Add New Payments</button>
    </div>
  );
};

export default PaymentPage;

