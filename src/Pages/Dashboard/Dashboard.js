import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile mb-20">
      <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
      <h1 className='text-3xl text-center my-2'>Dashboard</h1>
      <label htmlFor="dashboardDrawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

          <li><Link to='/dashboard'>Order History</Link></li>
          <li><Link to='/dashboard/history'>History</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;