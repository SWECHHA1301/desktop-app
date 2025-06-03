import React, { useState } from "react";
import "./AddProduct.css";
import { PencilLine, BarcodeReader } from "../Common/Icons";
import ProductInfo from "./components/ProductInfo";
import VariantDetails from "./components/VariantDetails";
import VariantDrawer from "./components/VariantDrawer";
import { Details } from "./components/Details";
import { InventoryDetails } from "./components/InventoryDetails";
import { CategorySection } from "./components/CategorySection";
import { TaxesSection } from "./components/TaxesSection";
import { InventoryStatus } from "./components/InventoryStatus";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AddProduct() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [variants, setVariants] = useState([]);

  return (
    <div className="ap-wrapper">
      <div className="ap-header">
        <div className="ap-breadcrumb">
          <ChevronLeft style={{ color: "white", width: "20px" }} />
          <ChevronRight style={{ color: "black", width: "20px" }} />
          <p>Add Product</p>
        </div>
        <button className="ap-save-btn">Save</button>
      </div>

      <div className={`ap-form-layout ${drawerOpen ? "drawer-open" : ""}`}>
        <div className="ap-form-main">
          <div className="ap-title">
            <h2>New Entry</h2>
          </div>
          <ProductInfo />
          <Details />
          <VariantDetails
            setVariants={setVariants}
            variants={variants}
            openDrawer={() => setDrawerOpen(true)}
          />
          <InventoryDetails />
          <CategorySection />
          <TaxesSection />
          <InventoryStatus />
        </div>

        {drawerOpen && (
          <VariantDrawer
            closeDrawer={() => setDrawerOpen(false)}
            handleSaveVariant={(_variants) =>
              setVariants([...variants, ..._variants])
            }
          />
        )}
      </div>
    </div>
  );
}
