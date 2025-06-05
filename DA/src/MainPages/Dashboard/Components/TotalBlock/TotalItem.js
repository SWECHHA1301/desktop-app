import React from 'react'


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

const styles ={
  block :{
    backgroundColor: 'white',
    width:' 100%',
    maxWidth: '308px',
    height: '133px',
    border: 'none',
    borderRadius: '10px',
    boxshadow: '4px 4px 4px 0 #3658BF40',
    display: 'flex',

  },

  Title :{
    color:' #939191',
    fontSize: '20px',
    fontweight: '700',
    lineHeight: '100%',
    
},
Value :{
    color:" #000000",
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '100%',
}
}

export default function TotalItem() {
  return (
<>
<div style={{ width: '100%'}}>
  <div style={{  display: 'flex',
    gap: '24px'}}> 
 {orderItem.map((item,index)=>(
   <div style={styles.block} key={index}>
     <img  style={{ margin:' 20px 0 0 0 ',}} src={item.image} alt='' />
               <div style={{display:'flex',flexDirection:'column',gap:'32px',alignItems:"flex-start", margin:'24px 0 24px 24px'}}>
              <p style={styles.Title}>{item.title}</p>
              <p style={styles.Value}>₹{item.value}</p>
              </div>
    </div>
 ))}
 
  </div>
</div>

</>
  )
}
