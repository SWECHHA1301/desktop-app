import React from 'react'
import { Calendar, Maximize } from "lucide-react";
const blockItems=[

    {
     name:'UPI',
     value:'4,200',
     percent:'42%',
     style:{
      color:'#2BAC04',
      textAlign:'center'
     }
    },

    {
      name:'Card',
     value:'3,100',
     percent:'31%',
     style:{
      color:'#E38417',
        textAlign:'center'
     }
    },
    {
     name:'Cash',
     value:'2,700',
     percent:'27%',
     style:{
      color:'#FECB00',
        textAlign:'center'
     }
    },
    
]

const accountItems=[
  {
    name:'Account1',
    transaction:'5,600',
    UPI:'3,200',
    card:'2,100',
    totalsales:'10,900',
    orders:'43',
    style:{
      color:'#3658BF',
      padding:'0 10px',
      textAlign:'center',
      height:'50px'
    }
  },
  {
    name:'Account2',
    transaction:'3,400',
    UPI:'2,500',
    card:'1,500',
    totalsales:'7,400',
    orders:'30',
    style:{
      color:'#3658BF',
      padding:'0 10px',
      textAlign:'center',
       height:'50px'
    }
  },
]

const styles ={
  payInfo :{
  width:'100%',
  display:'flex',
  flexDirection:'column',
  gap:'24px'
  },
  payMethod :{
    maxWidth:'640px',
    height:'594px',
    backgroundColor:'white',
    borderRadius:'10px',
    boxShadow:'4px 4px 4px #00000040'
  },
  payHead:{
    width:'100%',
    borderRadius:'10px 10px 0 0',
    backgroundColor:'#D4DAED',
    borderBottom:'1px solid black',
    display:'flex',
    height:'77px',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 24px'
  },

 calendar:{
  display:'flex',
  backgroundColor:'white',
  borderRadius:'10px',
  height:'27px',
  width:'101px',
  alignItems:'center',
  gap:'8px',
  padding:'0 8px'
 },
 breakDown:{
  display:'flex',
  flexDirection:'column',
  padding :'16px 16px 24px 16px',
  gap:'24px',
  alignItems:'center'

 },
 payGraph:{
  maxWidth:'245px',
  height:'244px',
 },
 blockItemHead:{
  backgroundColor:'#D4DAED',
  height:'50px',
   borderBottom:'1px solid black',
    borderRadius:'10px 10px 0 0',
  
 },
 accountManage:{
   width:'100%',
  height:'246px',
   backgroundColor:'white',
     borderRadius:'10px',
      boxShadow:'4px 4px 4px #3658BF40'
 },
 accountTitle:{
  width:'100%',
    borderRadius:'10px 10px 0 0',
    backgroundColor:'#D4DAED',
    borderBottom:'1px solid black',
    display:'flex',
    height:'72px',
    alignItems:'center',
   
    padding:'0 24px'
 },
 accountTable:{
  width:"100%",
  
 },
 accountHeader:{
  backgroundColor:'#D4DAED',
    height:'66px',
    color:'#4A4A4A',
    fontSize:'16px',
    fontWeight:'700',
   
 }

}
export default function PayMethod() {
  return (
    <>
     <div style={styles.payInfo}>
      <div style={styles.payMethod}>
        <div style={styles.payHead}>

        <p style={{fontSize:'20px',fontWeight:'700',lineHeight:'100%',color:'#3658BF'}}>Payment Method Breakdown</p>
        <div style={styles.calendar}>
        <Calendar size={20} color='black'/>
         <p>30 days</p>
        </div>
      </div>

    <div style={styles.breakDown}>
<div style={styles.payGraph}></div>


<table style={{width:'100%',borderRadius:'10px',boxShadow:'0 4px 4px 0 #3658BF',height:'200px',backgroundColor:'white'}}>
  
   <thead >
      <tr style={styles.blockItemHead} > 
      <th style={{borderRadius:'10px 0 0 0',padding:'0 10px 0 20px'}}>Method</th>
       <th style={{padding:'0 15px'}}>Value(₹)</th>
       <th style={{borderRadius:'0 10px 0 0',padding:'0 10px'}} >Percentage</th>
       </tr>
      </thead>
      <tbody>
    {blockItems.map((item,index) => (
<tr  key={index} >
<td style={item.style} >{item.name}</td>
<td  style={{padding:'0 10px',textAlign:'center'}}>{item.value}</td>
<td   style={{padding:'0 10px',textAlign:'center'}} >{item.percent}</td>

</tr>))}</tbody>
</table>

    </div>

      </div>

       <div style={styles.accountManage}>

        <div style={styles.accountTitle}>
          <p style={{fontSize:'20px',fontWeight:'700',lineHeight:'100%',color:'#3658BF'}}>Account Management</p>
        </div>
        <table style={{width:'100%'}}>
          <thead style={{width:'100%',}}>
         <tr style={styles.accountHeader}>
       <th>Counter</th>
       <th>Transaction</th>

       <th > <p>UPI</p> <p>(₹)</p></th>
      <th ><p>Card</p> <p>(₹)</p></th>
       <th ><p>Total Sales</p> <p>(₹)</p></th>
      <th ><p>Orders</p> <p>(₹)</p></th>
      
      </tr></thead>
      <tbody >
      {accountItems.map((item,index)=>(
      <tr style={styles.accountTable} key={index}>
       <td style={item.style}>{item.name}</td>
       <td style={{padding:'0 10px',textAlign:'center'}}>{item.transaction}</td>
       <td style={{padding:'0 10px',textAlign:'center'}}>{item.UPI}</td>
       <td style={{padding:'0 10px',textAlign:'center'}}>{item.card}</td>
       <td style={{padding:'0 10px',textAlign:'center'}}>{item.totalsales}</td>
       <td style={{padding:'0 10px',textAlign:'center'}}>{item.orders}</td>
      </tr>))}</tbody>
      </table>
      </div>
     </div>
    </>
  )
}
