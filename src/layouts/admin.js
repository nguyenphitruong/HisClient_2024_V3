import React from 'react';
//import { ThemeProvider } from './ThemeContext';
import Dashboard from './dashboard'

import MainComponent  from '../components/emr/MainComponent'
import RegisterHiHistoryCom from '../components/emr/registerHiHistoryCom';
import { DataContext } from '../contexts/ShareContext/DataContext';
import CateServiceItemCom from'../components/emr/CateServiceItemCom';
//import '../App.css';
import '../index';
import { DataProvider } from '../contexts/ShareContext/DataContext';


const admin = () => {
  return (
    <DataProvider>
       {/* {<CateServiceItemCom />} */}
      <div className="content">
        {<Dashboard/>}
      </div>
    </DataProvider>
  ); 
};
export default admin;