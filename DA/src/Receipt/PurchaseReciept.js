import OrderTypeSwitch from "../Common/OrderTypeSwitch";
import "./PurchaseReceipt.css";
import ActionButtons from "./components/ActionButtons";
import CustomTable from "./components/CustomTable";
import PaymentSummary from "./components/PaymentSummary";
import PurchaseInfo from "./components/PurchaseInfo";

const PurchaseReceipt = () => {
  //   const [items, setItems] = useState([
  //     { id: 1, name: "Pizza", qty: 1, price: 240 },
  //     { id: 2, name: "Manchurian", qty: 1, price: 90 },
  //     { id: 3, name: "Fried Rice", qty: 1, price: 80 },
  //   ]);
  //   const [expandedItemId, setExpandedItemId] = useState(null);
  //   const [customerName, setCustomerName] = useState("");
  //   const [table, setTable] = useState("B-2");
  //   const [orderType, setOrderType] = useState("Dine in");
  //   const [showSummary, setShowSummary] = useState(false);

  //   const toggleExpand = (id) => {
  //     setExpandedItemId((prev) => (prev === id ? null : id));
  //   };

  //   const handleRemove = (id) => {
  //     setItems((prev) => prev.filter((item) => item.id !== id));
  //   };

  //   const handleQuantityChange = (itemId, newQty) => {
  //   if (newQty < 0) return;
  //   setItems((prev) =>
  //     prev.map((item) =>
  //       item.id === itemId ? { ...item, qty: newQty } : item
  //     )
  //   );
  // };

  //   const total = items.reduce((acc, item) => acc + item.qty * item.price, 0);

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
