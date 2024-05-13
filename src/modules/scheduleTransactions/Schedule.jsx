import TableModal from "../scheduleTransactions/TableModal";
import { Sidebar } from "../partials/Sidebar";
import "./schedule.css";

export const Schedule = () => {
  return (
    <div>
      <Sidebar />
      <div className="schedule-main">
        <div className="top">
          <div className="text">
            <p className="text-xl font-bold text-black">
              Scheduled Transactions
            </p>
          </div>
          <div className="button">
            <button>Add Transaction</button>
          </div>
        </div>
        <TableModal />
      </div>
    </div>
  );
};
