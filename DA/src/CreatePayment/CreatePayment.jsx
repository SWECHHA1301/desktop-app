
import { ChevronLeft,ChevronRight } from "lucide-react";

export default function CreatePayment() {
  


    const styles ={
      container : {
           maxWidth:'1316px',
           height:'884px',
 backgroundColor:'#D4DAED',
  padding: '16px 24px',
   display:'flex',
  flexDirection:'column',
  alignItems:'center'
        },
        title:{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: '700',
          fontSize: '16px',
          color: '#3658BF',
         textAlign: 'left',
         width:'100%'
          
        },
        staffDetails:{
            height:'273px',
            border:'1.5px solid black',
            borderRadius:'10px',
            backgroundColor:'white',
            maxWidth:'1284px',
            width:'100%',
            padding:'16px',
        },

        paymentDetails:{
   height:'273px',
            border:'1.5px solid black',
            borderRadius:'10px',
            backgroundColor:'white',
            maxWidth:'1284px',
            width:'100%',
               padding:'16px',
        },
    }
  return (
  <>
  <div style={styles.container}>
     <div style={styles.title}>
          <ChevronLeft style={{ color: "white", width: "20px" }} />
          <ChevronRight style={{ color: "black", width: "20px" }} />
          <p>Create Payment</p>
        </div>

<div style={{marginTop:'32px',display:'flex',flexDirection:'column',gap:'24px',width:'100%'}}>
        {/* Staff Details */}
        <div style={styles.staffDetails}>
           <p style={{fontSize:'24px',fontWeight:'700',lineHeight:'100%'}}>Staff Details</p>

           <div>
          
           </div>
        </div>

           {/* Payment Details */}
        <div style={styles.paymentDetails}>
 <p style={{fontSize:'24px',fontWeight:'700',lineHeight:'100%'}}>Payment Details</p>
        </div>
  </div>
  </div>
  </>
  )
}
