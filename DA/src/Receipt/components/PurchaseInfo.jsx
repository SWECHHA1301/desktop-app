import React, { useState } from "react";
import {
  Hash,
  Plus,
  ChevronRight,
  PlusCircle,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import OrderTypeSwitch from "../../Common/OrderTypeSwitch";


export default function PurchaseInfo() {

  const [customerName, setCustomerName] = useState("");
  const [table, setTable] = useState("B-2");
  const [orderType, setOrderType] = useState("Dine in");

  return (
    <>

      <div className="receipt-header">
        <button className="circle-icon blue-outline">
          <div className="blue-circle">
            <ChevronRight size={20} color="white" />
          </div>
        </button>

        <div className="header-title">
          <h2 className="receipt-title">Purchase Receipt</h2>
          <div className="receipt-id">
            <span className="receipt-hash">
              <Hash size={12} />
            </span>
            <span>123400</span>
          </div>
        </div>

        <button className="circle-icon black-outline">
          <Plus size={20} />
        </button>
      </div>


      <div className="order-type-switch">
        <OrderTypeSwitch selected={orderType} onChange={setOrderType} />
      </div>

      <div className="customer-inputs">
        <div className="input-group">
          <label className="input-label">
            Customer Name
            <span className="small-icon">
              <PlusCircle size={10} color="white" />
            </span>
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Table</label>
          <input
            type="text"
            value={table}
            onChange={(e) => setTable(e.target.value)}
          />
        </div>
      </div>

    </>
  )
}
