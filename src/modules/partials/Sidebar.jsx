import { Avatar } from "@mantine/core"
import './sidebar.css'
export const Sidebar = ()=> {
    return(
        <>
         <div className="topbar">
<div className="gm">
<h2>Good Morning, Riwaj</h2>
</div>
<div className="extras">
<div className="extra">
<h2>Friday 19 June, 2024</h2>
</div>
<div className="extra">
<i className="ri-notification-3-line"></i>
</div>
<div className="extra">
<div className="avatar">
<div class="flex -space-x-2 overflow-hidden">

  <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
</div>
</div>
</div>
</div>
    </div>
    <div className="sidebar">
        <div className="logoshort">
            <img src="LogoShort.png" alt="Logo" />
        </div>
        <div className="nav-items">
            <div className="nav-item">
            <i class="ri-folder-2-line"></i>
            <i class="ri-calendar-2-line"></i>
            <i class="ri-pages-line"></i>
            <i class="ri-bar-chart-2-line"></i>
            <i class="ri-time-line"></i>
            <i class="ri-server-line"></i>


            </div>
        </div>
        <div></div>

    </div>
   
    </>
    )
}