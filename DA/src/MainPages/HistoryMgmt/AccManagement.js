import React from "react";
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
    // padding: '16px',
    boxSizing: 'border-box',
  },
  accountNav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  navTitle: {
    color: '#3658BF',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '100%',
    marginBottom: '16px',
  },
  transactionInfo: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  selectAccount: {
    backgroundColor: '#3658BF',
    width: '100%',
    minHeight: '83px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '12px 16px',
    gap: '12px',
    boxSizing: 'border-box',
  },
  selectBtn: {
    backgroundColor: 'white',
    maxWidth: '193px',
    height: '44px',
    borderRadius: '10px',
    padding: '0 10px',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: '1 1 auto',
  },
  selectBtnText: {
    color: '#3658BF',
    fontWeight: '700',
    fontSize: '18px',
  },
  createBtn: {
    backgroundColor: 'white',
    maxWidth: '237.5px',
    height: '44px',
    borderRadius: '10px',
    padding: '0 10px',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flex: '1 1 auto',
  },
  createBtnText: {
    color: '#3658BF',
    fontWeight: '700',
    fontSize: '18px',
  },
  transactionsSec: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    margin: '18px 0 15px 16px',
  },
  transactionsHeading: {
    color: '#4A4A4A',
    fontSize: '20px',
    fontWeight: '700',
  },
  filter: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '90px',
    height: '39px',
    backgroundColor: '#3658BF',
  },
  filterText: {
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
  },
  manageTable: {
    padding: '0 16px 16px',
    width: '100%',
    overflowX: 'auto',
  },
  mainTab: {
    minWidth: '600px',
    
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
    padding: '16px',
    width: '100%',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '120%',
    textAlign: 'center',
  },
  tableHeaderCell: {
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 2,
    color: '#306CFE',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '700',
    textAlign: 'center',
    borderBottom: '2px solid #ddd',
  },
  tableBodyWrapper: {
    height: '280px',
    overflowY: 'auto',
  },
  accountTableRow: {
    display: 'table-row',
    border: '1px solid black',

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
