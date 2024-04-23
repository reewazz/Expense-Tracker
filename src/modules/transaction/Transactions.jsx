

import TransactionTable from "../accounts/TransactionTable";
import { Sidebar } from "../partials/Sidebar";
import './transactions.css'

export const Transactions = () => {
  return (
    <>
      <Sidebar />
      <div className="transactions">
      <div className="top">
        <div className="text">
          <p class="text-xl font-bold text-black">Latest Transactions</p>
        </div>
        <div className="button">
        <button>Add Transaction</button>
        </div>
      </div>
      <div className="expenditure">
              <div class="max-w-full mx-4 sm:mx-auto sm:px-6 lg:px-2">
    <div class="sm:flex sm:space-x-4">
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div class="bg-white p-5">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-sm leading-6 font-medium text-gray-400">Total Balance</h3>
                        <p class="text-3xl font-bold text-black">Rs. 69,699</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div class="bg-white p-5">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-sm leading-6 font-medium text-gray-400">Total Expenses</h3>
                        <p class="text-3xl font-bold text-black">Rs. 6,969</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div class="bg-white p-5">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-sm leading-6 font-medium text-gray-400">Total Balance last 6 months</h3>
                        <p class="text-3xl font-bold text-black">Rs. 69,000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
              </div>
              <div className="table">
                <TransactionTable/>
              </div>
              
    </div>
    </>
  );
};
