import React from "react";
// import DateCalendar from '../Common/Calendar/DateCalendar';
// import "./AccManagement.css";
import NativeDateRangePicker from "../../Common/NativeDateRangePicker";
import { ChevronDown } from "lucide-react";
import AddIcon from "../../Common/AddIcon";
const details = [
  {
    Number: "1",
    Id: "xxxx5",
    Date: "Saturday, April 11",
    Type: "Take Away",
    Method: "UPI",
    total: "₹200.00",
  },
  {
    Number: "2",
    Id: "zzzz7",
    Date: "Saturday, April 11",
    Type: "Take Away",
    Method: "UPI",
    total: "₹579.00",
  },
  {
    Number: "3",
    Id: "yyyy9",
    Date: "Saturday, April 11",
    Type: "Dine in",
    Method: "Card",
    total: "₹1000.00",
  },
  {
    Number: "4",
    Id: "xxxx4",
    Date: "Saturday, April 11",
    Type: "Dine in",
    Method: "UPI",
    total: "₹795.00",
  },
  {
    Number: "5",
    Id: "xxxx7",
    Date: "Saturday, April 11",
    Type: "Take Away",
    Method: "Cash",
    total: "₹250.00",
  },
  {
    Number: "6",
    Id: "tthhvv",
    Date: "Saturday, April 11",
    Type: "Dine in",
    Method: "Cash",
    total: "₹2450.00",
  },
  {
    Number: "7",
    Id: "jinin",
    Date: "Saturday, April 11",
    Type: "Dine in",
    Method: "Card",
    total: "₹5075.00",
  },


  {
    Number: "1",
    Id: "xxxx5",
    Date: "Saturday, April 11",
    Type: "Take Away",
    Method: "UPI",
    total: "₹200.00",
  },
  {
    Number: "2",
    Id: "zzzz7",
    Date: "Saturday, April 11",
    Type: "Take Away",
    Method: "UPI",
    total: "₹579.00",
  },
  {
    Number: "3",
    Id: "yyyy9",
    Date: "Saturday, April 11",
    Type: "Dine in",
    Method: "Card",
    total: "₹1000.00",
  },
  {
    Number: "4",
    Id: "xxxx4",
    Date: "Saturday, April 11",
    Type: "Dine in",
    Method: "UPI",
    total: "₹795.00",
  },
  {
    Number: "5",
    Id: "xxxx7",
    Date: "Saturday, April 11",
    Type: "Take Away",
    Method: "Cash",
    total: "₹250.00",
  },
  {
    Number: "6",
    Id: "tthhvv",
    Date: "Saturday, April 11",
    Type: "Dine in",
    Method: "Cash",
    total: "₹2450.00",
  },
  {
    Number: "7",
    Id: "jinin",
    Date: "Saturday, April 11",
    Type: "Dine in",
    Method: "Card",
    total: "₹5075.00",
  },
];

export default function AccManagement() {
  const styles = {
  accountSection: {
    width: '100%',
    backgroundColor: '#E2E6F3',
    fontFamily: 'Arial, Helvetica, sans-serif',
    borderRadius: '10px',
  },
  accountNav: {
    width: '100%',
    // paddingTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navTitle: {
    color: '#3658BF',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '100%',
    marginBottom: '24px',
  },
  transactionInfo: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '1304px',
    borderRadius: '10px',
  },
  selectAccount: {
    backgroundColor: '#3658BF',
    width: '100%',
    height: '83px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
  },
  selectBtn: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '193px',
    height: '44px',
    borderRadius: '10px',
    padding: '0 10px',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  selectBtnText: {
    color: '#3658BF',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '100%',
  },
  createBtn: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '237.5px',
    height: '44px',
    borderRadius: '10px',
    padding: '0 10px',
    display: 'flex',
    gap: '18px',
    alignItems: 'center',
    
  },
  createBtnText: {
    color: '#3658BF',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '100%',
  },
  transactionsSec: {
    display: 'flex',
    gap: '27px',
    alignItems: 'center',
    margin: '18px 0 15.12px 39px',
  },
  transactionsHeading: {
    color: '#4A4A4A',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '100%',
  },
  filter: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '90px',
    height: '39px',
    backgroundColor: '#3658BF',
  },
  filterText: {
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '100%',
  },
  manageTable: {
    padding: '24px',
    height: 'calc(92vh - 104px)',
    width: '100%',
  },
  mainTab: {
    width: '100%',
    // overflow: 'hidden',
    backgroundColor:'pink'
  },
  tableHeader: {
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
  },
  tableBody: {
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
  },
  tableCell: {
    padding: '19px 0',
    maxWidth: '140px',
    width: '100%',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeaderCell: {
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 2,
    color: '#306CFE',
    borderRadius: '10px 10px 0 0',
     padding: '19px 0',
    maxWidth: '140px',
    width: '100%',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableBodyWrapper: {
    maxHeight:'400px',
    overflowY: 'auto',
  },
  accountTableRow: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid rgb(97, 97, 97)',
  },
  tableFirstCol: {
    width: '100%',
    maxWidth: '60px',
  },
};

  return (
    <>
      <div style={styles.accountSection}>
        <div style={styles.accountNav}>
          <h2 style={styles.navTitle}>Account Management</h2>
          <div style={{ paddingBottom: "16px" }}>
            <NativeDateRangePicker/>
          </div>
        </div>

        <div style={styles.transactionInfo}>
          <div style={styles.selectAccount}>
            <button style={styles.selectBtn}>
              <p style={styles.selectBtnText}>Select Account</p>
              <ChevronDown/>
            </button>
            <button style={styles.createBtn}>
              <p style={styles.createBtnText}>Create Transaction</p>
              <AddIcon />
            </button>
          </div>

          <div style={styles.transactionsSec}>
            <h2 style={styles.transactionsHeading}>Transactions</h2>
            <button style={styles.filter}>
              <p style={styles.filterText}>Filter</p>
              <div></div>
            </button>
          </div>
<div style={styles.manageTable}>
         <div style={styles.mainTab}>
  <table style={styles.tableHeader}>
    <thead >
      <tr style={styles.accountTableRow}> 
        <th style={styles.tableHeaderCell}>No.</th>
        <th style={styles.tableHeaderCell}>Order ID</th>
        <th style={styles.tableHeaderCell}>Order Date</th>
        <th style={styles.tableHeaderCell}>Order Type</th>
        <th style={styles.tableHeaderCell}>Payment Method</th>
        <th style={styles.tableHeaderCell}>Total Payment</th>
      </tr>
    </thead>
  </table>
  <div style={styles.tableBodyWrapper}>
    <table style={styles.tableBody}>
      <tbody>
        {details.map((item, index) => (
          <tr  style={styles.accountTableRow} key={index}>
            <td style={styles.tableCell}>{item.Number}</td>
            <td style={styles.tableCell}>{item.Id}</td>
            <td style={styles.tableCell}>{item.Date}</td>
            <td style={styles.tableCell}>{item.Type}</td>
            <td style={styles.tableCell}>{item.Method}</td>
            <td style={styles.tableCell}>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>






        </div>





      </div>
    </>
  );
}
