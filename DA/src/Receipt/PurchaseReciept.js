
import OrderTypeSwitch from "../Common/OrderTypeSwitch";
import "./PurchaseReceipt.css";
import CustomTable from "./components/CustomTable";
import PaymentSummary from "./components/PaymentSummary";
import PurchaseInfo from "./components/PurchaseInfo";

const PurchaseReceipt = () => {
return (
    <div className="body">
      <div className="receipt-wrapper">
        <div className="receipt-container">
         
         <div>
          <PurchaseInfo/>
         </div>

         <div style={{  borderTop: '1px solid #ccc',}}>
          <CustomTable />
          </div>

           <div>
           <PaymentSummary/>
           </div>

        </div>
      </div>
    </div>
  );
};

export default PurchaseReceipt;
