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
     
              <p className='Title'>{item.title}</p>
              <p>{item.value}</p>
              
    </div>
 ))}
 
  </div>
</div>

</>
  )
}
