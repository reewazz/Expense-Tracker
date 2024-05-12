import { Sidebar } from "../partials/Sidebar";
import "./profile.css";
export const Profile = () => {
  return (
    <>
      <Sidebar />
      <div className="profile-container">
        <p className="text-2xl font-bold text-black">Profile</p>
        <div className="profile-content">
          <div className="text-area">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
              alt="profile image"
            />
            <div className="details">
              <p className="text-2xl font-bold text-black">Jane Doe</p>
              <h3 className="text-sm leading-6 font-medium text-gray-600">
                Software Developer
              </h3>
              <div className="icon">
                <i className="ri-calendar-2-line"></i>
                <p className="text-l ml-2 font-bold text-black">5 june, 2002</p>
              </div>
              <div className="icon">
                <i className="ri-map-pin-line"></i>
                <p className="text-l ml-2 font-bold text-black">
                  Lagankhel, Lalitpur
                </p>
              </div>
            </div>
          </div>
          <div className="amount-area">
            <div className="bg-white p-5">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">
                    Total Balance
                  </h3>
                  <p className="text-3xl font-bold text-black">Rs. 69,000</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">
                    Total Expenses
                  </h3>
                  <p className="text-3xl font-bold text-black">Rs. 69,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
