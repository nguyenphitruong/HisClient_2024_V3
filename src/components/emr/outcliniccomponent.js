import React, { useState, useEffect } from 'react';
import callApi from '../../apis/callApi';
import Patient from './PatientCom';
import registerHistoryCom from './registerHistoryCom';
import registerHiHistoryCom from './registerHiHistoryCom';
import CateServiceItemCom from './CateServiceItemCom'
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  FormText,
  Navbar

} from "reactstrap";


function Outcliniccomponent ({ LstCachingCateShareLine,LstCachingCateICD10,LstCachingCateHopital,lstCachingCateSevice}) {
  console.log("DataGetServiceAll:" +JSON.stringify(lstCachingCateSevice));
  //   const [data1, setData] = useState([]);
//   useEffect(() => {
//     GetListWaitExams();
// }, []);
//           async function GetListWaitExams()
//           {
//               try
//                {
//                   let datatemp = await callApi.GetAll1();
//                   const arr = []
//                   Object.keys(datatemp).forEach(key => arr.push({name: key, value: datatemp[key]}))
//                    let dataPase = arr[2].value;
//                    console.log('Get List dataPase menu', dataPase);
//                    setData(dataPase);
        
//               } catch (error) 
//               {
//                   console.log('Get list field',error)
//               }
//           }

//const dataServices = [];
// dataALl = dataServices;
//const [lstCateShare, setlstCateShare] = useState([]);
//   const [dataServices, setDataServices] = useState(lstCachingCateSevice);
//   useEffect(() => {
//     GetServicesAll();
//      console.log("DataGetServiceAll:" +JSON.stringify(dataServices));
// }, []);
//dataServices = GetServicesAll()
//console.log("DataGetServiceAll:" +JSON.stringify(dataServices));
// async function GetServicesAll()
// {
//     try
//      {
//         let dataGet = await callApi.GetServicesAll();
//         //console.log("dataGet:" +dataGet)
//         const arr = []
//         Object.keys(dataGet).forEach(key => arr.push({name: key, value: dataGet[key]}))
//          const dataPase = arr[2].value;
//          //console.log("DataGetServicePase:" +JSON.stringify(dataPase));

//          setDataServices(data);

//          const arr1 = []
//          Object.keys(dataPase).forEach(key => arr1.push({name: key, value: dataPase[key]}))

//            //  setlstCateShare(JSON.stringify(arr1[0].value));
//            //  setlstCateIcd(JSON.stringify(arr1[1].value));
//            //  setlstCateHosp(JSON.stringify(arr1[2].value));
//            //dataServices = arr1[0].value

//            //setDataServices(arr1[0].value);
//            //console.log("DataGroupPase:" +JSON.stringify(arr1[0].value));

       
//          }
//     catch (error) 
//     {
//         console.log('Get list DataGetService field',error)
//     } 
// } 
  // const [activeTabListExam, setActiveTabListExam] = useState(0); // State để theo dõi tab hiện tại

  // const dataListExam = [
  //   { id: 1, componentName: Patient, tabName: 'Đăng ký khám' },
  //   { id: 2, componentName: registerHistoryCom, tabName: 'Lịch sử đăng ký' },
  //   { id: 2, componentName: registerHiHistoryCom, tabName: 'Lịch sử khám BHYT' },
 
  // ];
  
  

  // // Hàm để thay đổi tab được chọn
  // const changeTabListExam = (index) => {
  //   setActiveTabListExam(index);
  // };
  // const [initialData, setData] = useState(GetServicesAll());
  
 

  const [activeTab, setActiveTab] = useState(0); // State để theo dõi tab hiện tại
  const data = [
    { id: 1, componentName: Patient, tabName: 'Đăng ký khám' },
    { id: 2, componentName: registerHistoryCom, tabName: 'Lịch sử đăng ký' },
    { id: 3, componentName: CateServiceItemCom, tabName: 'Dịch vụ cls' },
  ];

  // Hàm để thay đổi tab được chọn
  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className='tab' >
        {data.map((item, index) => (
          <Button style={{color:'Black'}}  key={index} onClick={() => changeTab(index)}>{item.tabName}</Button>
        ))}
      </div>
      {/* Tab content */}
      <table >
        <tbody>
          {data.filter((item, index) => index === activeTab).map((item) => (
            <tr key={item.id}>
              <div>
                <item.componentName dataServices = {lstCachingCateSevice}/>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Outcliniccomponent;