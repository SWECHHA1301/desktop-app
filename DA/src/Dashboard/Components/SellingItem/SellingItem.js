import React from 'react'
const Items = [
  { name: 'Chesse Pizza', Volume: '25', price: '2400' },
  { name: 'Product Name', Volume: 'Quantity sold', price: '2000' },
  { name: 'Product Name', Volume: 'Quantity sold', price: '1800' },
  { name: 'Product Name', Volume: 'Quantity sold', price: '1000' },
  { name: 'Product Name', Volume: 'Quantity sold', price: '550' },
];

export default function SellingItem() {
  const saleInfo = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '24px',
   
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'white',
    boxShadow: '4px 4px 4px 0 #3658BF40',
    borderRadius: '10px',
    overflowX: 'auto',
  };

  const headTitle = {
    backgroundColor: '#D4DAED',
    color: '#3658BF',
    borderBottom: '1px solid #000000',
    borderRadius: '10px 10px 0 0',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '100%',
  };

  const itemHeadRow = {
    backgroundColor: '#D4DAED',
    color: '#4A4A4A',
    height: '50px',
    fontSize: '15px',
    fontWeight: '700',
    width: '100%',
  };

  const rowStyle = {
    height: '50px',
    fontSize: '15px',
    fontWeight: '700',
    color: '#3658BF',
  };

  const graphContainer = {
    padding: '16px',
    borderRadius: '0 0 10px 10px',
  };

  const graphStyle = {
    backgroundColor: '#3658BF',
    width: '100%',
    height: '240px',
    borderRadius: '10px',
  };

  return (
    <div style={saleInfo}>
      {/* Most Selling Items Table */}
      <div style={cardStyle}>
        <div style={headTitle}>
          <p>Most Selling Items</p>
        </div>
        <div>
          <table style={{ width: '100%', }}>
            <thead>
              <tr style={itemHeadRow}>
                <td style={{ padding: '0 16px' }}>Product Name</td>
                <td style={{ padding: '0 16px', textAlign: 'center' }}>Quantity Sold</td>
                <td style={{ padding: '0 16px', textAlign: 'right' }}>Total Revenue</td>
              </tr>
            </thead>
            <tbody>
              {Items.map((item, index) => (
                <tr key={index} style={rowStyle}>
                  <td style={{ padding: '0 16px' }}>{item.name}</td>
                  <td style={{ padding: '0 16px', textAlign: 'center' }}>{item.Volume}</td>
                  <td style={{ padding: '0 16px', textAlign: 'right', color: '#256A11' }}>₹{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Graph Card */}
      <div style={cardStyle}>
        <div style={headTitle}>
          <p>Most Selling Items</p>
        </div>
        <div style={graphContainer}>
          <div style={graphStyle}></div>
        </div>
      </div>
    </div>
  );
}
