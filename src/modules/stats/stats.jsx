// import { PieChart } from "@mui/x-charts/PieChart";
import { BarCharts } from "../charts/Barchart";
import { Sidebar } from "../partials/Sidebar";
import { RingProgress } from "@mantine/core";
import "./stats.css";
export const Stats = () => {
  return (
    <>
      <Sidebar />
      <div className="stats-container">
        <p className="text-xl font-bold text-black">Overall Stats</p>

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
                      <p className="text-3xl font-bold text-black">
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
                      <p className="text-3xl font-bold text-black">Rs. 6,969</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                <div className="bg-white p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                      <h3 className="text-sm leading-6 font-medium text-gray-400">
                        Total Savings
                      </h3>
                      <p className="text-3xl font-bold text-black">
                        Rs. 69,000
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
                        Max Exp: Insurance
                      </h3>
                      <p className="text-3xl font-bold text-black">
                        Rs. 69,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xl font-bold text-black">
          Top accounts with transactions
        </p>
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
              <div className="texts">
                <p className="text-2xl font-bold text-black">Rs. 3000</p>
                <p className="text-xl font-bold text-grey">Rs. 3000</p>
              </div>
              <div className="buttons">
                <i className="ri-pencil-line"></i>
                <i className="ri-delete-bin-6-line"></i>
              </div>
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
              <div className="texts">
                <p className="text-2xl font-bold text-black">Rs. 3000</p>
                <p className="text-xl font-bold text-grey">Rs. 3000</p>
              </div>
              <div className="buttons">
                <i className="ri-pencil-line"></i>
                <i className="ri-delete-bin-6-line"></i>
              </div>
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
              <div className="texts">
                <p className="text-2xl font-bold text-black">Rs. 3000</p>
                <p className="text-xl font-bold text-grey">Rs. 3000</p>
              </div>
              <div className="buttons">
                <i className="ri-pencil-line"></i>
                <i className="ri-delete-bin-6-line"></i>
              </div>
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
              <div className="texts">
                <p className="text-2xl font-bold text-black">Rs. 3000</p>
                <p className="text-xl font-bold text-grey">Rs. 3000</p>
              </div>
              <div className="buttons">
                <i className="ri-pencil-line"></i>
                <i className="ri-delete-bin-6-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="piechart">
            <p className="text-2xl font-bold text-black">
              Expense Distribution this month
            </p>

            <RingProgress
              size={350}
              thickness={50}
              sections={[
                { value: 40, color: "cyan", tooltip: "Documents 40 Gb" },
                { value: 25, color: "orange", tooltip: "Apps  25 Gb" },
                { value: 15, color: "grape", tooltip: "Other  15 Gb" },
              ]}
            />
          </div>
          <div className="barchart">
            <BarCharts />
          </div>
        </div>
      </div>
    </>
  );
};
