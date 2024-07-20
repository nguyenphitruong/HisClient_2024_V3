import React, { useState } from 'react';
import Patient from './PatientCom';
import Outcliniccomponent from './outcliniccomponent';
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


const TabTableComponent = () => {
  const [activeTab, setActiveTab] = useState(0); // State để theo dõi tab hiện tại

  const data = [
    { id: 1, componentName: Patient, tabName: 'Đăng ký khám' },
    { id: 2, componentName: Outcliniccomponent, tabName: 'Lịch sử đăng ký' },
    { id: 2, componentName: Patient, tabName: 'Lịch sử khám BHYT' },
 
  ];

  // Hàm để thay đổi tab được chọn
  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className='tab'>
        {data.map((item, index) => (
          <button  key={index} onClick={() => changeTab(index)}>{item.tabName}</button>
        ))}
      </div>
      {/* Tab content */}
      <table >
        <tbody>
          {data.filter((item, index) => index === activeTab).map((item) => (
            <tr key={item.id}>
              <div>
                <item.componentName/>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TabTableComponent;