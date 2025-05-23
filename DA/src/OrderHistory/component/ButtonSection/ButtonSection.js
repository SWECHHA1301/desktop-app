// import React from 'react'
// import './ButtonSection.css'

// export default function ButtonSection() {

//   const [activeTab, setActiveTab] = useState('Dine in');
//   const filteredOrders = activeTab === 'All'
//     ? orders
//     : orders.filter(order => order.type === activeTab);

//   return (
//     <>
//     <div className="tabs">
//         {['All', 'Dine in', 'Take Away'].map(tab => (
//           <button
//             key={tab}
//             className={`tab-button ${activeTab === tab ? 'active' : ''}`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//     </>
//   )
// }
