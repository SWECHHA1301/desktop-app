import React from "react";
import "./AddSale.css";
import {
    ChevronLeft, ChevronRight
} from "lucide-react";
import {Pencile, Avatar} from "../Common/Icons"
import CustomerInfo from "./components/CustomerInfo";
import ItemDetails from "./components/ItemDetails";
import OtherCharges from "./components/OtherCharges";
import PaymentPaid from "./components/PaymentPaid";
import DeliveryDetails from "./components/DeliveryDetails";

export default function AddSale() {
  return (
    <div className="add-sale-container">
      <div className="header">
        <div className="breadcrumb">
           <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <ChevronLeft style={{color: "white", width: "20px"}} /> <ChevronRight style={{color: "black", width: "20px"}}/>
             </div> <p>Add Product</p></div>
        <button className="save-button">Save</button>
      </div>
       
      <div className="form-box">
        <h2>Add Sale</h2>

        <div className="info-row">
          <div><strong style={{color:'#939191'}}>Invoice No.</strong><div>1/24-25</div></div>
          <div><strong style={{color:'#939191'}}>Date</strong><div>3/24/2025</div></div>
          <div><strong style={{color:'#939191'}}>Billed By</strong><div>Airy</div></div>
        </div>

        <CustomerInfo />
        <ItemDetails />
        <OtherCharges />
        <PaymentPaid />
        <DeliveryDetails />
      </div>
    </div>
  );
}