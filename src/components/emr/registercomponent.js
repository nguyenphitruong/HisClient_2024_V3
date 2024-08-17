import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import PatientCom from './PatientCom';
import RegisterCom from '../emr/Register/RegisterCom';
import registerHistoryCom from './registerHistoryCom';
import registerHiHistoryCom from './registerHiHistoryCom';
// import CateServiceItemCom from './CateServiceItemCom'
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


function Registercomponent({ LstCachingCateShareLine, LstCachingCateICD10, LstCachingCateHopital, lstCachingCateSevice }) {
  const [activeTab, setActiveTab] = useState(0); // State để theo dõi tab hiện tại

  const data = [
    { id: 1, componentName: RegisterCom, tabName: 'Đăng ký khám' },
    { id: 2, componentName: registerHistoryCom, tabName: 'Lịch sử đăng ký' },
    { id: 3, componentName: registerHiHistoryCom, tabName: 'Lịch sử đăng ký khám BHYT' },
    // { id: 4, componentName: CateServiceItemCom, tabName: 'Danh sách dịch vụ' },
  ];

  // Hàm để thay đổi tab được chọn
  const changeTab = (index) => {
    setActiveTab(index);
  };


  return (
    <Grid container spacing={1}>
      {/* Tab buttons */}
      <Grid item xs={12} >
      {/* style={{ color: '#265ec7' }} */}
        {/* <Paper style={{  height: 50, backgroundColor: 'lightgreen',  alignItems: 'center', justifyContent: 'center', padding:2 }}> */}
        <div className='tab'>
          {data.map((item, index) => (
            // <Button className='tab butto'  key={index} onClick={() => changeTab(index)}>{item.tabName}</Button>
            <Button className={activeTab === index ? 'active' : ''} onClick={() => changeTab(index)}>{item.tabName}</Button>
          ))}
        </div>
        {/* 
      </Paper> */}
      </Grid>
      {/* Tab content */}
      <Grid item xs={12} >
        <Table >
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
        </Table>
      </Grid>

    </Grid>
  );
};
export default Registercomponent;