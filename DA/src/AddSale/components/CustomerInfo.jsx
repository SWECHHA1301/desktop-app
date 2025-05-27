import { Avatar, Pencile } from "../../Common/Icons";

import {ChevronDown} from "lucide-react";

export default function CustomerInfo() {
  return (
    <div className="customersection " >
      <div className="section-header">
        <p>Customer Info</p>
        <ChevronDown color="#939191"/>
        </div>
      <div className="customer-box">
        <span style={{ display: "flex", justifyContent: "row", gap: "16px", alignItems:'center',color:'#939191',fontWeight:'700'}}><Avatar /> Customer</span>
        <button style={{ display: "flex", justifyContent: "row", gap: "8px", border:'1px solid #ccc'
          ,alignItems:'center',borderRadius:'10px',padding:'12.5px 16px', cursor: 'pointer'
        }}>Edit <Pencile /></button>
      </div>
    </div>
  );
}