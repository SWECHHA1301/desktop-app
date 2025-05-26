import { Pencil } from "lucide-react";
import { Avatar } from "../../Common/Icons";

export default function CustomerInfo() {
  return (
    <div className="section" >
      <div className="section-header">Customer Info</div>
      <div className="customer-box">
        <span style={{ display: "flex", justifyContent: "row", gap: "16px"}}><Avatar /> Customer</span>
        <button style={{ display: "flex", justifyContent: "row", gap: "16px"}}>Edit <Pencil /></button>
      </div>
    </div>
  );
}