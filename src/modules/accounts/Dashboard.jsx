import { CircularProgress } from "@mui/material";
import { Sidebar } from "../partials/Sidebar";
// import { BarChart } from '@mantine/charts';
// import Card from '@mui/material/Card';
import TransactionTable from "./TransactionTable";
import "./accounts.css";
import { BarCharts } from "../charts/Barchart";

export const Dashboard = () => {
  return (
    <div>
      <Sidebar />

      <div className="dashboard">
        <div className="main">
          <div className="savings">
            <div className="savings-text">
              <p className="text-2xl font-bold text-black">Savings Rs. 6,000</p>
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Savings for this month so far
              </h3>
            </div>
            <div className="savings-stats">
              <p className="text-2xl font-bold text-black">Top Expenses</p>
              <div className="bars">
                <div className="bar">
                  <CircularProgress variant="determinate" value={25} />
                </div>
                <div className="bar">
                  <CircularProgress variant="determinate" value={75} />
                </div>
                <div className="bar">
                  <CircularProgress variant="determinate" value={75} />
                </div>
                <div className="bar">
                  <CircularProgress variant="determinate" value={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="expenditure">
            <div className="max-w-full mx-4 sm:mx-auto sm:px-6 lg:px-2">
              <div className="sm:flex sm:space-x-4">
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                  <div className="bg-white p-5">
                    <div className="sm:flex sm:items-start">
                      <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">
                          Total Balance
                        </h3>
                        <p className="text-xl font-bold text-black">
                          Rs. 69,699
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
                          Total Expenses
                        </h3>
                        <p className="text-xl font-bold text-black">
                          Rs. 6,969
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
                          Total Balance last 6 months
                        </h3>
                        <p className="text-xl font-bold text-black">
                          Rs. 69,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accounts">
            <p className="text-2xl font-bold text-black">Accounts</p>
            <div className="account-cards">
              <div className="cards">
                <div className="card">
                  <div className="top">
                    <p className="text-xl font-bold text-black">Esewa</p>
                    <img
                      src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg"
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <p className="text-xl font-bold text-black">Rs. 3000</p>
                    <p className="text-l font-bold text-grey">Rs. 3000</p>
                  </div>
                </div>
                <div className="card">
                  <div className="top">
                    <p className="text-xl font-bold text-black">Esewa</p>
                    <img
                      src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg"
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <p className="text-xl font-bold text-black">Rs. 3000</p>
                    <p className="text-l font-bold text-grey">Rs. 3000</p>
                  </div>
                </div>
                <div className="card">
                  <div className="top">
                    <p className="text-xl font-bold text-black">Esewa</p>
                    <img
                      src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg"
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <p className="text-xl font-bold text-black">Rs. 3000</p>
                    <p className="text-l font-bold text-grey">Rs. 3000</p>
                  </div>
                </div>
                <div className="card">
                  <div className="top">
                    <p className="text-xl font-bold text-black">Esewa</p>
                    <img
                      src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg"
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <p className="text-xl font-bold text-black">Rs. 3000</p>
                    <p className="text-l font-bold text-grey">Rs. 3000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="transaction">
            <p className="text-xl font-bold text-black pt-5">
              Latest Transactions
            </p>

            <TransactionTable />
          </div>
        </div>

        <div className="stats">
          <BarCharts />
          <div className="inc-exp">
            <div className="inc">
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Income
              </h3>
              <p className="text-xl font-bold text-black">Rs. 69,699</p>
            </div>
            <div className="exp">
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Expenses
              </h3>
              <p className="text-xl font-bold text-black">Rs. 69,699</p>
            </div>
          </div>
          <div className="scheduled-expenses">
            <p className="text-xl font-bold text-black">Scheduled Expenses</p>
            <div className="scheduletable">
              <div className="transactions">
                <div className="statement">
                  <p className="text font-bold text-black">Bike Loan</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};
