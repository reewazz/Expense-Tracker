import React from "react";

export const TotalAmount = ({ totalAmount }) => {
  return (
    <div className="total-amount-card">
      <h3>Total Amount</h3>
      <p>Rs. {totalAmount}</p>
    </div>
  );
};
