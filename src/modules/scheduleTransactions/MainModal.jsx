import { useState, useEffect } from "react";
import { TableModal } from "./TableModal";
import { MainSchedule } from "./MainSchedule";

export const Dashboard = () => {
  const [scheduledRows, setScheduledRows] = useState([]);

  useEffect(() => {
    const fetchScheduledTransactions = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/scheduled-transaction"
        );
        const result = await response.json();
        console.log("Fetched scheduled data:", result);

        if (Array.isArray(result.data)) {
          setScheduledRows(result.data);
        } else {
          console.error("Fetched scheduled data is not an array:", result.data);
          setScheduledRows([]);
        }
      } catch (error) {
        console.error("Error fetching scheduled data:", error);
        setScheduledRows([]);
      }
    };

    fetchScheduledTransactions();
  }, []);

  return (
    <div>
      <TableModal
        scheduledRows={scheduledRows}
        setScheduledRows={setScheduledRows}
      />
      <MainSchedule scheduledRows={scheduledRows} />
    </div>
  );
};
