import React from 'react'
import ButtonSection from './component/ButtonSection/ButtonSection'
import './OrderHistory.css'
import TableSection from './component/TableSection/TableSection'
export default function OrderHistory() {
  return (
    <>
    <div className='Order-Main-Container'>
     <div>
        <ButtonSection/>
     </div>
     <div>
        <TableSection/>
     </div>
    </div>
    </>
  )
}
