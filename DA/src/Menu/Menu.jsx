import React from 'react'
import { ChevronLeft, ChevronRight, BarcodeIcon, Plus } from "lucide-react";
import UpdateBoard from './Components/UpdateBoard';
import SalesTrend from './Components/SalesTrend';
import DashboardCards from './Components/DashboardCards';

export default function Menu() {
    const styles ={
        constainer:{
            maxWidth:'1300px',
            width:'100%',
            backgroundColor:'#fff',
            padding:'24px 16px',
            borderRadius :'10px',
            border:'1.5px solid black',
             minHeight: "100vh",
        },
        title:{
cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "24px",
      flexDirection: "row",
      marginBottom: "24px",
        },
        chevronWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      position: "relative",
    },
        Label:{
             color: "#3658BF",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "100%",
        },
        elments:{
            display:'flex',
            flexDirection:'column',
            gap:'24px',
        }
    }
  return (
    <div style={styles.constainer}>
      <div style={styles.title}>
       <div style={styles.chevronWrapper}>
          <ChevronLeft style={{ color: "#D9D9D9", width: "20px" }} />
          <ChevronRight style={{ color: "black", width: "20px" }} />
        </div>
        <p style={styles.Label}>Home</p>
      </div>

      <div style={styles.elments}>
<UpdateBoard/>
<DashboardCards/>
<SalesTrend/>  
</div>
    </div>
  )
}

