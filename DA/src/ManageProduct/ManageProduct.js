
import React from "react";
import {ChevronLeft ,ChevronRight} from 'lucide-react'
const products = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  name: "Product Name",
  stock: "8",
  barcode: "27845884583",
  price: "₹52",
  actualprice:'₹52',
  img: "https://th.bing.com/th/id/OIP.egsUk-BcmvCjh7-aFIlhhAHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7"
}));

export default function ProductGrid() {
  return (
    <div
      style={{
        maxWidth:'1305px',
        width:'100%',
        fontFamily: "Arial, sans-serif",
        background: "#E2E6F3",
        minHeight: "100vh",
        // padding:"24px",
      }}
    >
      <div style={{
     cursor:' pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  flexDirection:' row',
  
      }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <ChevronLeft style={{ color: "white", width: "20px" }} />
            <ChevronRight style={{ color: "black", width: "20px" }} />
          </div>
          <p style={{
               color:' #3658BF',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '100%',
          }}>Products</p>
        </div>



        
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop:'32px'
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
            //   padding: "10px",
            maxMidth:'300px',
            maxHeight:'293px',
              boxShadow: "4px 4px 4px #3658BF",
              
            }}
          >
            <img
              src={product.img}
              alt="product"
              style={{
                width: "100%",
                height: "124px",
                objectFit: "contain",
                marginBottom: "10px",
                border:'1.5px solidrgb(31, 31, 31)',
                borderRadius:'10px 10px 0 0',
              }}
            />
            <div style={{margin:'8px',}}>
            <p style={{ marginBottom:'12px', fontWeight: "700",fontSize:'20px', color:'#797979'}}>{product.name}</p>
            <p style={{ marginBottom:'10px' ,fontWeight: "700",fontSize:'16px', color:'#797979'}}>Stock Quantity: <span style={{ color: "green" }}>{product.stock}</span></p>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <p style={{fontWeight: "700",fontSize:'14px', color:'#797979'}}>{product.barcode}</p>
            <p style={{ margin:'0 10px 0 0',fontWeight: "700",fontSize:'16px', color:'#797979'}}><del>{product.price}</del></p>
            </div>
            <div style={{ margin:'0 10px 0 0', fontWeight: "700", fontSize:'24px',display:'flex', justifyContent:'end' ,alignItems:'center'}}><p>{product.actualprice}</p></div>
            </div>
          </div>
        ))}
      </div>


      <div style={{display:'flex',justifyContent:'flex-end',position:'sticky', }}>
        <button
          style={{
            // padding: "10px 20px",
            width:'246px',
            height:'50px',
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            backgroundColor:'#3658BF',
            display:'flex',
            gap:'16px',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
         <p> +</p><p>Add Products</p> 
        </button>
      </div>


    </div>
  );
}
