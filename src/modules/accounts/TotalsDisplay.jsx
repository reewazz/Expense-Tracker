import React, { useEffect, useState } from "react";

const TotalsDisplay = () => {
  const [totals, setTotals] = useState({ totalExpense: 0, totalIncome: 0 });

  const fetchTotals = async () => {
    try {
      const response = await fetch("http://localhost:8000/transaction");
      const data = await response.json();
      setTotals({
        totalExpense: data.totalExpense,
        totalIncome: data.totalIncome,
      });
    } catch (error) {
      console.error("Error fetching totals:", error);
    }
  };

  useEffect(() => {
    fetchTotals();
  }, []);

  return (
    <div className="totals-container">
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
        <div className="bg-white p-5">
          <div className="sm:flex sm:items-start">
            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Total Expenses
              </h3>
              <p id="total-expense" className="text-xl font-bold text-black">
                Rs. {totals.totalExpense.toString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
        <div className="bg-white p-5">
          <div className="sm:flex sm:items-start">
            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Total Income
              </h3>
              <p id="total-income" className="text-xl font-bold text-black">
                Rs. {totals.totalIncome.toString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalsDisplay;
