import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
          <Header></Header>  
          <div  className='max-w-7xl mx-auto  bg-base200'>
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default MainLayout;