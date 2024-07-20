import React, { useState } from 'react';

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


const CateShareCom = () => {
  const [activeTab, setActiveTab] = useState(0); // State để theo dõi tab hiện tại


  // Hàm để thay đổi tab được chọn
  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <h> component danh mục</h>
    </div>
  );
};
export default CateShareCom;