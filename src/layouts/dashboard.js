

//import '../index.css';
import '../App';

import RouteComponent from "../routes.js"
import callApi from '../apis/callApi.js';
//import React, { useContext } from 'react';
import React, { createContext, useState, useEffect, Component } from 'react';
import { Routes, Route, Switch, useLocation } from "react-router-dom";
import  Sidebars from './Sidebars.js';
import Foodter from './foodter';
import Header from './header.js';
//import routes from "../routes.js";
//import data from "../routes.js";
import PerfectScrollbar from "perfect-scrollbar";
//import { DataContext } from '../contexts/ShareContext/DataContext.js';
import { DataProvider } from '../contexts/ShareContext/DataContext';
//import routes from '../AdminRoutes.js';


var ps;
function Dashboard (props){
  //const { datashare  } = useContext(DataContext);
  //console.Console("datashare:" + datashare)
  //const {data}  = routes;
  //console.log('aaaa' + data);
  const [backgroundColor, setBackgroundColor] = React.useState("blue");
  const [activeColor, setActiveColor] = React.useState("info");

    const mainPanel = React.useRef();
    const location = useLocation();
    const [data, setData] = useState([]);
    const [DataCaching, setDataCaching] = useState([]);


  useEffect(() => {
    refreshList();
   // GetListDataCaching();
  }, []);

    async function refreshList()
    {
        try
         {
            let datatemp = await callApi.GetMenuAll();
            const arr = []
            Object.keys(datatemp).forEach(key => arr.push({name: key, value: datatemp[key]}))
             let dataPase = arr[2].value;
             //console.log('Get List dataPase menu', dataPase);
  
             var innerJoin = RouteComponent.reduce((result, itemCom) => 
             {
              // Lọc phần tử trong mảng array2 có id trùng với id của item1
              const menuselects = dataPase.filter(item2 => item2.modulecode === itemCom.modulecode );
             
              if (menuselects.length > 0) {
                
                menuselects.forEach(itemData => {
                  const addChildrens = [];
                  itemCom.chilren.forEach(chilCom => {
                   
                    itemData.chilren.forEach(chilData=>{
                      
                      if(chilCom.code === chilData.code)
                      
                      addChildrens.push({
                    name:chilData.name,
                    code:chilData.code,
                    component: chilCom.component,
                    icon: chilCom.icon,
                    layout: chilCom.layout,
                    path: chilCom.path,
                    modulepath: chilCom.modulepath,
                    })
              //    console.log("lst chilren:" + addChildrens)
                    })
                  });
                  result.push(
                    {
                      ...itemCom,
                      modulecode: itemData.modulecode, 
                      modulename: itemData.modulename,
                      chilren: addChildrens,
                    });
                  
                });
                setData(result);
              }
            //  console.log('Get List result 1', result);
              return result;
            }, []);
  
  
            
  
        } catch (error) 
        {
            console.log('Get list fieldd',error)
        }
    }
    async function GetListDataCaching()
  {
      try
       {
          let dataGet = await callApi.GetCateAll();
         // console.log("dataGet:" +dataGet)
          const arr = []
          Object.keys(dataGet).forEach(key => arr.push({name: key, value: dataGet[key]}))
           const dataPase = arr[2].value;

          const datatest = JSON.stringify(dataPase);

           //console.log("DataCaching:" +datatest)
           setDataCaching(datatest);
          return datatest;
      } catch (error) 
      {
          console.log('Get list field',error)
      }
    
  }

    // React.useEffect(() => {
    //   if (navigator.platform.indexOf("Win") > -1) {
    //     ps = new PerfectScrollbar(mainPanel.current);
    //     document.body.classList.toggle("perfect-scrollbar-on");
    //   }
    //   return function cleanup() {
    //     if (navigator.platform.indexOf("Win") > -1) {
    //       ps.destroy();
    //       document.body.classList.toggle("perfect-scrollbar-on");
    //     }
    //   };
    // });
    // React.useEffect(() => {
    //   mainPanel.current.scrollTop = 0;
    //   document.scrollingElement.scrollTop = 0;
    // }, [location]);
  
    const handleActiveClick = (color) => {
      setActiveColor(color);
    };
    const handleBgClick = (color) => {
      setBackgroundColor(color);
    };

  return (
    <div className="content">
      {/* <Header/> */}
      < Sidebars
       {...props}
       routes={data}
       //DataCaching={DataCaching}
       bgColor={backgroundColor}
       activeColor={activeColor}
       
      />
       {/* <div  style={{color: 'red', justifyContent: 'center', display: 'flex', width:'100'}} ref={mainPanel}>
        style={{color: 'red', justifyContent: 'center', display: 'flex', height: '80px', width: '100%'}}
      </div> */}
      {/* <div style={{color: 'red', justifyContent: 'center', display: 'flex', height: '80px', width: '100%'}}  ref={mainPanel}>
      
      </div> */}

      <div className="content" ref={mainPanel}>
      
      </div>
      {/* <Foodter/>    */}
    </div>
  );
}

export default Dashboard;