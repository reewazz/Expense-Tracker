import { BarCharts } from '../charts/Barchart'
import { Sidebar } from '../partials/Sidebar'
import './stats.css'
export const Stats = ()=>{
return (
    <>
    <Sidebar/>
<div className="stats-container">
<p class="text-xl font-bold text-black">Overall Stats</p>

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
<p class="text-xl font-bold text-black">Top accounts with transactions</p>
<div className="cards">
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
</div>
<div className="bottom">
<div className="texts">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>

</div>
<div className="buttons">
<i class="ri-pencil-line"></i>
<i class="ri-delete-bin-6-line"></i>
</div>



</div>

</div>
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
</div>
<div className="bottom">
<div className="texts">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>

</div>
<div className="buttons">
<i class="ri-pencil-line"></i>
<i class="ri-delete-bin-6-line"></i>
</div>



</div>

</div>
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
</div>
<div className="bottom">
<div className="texts">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>

</div>
<div className="buttons">
<i class="ri-pencil-line"></i>
<i class="ri-delete-bin-6-line"></i>
</div>



</div>

</div>
<div className="card">

<div className="top">
<p class="text-xl font-bold text-black">Esewa</p>
<img src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/01/NIBL-logo.jpg" alt="" />
</div>
<div className="bottom">
<div className="texts">
<p class="text-2xl font-bold text-black">Rs. 3000</p>
<p class="text-xl font-bold text-grey">Rs. 3000</p>

</div>
<div className="buttons">
<i class="ri-pencil-line"></i>
<i class="ri-delete-bin-6-line"></i>
</div>



</div>

</div>

</div>
<div className="charts">
    <div className="piechart"></div>
    <div className="barchart">
        <BarCharts/>
    </div>
</div>
</div>
    </>
)
}