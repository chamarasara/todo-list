
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../pages/components/top_bar';

const UserLayout = (props) => {

  return (
    <div className="user ">
      <TopBar />
      <div className="container justify-content-center">
        <div className="py-0">
          <div className='branding-wrapper'>
            <center>
            </center>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserLayout