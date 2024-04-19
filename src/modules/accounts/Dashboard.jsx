import { CardActionArea, CircularProgress, Card } from "@mui/material"
import { Sidebar } from "../partials/Sidebar"
// import { BarChart } from '@mantine/charts';
// import Card from '@mui/material/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import TransactionTable from "./TransactionTable"
import './accounts.css'

export const Dashboard = ()=> {
    
      
    const data = [
        { name: 'January', value: 10 },
        { name: 'February', value: 15 },
        { name: 'March', value: 20 },
        { name: 'April', value: 25 },
        { name: 'May', value: 30 },
        { name: 'June', value: 35 },
      ];
    return(
        <div>
            <Sidebar/>

            <div className="dashboard">
                <div className="main">
                    <div className="savings">
                        <div className="savings-text">
                        <p class="text-3xl font-bold text-black">Savings Rs. 6,000</p>
                        <h3 class="text-sm leading-6 font-medium text-gray-400">Savings for this month so far</h3>

                        </div>
                        <div className="savings-stats">
                        <p class="text-3xl font-bold text-black">Top Expenses</p>
                        <div className="bars">
                   <div className="bar"><CircularProgress variant="determinate" value={25} /></div>  
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
<div className="accounts">
<p class="text-3xl font-bold text-black">Accounts</p>
<div className="account-cards">
<div className="cards">
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
</div>
<div className="bottom">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>



</div>

</div>
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />

</div>
<div className="bottom">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>



</div>

</div>
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />

</div>
<div className="bottom">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>



</div>

</div>
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />

</div>
<div className="bottom">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>



</div>

</div>
</div>


</div>

</div>
<div className="transaction">

    <TransactionTable/>

</div>
                </div>
                <div className="stats">
<p class="text-2xl font-bold text-black">Statistics last 6 months</p>

                <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="coral" />
    </BarChart>
    <div className="inc-exp">
        <div className="inc">
        <h3 class="text-sm leading-6 font-medium text-gray-400">Income</h3>
                        <p class="text-xl font-bold text-black">Rs. 69,699</p>
        </div>
        <div className="exp">
        <h3 class="text-sm leading-6 font-medium text-gray-400">Expenses</h3>
                        <p class="text-xl font-bold text-black">Rs. 69,699</p>
        </div>
    </div>
    <div className="scheduled-expenses">
    <p class="text-xl font-bold text-black">Scheduled Expenses</p>
<div className="scheduletable">
   <div className="transactions">
   <div className="statement">
                        <p class="text font-bold text-black">Bike Loan</p>
    <h3 class="text-sm leading-6 font-medium text-gray-400">Expenses</h3>
    </div>
    <div className="amount">
    <p class="text font-bold text-black">Rs. 69,699</p>

    </div>
   </div>
   <div className="transactions">
   <div className="statement">
                        <p class="text font-bold text-black">House Rent</p>
    <h3 class="text-sm leading-6 font-medium text-gray-400">Expenses</h3>
    </div>
    <div className="amount">
    <p class="text font-bold text-black">Rs. 69,699</p>

    </div>
   </div>
   <div className="transactions">
   <div className="statement">
                        <p class="text font-bold text-black">Finance Loan</p>
    <h3 class="text-sm leading-6 font-medium text-gray-400">Expenses</h3>
    </div>
    <div className="amount">
    <p class="text font-bold text-black">Rs. 69,699</p>

    </div>
   </div>
   <div className="transactions">
   <div className="statement">
                        <p class="text font-bold text-black">Insurance</p>
    <h3 class="text-sm leading-6 font-small text-gray-400">Expenses</h3>
    </div>
    <div className="amount">
    <p class="text font-bold text-black">Rs. 69,699</p>

    </div>
   </div>
</div>
    </div>
                </div>
                
            </div>
        </div>

    )
}