
import React from 'react';
import { Outlet } from 'react-router-dom';

const NoUserLayout = (props) => {

  return(
    <div className="no-user ">
      <div className="container justify-content-center">
        <div className="py-5">
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

export default NoUserLayout