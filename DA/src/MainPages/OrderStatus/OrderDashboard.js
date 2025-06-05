import React, { useState } from 'react';

const orders = Array.from({ length: 12 }, (_, i) => ({
  table: 't2',
  status: i % 4 === 0 ? 'pending' : 'Completed',
  type: 'Dine in'
}));

const OrderCard = ({ table, status, type }) => {
  const statusStyles = {
    Completed: {
      backgroundColor: '#AADFB3',
      color: '#256A11'
    },
    pending: {
      backgroundColor: '#EFE6C3',
      color: '#E38417'
    }
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: 12,
      padding: 16,
      height: 152,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', borderBottom: '1px solid black', paddingBottom: 4 }}>
        <div>Table No.-{table}</div>
        <div style={{ fontSize: 12, textAlign: 'right' }}>
          <div style={{marginRight:'60px',color: '#939191'}}>Time :</div>
          <div style={{marginRight:'60px',color: '#939191'}}>Date :</div>
        </div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: '#939191', marginTop: 4 }}>KOT-xxx | Bill-xx4</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
        <div style={{ fontWeight: '700' }}>Type- {type}</div>
        <div style={{
          fontSize: 13,
          fontWeight: 600,
          padding: '4px 10px',
          borderRadius: 999,
          whiteSpace: 'nowrap',
          ...statusStyles[status]
        }}>
          {status}
        </div>
      </div>
    </div>
  );
};

export default function OrderGrid() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredOrders = activeTab === 'All'
    ? orders
    : orders.filter(order => order.type === activeTab);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
    }}>
      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: 16,
        padding: 16,
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        {['All', 'Dine in', 'Take Away'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? 'white' : '#3658BF',
              color: activeTab === tab ? 'black' : 'white',
              padding: '10px 24px',
              borderRadius: 10,
              border: 'none',
              fontWeight: 600,
              fontSize: 16,
              width: 176,
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scrollable Cards */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: 24,
        background: '#E2E6F3'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(416px, 1fr))',
          gap: 24
        }}>
          {filteredOrders.map((order, idx) => (
            <OrderCard key={idx} {...order} />
          ))}
        </div>
      </div>
    </div>
  );
}
