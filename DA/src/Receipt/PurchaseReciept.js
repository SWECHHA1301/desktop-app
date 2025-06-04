import OrderTypeSwitch from "../Common/OrderTypeSwitch";
import "./PurchaseReceipt.css";
import ActionButtons from "./components/ActionButtons";
import CustomTable from "./components/CustomTable";
import PaymentSummary from "./components/PaymentSummary";
import PurchaseInfo from "./components/PurchaseInfo";

const PurchaseReceipt = () => {
   return (
    <div className="body">
      <div className="receipt-wrapper">
        <div className="receipt-container">
          <div>
            <PurchaseInfo />
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              display: "flex",
              height: "100%",
            }}
          >
            <div
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "column",
                display: "flex",
                maxHeight: "390px",
              }}
            >
              <CustomTable />
              <PaymentSummary />
            </div>
          </div>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default PurchaseReceipt;
