import React from 'react'
import { ChevronLeft, ChevronRight ,ChevronDown} from "lucide-react";
import SaveButton from '../Common/SaveButton'
import OtherCharges from './components/OtherCharges';
import PaymentPaid from './components/PaymentPaid';


export default function AddExpense() {
  
  return (
    <>
    <div style={{width:'100%',maxWidth:'1318px',height:'885px',backgroundColor:'#D4DAED',padding:'16px 24px',
    }}>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'24px',}}>
       
 <div style={{
     display: 'flex',
  alignItems:'center',
  gap: '8px',
  fontWeight: '700',
  fontsize: '16px',
  color:' #3658BF',
 }}>
          <ChevronLeft style={{ color: "white", width: "20px" }} />
          <ChevronRight style={{ color: "black", width: "20px" }} />
          <p>Add Product</p>
        </div>
         <SaveButton/>
         </div>

         <div style={{maxWidth:'860px',backgroundColor:'#fff',
            borderRadius:'10px',boxShadow:'0 4px 4px 0 #00000040', paddingBottom:'16px'
         }}>
           {/* heading */}
           <div>
           <p style={{fontSize:'24px',fontWeight:'700',lineHeight:'100%',padding:'21px 32px',
            borderBottom:'1px solid #D4DAED'}}>Add Sale</p>
           </div>
           {/* invoice no. */}
           <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',
             padding:'8px 16px', borderBottom:'1px solid #D4DAED'}}>

            <div style={{display:'flex',flexDirection:'column',gap:'8px',}}>
                <p style={{fontSize:'12px',fontWeight:'400',lineHeight:'100%',color:'#939191'}}>Invoice No.</p>
                <p  style={{fontSize:'16px',fontWeight:'700',lineHeight:'100%'}}>1/24-25</p>
            </div>

            <div style={{display:'flex',flexDirection:'column',gap:'8px',marginRight:'20px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'2px'}}>
                    <p style={{fontSize:'12px',fontWeight:'400',lineHeight:'100%',color:'#939191'}}>Date</p>
                    <p style={{fontSize:'10px',fontWeight:'400',lineHeight:'100%',color:'#939191'}}>(DD/MM/YYYY)</p>
                </div>
                <p  style={{fontSize:'16px',fontWeight:'700',lineHeight:'100%'}}>3/05/2025</p>
            </div>

           </div>
           
           <OtherCharges/>
           <PaymentPaid/>


         

         </div>
   
   
   
   
    </div>




    </>

  )
}
