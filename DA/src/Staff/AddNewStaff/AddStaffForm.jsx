import PersonalDetails from "./components/PersonalDetails";
import SalaryDetails from "./components/SalaryDetails";
import SaveButton from "../../Common/SaveButton";
import { ChevronLeft,ChevronRight } from "lucide-react";
export default function AddStaffForm() {
  
 const styles={
  mainContainer:{
 width:'1318',
 height:'885px',
 backgroundColor:'#D4DAED',
  padding: '16px 24px',
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
  },
  staffForm:{
     width: '860px',
     
       height:'742px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
  },

  title:{
 fontSize: '24px', 
 fontWeight: '700', 
 lineHeight: '100%', 
 padding: '21px 32px',
borderBottom: '1px solid #D4DAED',
  }
 }

 

 return (
    <div style={styles.mainContainer}>
     
        <div style={{ width:'100%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: '700',
          fontSize: '16px',
          color: '#3658BF',
          
        }}>
          <ChevronLeft style={{ color: "white", width: "20px" }} />
          <ChevronRight style={{ color: "black", width: "20px" }} />
          <p>Add Product</p>
        </div>
        <SaveButton />
      </div>


    <div style={styles.staffForm}>
      <p style={styles.title}>Add Staff</p>
     
     <PersonalDetails/>
     <SalaryDetails/>

</div>
    
    </div>
  );
}
