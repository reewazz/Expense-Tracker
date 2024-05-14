import TableModal from "./TableModal";
import React, { useState } from "react";
export const MainSchedule = () => {
  const [transactions, setTransactions] = useState([]);
  return (
    <>
      <p className="text-xl font-bold text-black">Scheduled Expenses</p>
      <div className="scheduletable">
        <div className="transactions">
          <div className="statement">
            <p className="text font-bold text-black">Bike Loan</p>
            <h3 className="text-sm leading-6 font-medium text-gray-400">
              28th Jan
            </h3>
          </div>
          <div className="amount">
            <p className="text font-bold text-black">Rs. 69,699</p>
          </div>
        </div>
        <div className="transactions">
          <div className="statement">
            <p className="text font-bold text-black">House Rent</p>
            <h3 className="text-sm leading-6 font-medium text-gray-400">
              Expenses
            </h3>
          </div>
          <div className="amount">
            <p className="text font-bold text-black">Rs. 69,699</p>
          </div>
        </div>
        <div className="transactions">
          <div className="statement">
            <p className="text font-bold text-black">Finance Loan</p>
            <h3 className="text-sm leading-6 font-medium text-gray-400">
              Expenses
            </h3>
          </div>
          <div className="amount">
            <p className="text font-bold text-black">Rs. 69,699</p>
          </div>
        </div>
        <div className="transactions">
          <div className="statement">
            <p className="text font-bold text-black">Insurance</p>
            <h3 className="text-sm leading-6 font-small text-gray-400">
              Expenses
            </h3>
          </div>
          <div className="amount">
            <p className="text font-bold text-black">Rs. 69,699</p>
          </div>
        </div>
      </div>
    </>
  );
};
