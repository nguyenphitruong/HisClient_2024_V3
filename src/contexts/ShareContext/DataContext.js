
import RouteComponent from "../../routes"
import callApi from '../../apis/callApi';
import React, { createContext, useState, useEffect, Component } from 'react';
export const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [DataCaching, setData] = useState([]);
  const dataselect = JSON.stringify(DataCaching);
  //const { LstCachingCateShareLine, LstCachingCateICD10, LstCachingCateHopital  } = dataselect;
 //const  LstCachingCateShareLine = dataselect.LstCachingCateShareLine;
  console.log("Setdatacaching:" +DataCaching )
  //console.log("LstCachingCateShareLine:" +LstCachingCateShareLine )
  //const [DataCaching, setDataCaching] = useState([]);


  useEffect(() => {
    //JoneData();
    //refreshList();
   // GetListDataCaching();
    return DataCaching;
  }, []);

 
  // async function refreshList()
  // {
  //     try
  //      {
  //         let datatemp = await callApi.GetMenuAll();
  //         const arr = []
  //         Object.keys(datatemp).forEach(key => arr.push({name: key, value: datatemp[key]}))
  //          let dataPase = arr[2].value;
  //          console.log('Get List dataPase menu', dataPase);

  //          var innerJoin = RouteComponent.reduce((result, itemCom) => 
  //          {
  //           // Lọc phần tử trong mảng array2 có id trùng với id của item1
  //           const menuselects = dataPase.filter(item2 => item2.modulecode === itemCom.modulecode );
           
  //           if (menuselects.length > 0) {
              
  //             menuselects.forEach(itemData => {
  //               const addChildrens = [];
  //               itemCom.chilren.forEach(chilCom => {
                 
  //                 itemData.chilren.forEach(chilData=>{
                    
  //                   if(chilCom.code === chilData.code)
                    
  //                   addChildrens.push({
  //                 name:chilData.name,
  //                 code:chilData.code,
  //                 component: chilCom.component,
  //                 icon: chilCom.icon,
  //                 layout: chilCom.layout,
  //                 path: chilCom.path,
  //                 modulepath: chilCom.modulepath,
  //                 })
  //               console.log("lst chilren:" + addChildrens)
  //                 })
  //               });
  //               result.push(
  //                 {
  //                   ...itemCom,
  //                   modulecode: itemData.modulecode, 
  //                   modulename: itemData.modulename,
  //                   chilren: addChildrens,
  //                 });
                
  //             });
  //             setData(result);
  //           }
  //           console.log('Get List result 1', result);
  //           return result;
  //         }, []);
  //     } catch (error) 
  //     {
  //         console.log('Get list fieldd',error)
  //     }
  // }

  async function GetListDataCaching()
  {
      try
       {
          let dataGet = await callApi.GetCateAll();
          console.log("dataGet:" +dataGet)
          const arr = []
          Object.keys(dataGet).forEach(key => arr.push({name: key, value: dataGet[key]}))
           const dataPase1 = arr[0].value;
           const dataPase2 = arr[1].value;
           const dataPase = arr[2].value;

           const arr1 = []
          Object.keys(dataPase).forEach(key => arr1.push({name: key, value: dataPase[key]}))
           const dataPase11 = JSON.stringify(arr1[0].value);
           const dataPase22 = arr1[1].value;
           const dataPase33 = arr[2].value;

           console.log("dataPase11:" +dataPase11)
           console.log("dataPase12:" +dataPase22)
           console.log("dataPase13:" +dataPase33)
           //const{select} = JSON.stringify(dataPase);

           //const {select1} = JSON.stringify(select.LstCachingCateShareLine);

             setData(dataPase11);
          //  console.log("DataCateShare:" +dataPase)
          //  console.log("DataCateShare1:" +dataPase1)
          //  console.log("DataCateShar2:" +dataPase2)
           return dataPase11;
           }

          //const datatest = JSON.stringify(dataPase);

           //console.log("DataCaching:" +datatest)
          //setData(datatest);
          //return dataPase;
  
      //} 
      catch (error) 
      {
          console.log('Get list field',error)
      }
    
  }
  return (
    // <ContextShare.Provider value={DataCaching}>
    //   <ContextRoute.Provider value={data}>
    //     <children />
    //   </ContextRoute.Provider>
    // </ContextShare.Provider>
    <DataContext.Provider value={{ DataCaching }}>
      {children}
    </DataContext.Provider>
   );
};

