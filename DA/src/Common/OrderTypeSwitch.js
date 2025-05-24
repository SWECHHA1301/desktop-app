import React, { useState } from "react";


const OrderTypeSwitch = ({ selected, onChange }) => {
  return (
    <div className="flex bg-gray-200 rounded-full w-48 p-1">
      <button
        onClick={() => onChange("Dine in")}
        className={`flex-1 py-1 rounded-full text-sm font-medium ${
          selected === "Dine in" ? "bg-blue-800 text-white" : "text-gray-700"
        }`}
      >
        Dine in
      </button>
      <button
        onClick={() => onChange("Take Away")}
        className={`flex-1 py-1 rounded-full text-sm font-medium ${
          selected === "Take Away" ? "bg-blue-800 text-white" : "text-gray-700"
        }`}
      >
        Take Away
      </button>
    </div>
  );
};

export default OrderTypeSwitch;
