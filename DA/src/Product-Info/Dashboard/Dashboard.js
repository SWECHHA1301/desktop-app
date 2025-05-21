import React from 'react'
import './Dashboard.css'
import TotalItem from './Components/TotalBlock/TotalItem'
export default function Dashboard() {
  return (
    <>
    <div className='dash-board'>
      <div className='Element-container'>
        <div>
      <h2 className='title'>Dashboard</h2></div>
      <div>
        <TotalItem/>
      </div></div>
    </div>
    </>
  )
}
