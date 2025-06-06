import React, { useState } from "react";
import styles from './Style';
import { PencilLine, BarcodeReader } from "../../Common/Icons";
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
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <div style={styles.breadcrumb}>
          <ChevronLeft style={{ color: "white", width: "20px" }} />
          <ChevronRight style={{ color: "black", width: "20px" }} />
          <p>Add Product</p>
        </div>
        <button style={styles.saveBtn}>Save</button>
      </div>

      <div style={styles.formLayout}>
        <div style={styles.formMain}>
          <div style={styles.title}>
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
          <div style={styles.drawer}>
            <VariantDrawer
              closeDrawer={() => setDrawerOpen(false)}
              handleSaveVariant={(_variants) =>
                setVariants([...variants, ..._variants])
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

