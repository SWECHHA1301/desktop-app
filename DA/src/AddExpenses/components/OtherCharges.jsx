import React from 'react'
import { UploadCloud, ChevronRight ,ChevronDown} from "lucide-react";
import { useState } from 'react';

export default function OtherCharges() {
      const [isOpen, setIsOpen] = useState(true);
  return (
   <>
   <div style={{padding:'16px 24px', borderBottom:'1px solid #D4DAED'}}>

            <div onClick={() => setIsOpen(!isOpen)} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p style={{fontSize:'16px',fontWeight:'500',lineHeight:'100%',}}>Other Charges</p>

              <div style={{cursor:'pointer'}}>
          {isOpen ? (
            <ChevronDown style={{ color: "#939191" }} size={20}/>
          ) : (
            <ChevronRight style={{ color: "#939191" }} size={20}/>
          )}
        </div>
            </div>
               
               {isOpen && (
               <div style={{marginTop:'24px'}}>

               <div style={{display:'flex',flexDirection:'column',gap:'16px' }} >
 
             <div style={{display:'flex',flexDirection:'column', gap:'8px',fontSize:'14px',fontWeight:'400',lineHeight:'100%'}}>
            <label style={{color:'#797979'}}>Expense Category</label>
            <input style={{
              maxWidth:'390px',
              height:'27px',
              backgroundColor:'#E3E6EE',
              border:'1px solid #ccc',
              borderRadius:'5px',
               padding:'0 10px'
            }} type='text' placeholder='Enter Expense Category' defaultValue={'Expense Category'}/>
          </div>

            <div style={{display:'flex',flexDirection:'column', gap:'8px',fontSize:'14px',fontWeight:'400',lineHeight:'100%'}}>
            <label style={{color:'#797979'}}>Amount</label>
            <input style={{
              maxWidth:'390px',
              height:'27px',
              backgroundColor:'#E3E6EE',
              border:'1px solid #ccc',
              borderRadius:'5px',
              padding:'0 10px'
            }} type='number' placeholder='Enter Amount' defaultValue={180000.00}/>
            
            {/* {₹}  */}
          </div>

            <div style={{display:'flex',flexDirection:'column', gap:'8px',fontSize:'14px',fontWeight:'400',lineHeight:'100%'}}>
            <label style={{color:'#797979'}}>Expense Description</label>
            <textarea style={{
              maxWidth:'390px',
              height:'93px',
              resize:'none',
              backgroundColor:'#E3E6EE',
              border:'1px solid #ccc',
              borderRadius:'5px',
              padding:'6px 10px 0 10px',
              

            }} type='text' placeholder='Enter Expense Description'/>
          </div>

          </div>
         

           <div style={{display:'flex',alignItems:'center', gap:'16px',justifyContent:'center',
            maxWidth:'141px',height:'31px',border:'1.5px solid #3658BF',borderRadius:'5px',marginTop:'24px',
            cursor:'pointer'}}>
              <UploadCloud size={20} style={{color:' #3658BF'}}/>
            <p style={{fontSize:'12px',fontWeight:'700',lineHeight:'100%',color:'#3658BF'}}>Attachment</p>
           </div>
           
            </div>)}

          </div>
   </>
  )
}
