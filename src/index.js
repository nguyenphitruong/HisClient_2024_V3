import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import './App';
import Admin from './layouts/admin';
import Dashboard from './layouts/dashboard';
//import Admin from './layouts/AdminTemplate';
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter,Routes, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Patient from './components/emr/PatientCom.js';
import RegisterHistoryCom from './components/emr/registerHistoryCom';
import registerHiHistoryCom from './components/emr/registerHiHistoryCom';
import PageNumberCom from './components/emr/PageNumberCom';
import AdminRoutes from './AdminRoutes.js'
import TextComponent from './layouts/TextComponent.js'
import JoneData from './contexts/ShareContext/JoneData.js'


//import { DataProvider } from './contexts/ShareContext/DataContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <ProSidebarProvider>
     <Admin />
     {/* <PrintTestCom /> */}
     </ProSidebarProvider>
     </BrowserRouter>
);

