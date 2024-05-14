import React, { useState } from "react";
import TableModal from "./TableModal";
import MainSchedule from "./MainSchedule";

function scheduleTransactions() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div>
      <TableModal setTransactions={setTransactions} />
      <MainSchedule transactions={transactions} />
    </div>
  );
}

export default scheduleTransactions;
