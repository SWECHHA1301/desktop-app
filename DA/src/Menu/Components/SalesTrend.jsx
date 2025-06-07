import React from 'react'
import styles from '../../Products/AddProduct/Style'

export default function SalesTrend() {
    const styles ={
        wrapper:{
            width:'100%',
            // height:'511px',
              border:'1.5px solid black',
               borderRadius: '10px',
               backgroundColor: "#fff",
               padding:'16px 24px'
        },
        heading:{
         fontSize:'32px',
         fontWeight: "700",
    color: "#000",
    marginBottom:'16px',
        },
        graphSection:{
            backgroundColor:'#3658BF',
            borderRadius:'10px',
            height:'424px',
        }
    }
  return (
    <div style={styles.wrapper}>
        <div style={styles.heading}>
            Sales Trend
        </div>
        <div style={styles.graphSection}>

        </div>
    </div>
  )
}
