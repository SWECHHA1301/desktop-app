import React from 'react'
import './TotalItem.css'

const orderItem=[
    {
        title:'Total Order',
        value:'625',
        image:'',
    },
     {
        title:'Total Sales',
        value:'11110',
        image:'',
    },
     {
        title:'Returns',
        value:'110',
        image:'',
    },
     {
        title:'Discount Given',
        value:'1110',
        image:'',
    },
]

export default function TotalItem() {
  return (
<>
<div className='Item-Container'>
  <div className='Item-box'> 
 {orderItem.map((item,index)=>(
   <div className='block' key={index}>
     <img src={item.image} alt='' />
               <div style={{display:'flex',flexDirection:'column',gap:'32px',alignItems:"flex-start", margin:'24px 0 24px 24px'}}>
              <p className='Title'>{item.title}</p>
              <p className='Value'>₹{item.value}</p>
              </div>
    </div>
 ))}
 
  </div>
</div>

</>
  )
}
