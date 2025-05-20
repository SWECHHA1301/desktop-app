import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff' }}>
        </div>
      </div>
    </div>
  );
}

export default App;

