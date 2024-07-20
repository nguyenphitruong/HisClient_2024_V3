import React, { useState, useEffect } from 'react';
import PatientCom from './PatientCom';
import RegisterCom from '../emr/Register/RegisterCom';
import registerHistoryCom from './registerHistoryCom';
import registerHiHistoryCom from './registerHiHistoryCom';
import CateServiceItemCom from './CateServiceItemCom'
import callApi from '../../apis/callApi';
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


// const Registercomponent = () => {
  function Registercomponent({ LstCachingCateShareLine,LstCachingCateICD10,LstCachingCateHopital,lstCachingCateSevice} ) {

     //const a = lstCachingCateSevice;
     //console.log("LstCachingCateShareLine:" +LstCachingCateShareLine);
     console.log("lstCachingCateSevice:" + JSON.stringify(lstCachingCateSevice));
    // console.log("bb:" +LstCachingCateICD10);
    // console.log("cc:" +LstCachingCateHopital);
  const [activeTab, setActiveTab] = useState(0); // State để theo dõi tab hiện tại

  const data = [
    //{ id: 1, componentName: PatientCom, tabName: 'Bệnh nhân' },
    { id: 1, componentName: RegisterCom, tabName: 'Đăng ký khám' },
    { id: 2, componentName: registerHistoryCom, tabName: 'Lịch sử đăng ký' },
    { id: 3, componentName: registerHiHistoryCom, tabName: 'Lịch sử khám BHYT' },
    { id: 4, componentName: CateServiceItemCom, tabName: 'Danh sách dịch vụ' },

 
  ];

  // Hàm để thay đổi tab được chọn
  const changeTab = (index) => {
    setActiveTab(index);
  };


  return (
    <div>
      {/* <div>
      {LstCachingCateShareLine.map((item, index) =>
                                                <tr key={index.code}>
                                                    <td>{item.code}</td>
                                                    <td>{item.name}</td>

                                                </tr>
                                            )}
      </div> */}
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
                <item.componentName 
                 LstCachingCateShareLine={LstCachingCateShareLine} 
                 LstCachingCateICD10={LstCachingCateICD10} 
                 LstCachingCateHopital={LstCachingCateHopital}
                 lstCachingCateSevice={lstCachingCateSevice}
                 />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};
export default Registercomponent;