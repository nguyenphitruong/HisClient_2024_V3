
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import Patientcomponent from "../components/emr/patientcomponent.js"
import Registercomponent from "../components/emr/registercomponent";
import Outcliniccomponent from "../components/emr/outcliniccomponent";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Routes, Route, Link } from "react-router-dom";
import React, { useContext, useState, Fragment, useEffect } from "react";
import callApi from '../apis/callApi';

import { Icon } from "@mui/material";
//import { DataContext } from '../contexts/ShareContext/DataContext.js';

function Sidebars(props) {

  //const { routes  } = useContext(DataContext);
  const sidebar = React.useRef();
  const { collapseSidebar } = useProSidebar();
  const activeRoute = (routeName) => {
  };

  const [lstCateSevice, setlstCateSevice] = useState([]);
  const [lstCateShareH, setlstCateShareH] = useState([]);
  const [lstCateShare, setlstCateShare] = useState([]);
  const [lstCateIcd, setlstCateIcd] = useState([]);
  const [lstCateHosp, setlstCateHosp] = useState([]);
  useEffect(() => {
    GetListDataCaching();
    GetServicesAll();

    console.log("lstCateSevice" + JSON.stringify(lstCateSevice))
  }, []);

  async function GetListDataCaching() {
    try {
      let dataGet = await callApi.GetCateAll();
      //console.log("dataGet:" +dataGet)
      const arr = []
      Object.keys(dataGet).forEach(key => arr.push({ name: key, value: dataGet[key] }))
      const dataPase = arr[2].value;

      const arr1 = []
      Object.keys(dataPase).forEach(key => arr1.push({ name: key, value: dataPase[key] }))
      
      setlstCateShareH(arr1[0].value);
      setlstCateShare(arr1[1].value);
      setlstCateIcd(arr1[2].value);
      setlstCateHosp(arr1[3].value);


    }
    catch (error) {
      console.log('Get list field', error)
    }
  }

  async function GetServicesAll() {
    try {
      let dataGet = await callApi.GetServicesAll();
      //console.log("dataGet:" +dataGet)
      const arr = []
      Object.keys(dataGet).forEach(key => arr.push({ name: key, value: dataGet[key] }))
      const dataPase = arr[2].value;
      //console.log("DataGetServicePase:" +JSON.stringify(dataPase));

      //setlstCateSevice(dataPase);

      const arr1 = []
      Object.keys(dataPase).forEach(key => arr1.push({ name: key, value: dataPase[key] }))
      setlstCateSevice(arr1[0].value);
      //console.log("DataGroupPase:" +JSON.stringify(arr1[0].value));


    }
    catch (error) {
      console.log('Get list DataGetService field', error)
    }
  }

  return (
    <div style={{ display: "flex", height: "80vh" }}>
      {/* <PerfectScrollbar> */}
      <Sidebar className="custom-sidebar" >
        <Menu>
          <MenuItem className="closemenu"
            icon={<MenuRoundedIcon
              onClick={() => {
                collapseSidebar();
              }}
            />}>
            <h2> Menu</h2>
          </MenuItem>
          {/* style={{color: 'black',textDecoration: 'none',fontSize: '18px'}} */}
          {props.routes.map((prop, key) => (
            <SubMenu key={key} icon={<prop.moduleicon></prop.moduleicon>} label={prop.modulename} >
              {prop.chilren.map((chilren, keychilren) => (
                <MenuItem key={keychilren} >
                  {<chilren.icon />}
                  <Link style={{ color: '#114747', textDecoration: 'none', fontSize: '16px' }} className="tr-link"
                    to={chilren.layout + chilren.modulepath + chilren.path}>{chilren.name}
                  </Link>
                </MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Sidebar>
      {/* </PerfectScrollbar> */}

      <Routes>
        {props.routes.map((prop, index) => (
          <Fragment>
            {prop.chilren.map((propchilren, indexchilren) => (
              <Route key={indexchilren} path={propchilren.layout + propchilren.modulepath + propchilren.path} element={<propchilren.component
                LstCachingCateShareHeader={lstCateShareH}
                LstCachingCateShareLine={lstCateShare}
                LstCachingCateICD10={lstCateIcd}
                LstCachingCateHopital={lstCateHosp}
                lstCachingCateSevice={lstCateSevice}
              />} />
            ))}
          </Fragment>
        ))}
      </Routes>

    </div>
  );
};

export default Sidebars;