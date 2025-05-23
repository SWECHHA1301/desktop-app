import React from 'react'
import './TableSection.css'

export default function TableSection() {

  const data =[
    { Number:'No.', Id:'Order ID', Date:'Order Date',    Type:'Order Type', Method:'Payment Method', total:'Total Payment'},
    { Number:'1', Id:'xxxx5', Date:'saturday,April 11',  Type:'Take Away',  Method:'UPI',            total:'₹200.00'},
    { Number:'2', Id:'zzzz7', Date:'saturday,April 11',  Type:'Take Away',  Method:'UPI',            total:'₹579.00'},
    { Number:'3', Id:'yyyy9', Date:'saturday,April 11',  Type:'Order Type', Method:'Card',           total:'₹1000.00'},
    { Number:'4', Id:'xxxx4 ', Date:'saturday,April 11', Type:'Order Type', Method:'UPI',            total:'₹795.00'},
    { Number:'5', Id:'xxxx7', Date:'saturday,April 11',  Type:'Take Away',  Method:'Cash',           total:'₹250.00'},
    { Number:'6', Id:'tthhvv', Date:'saturday,April 11', Type:'Order Type', Method:'Cash',           total:'₹2450.00'},
    { Number:'7', Id:'jinin', Date:'saturday,April 11',  Type:'Order Type', Method:'Card',           total:'₹5075.0'},
  ]
  return (
    <>
    <div className='Tab-Section'>
      
    {data.map((item,index)=>(
      <div  className='tab-items' key={index}>
       <table>
        <tr>
          <td>{item.Number}</td>
          <td>{item.Id}</td>
          <td>{item.Date}</td>
          <td>{item.Type}</td>
          <td>{item.Method}</td>
          <td>{item.total}</td>
        </tr>
       </table>
      </div>
    ))}
    </div>
    
    </>
  )
}
