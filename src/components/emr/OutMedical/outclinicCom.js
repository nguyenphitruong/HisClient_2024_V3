import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import callApi from '../../../apis/callApi';
import Header from '../../../layouts/header';

import outExamCom from './outExamCom';
import outServiceOrderCom from './outServiceOrderCom';
import outDrugOrderCom from './outDrugOrderCom';
import outICDCom from './outHisExamCom';
import outSloveCom from './outSloveCom';

import {
    Container,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    FormGroup,
    Form,
    Label,
    Col,
    Input,
    Button,
    FormText,
    Navbar

} from "reactstrap";
import OutExamCom from './outExamCom';
import OutServiceOrderCom from './outServiceOrderCom';
import OutDrugOrderCom from './outDrugOrderCom';
import OutSloveCom from './outSloveCom';
import OutHisExamCom from './outHisExamCom';

function OutclinicCom({ LstCachingCateShareLine, LstCachingCateICD10, LstCachingCateHopital, lstCachingCateSevice }) {
    const [activeTab, setActiveTab] = useState(0); // State để theo dõi tab hiện tại

    const data = [
        { id: 1, componentName: OutExamCom, tabName: 'KHÁM BỆNH' },
        { id: 2, componentName: OutServiceOrderCom, tabName: 'CHỈ ĐỊNH' },
        { id: 3, componentName: OutDrugOrderCom, tabName: 'KÊ ĐƠN' },
        { id: 4, componentName: OutSloveCom, tabName: 'XỬ TRÍ' },
        { id: 5, componentName: OutHisExamCom, tabName: 'LỊCH SỬ KHÁM' },
    ];

    // Hàm để thay đổi tab được chọn
    const changeTab = (index) => {
        setActiveTab(index);
    };

    //const size = useWindowSize();
    return (
        <div className="contentcomponent">
            <Grid container spacing={1}>
                {/* <Grid item xs={12} >
                <Paper style={{ height: 40, backgroundColor: 'lightblue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Header
                </Paper>
            </Grid> */}

                <Grid item xs={12} >
                    {/* <Paper style={{ height: '50px', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 2 }}> */}
                    <div >
                        {/* <Header/> */}
                    </div>
                    {/* </Paper> */}
                </Grid>

                {/* Danh sách bệnh nhân */}
                <Grid item xs={12} sm={2.5}>

                    <Paper style={{ height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
                        {/* <Paper style={{ height: '100%', backgroundColor: '#265ec7', color: 'whitesmoke', alignItems: 'center', justifyContent: 'center', padding: 2 }}> */}
                        <div >
                            <Grid container spacing={1}>
                                {/* Danh sách theo tuỳ chọn*/}
                                <Grid item xs={12} >

                                    <Paper style={{ height: '180px', backgroundColor: '#c2d0fc', color: '#265ec7', alignItems: 'center', justifyContent: 'center', padding: 2, margin: '5px' }}>
                                        <div >
                                            <Col>
                                                <Col>
                                                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1"  >
                                                        <Label for="patcode" sm={4} style={{ textAlign: 'right', marginLeft: 0 }} >Từ ngày:</Label>
                                                        <Col >
                                                            <Input id="patcode"
                                                                name="patcode"
                                                                placeholder=""
                                                                type="date"
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1"  >
                                                        <Label for="patcode" sm={4} style={{ textAlign: 'right', marginLeft: 0 }}>Tới ngày:</Label>
                                                        <Col >
                                                            <Input id="patcode"
                                                                name="patcode"
                                                                placeholder=""
                                                                type="date"
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1"  >
                                                        <Label for="patcode" sm={4} style={{ textAlign: 'right', marginLeft: 0 }}>Phòng:</Label>
                                                        <Col >
                                                            <Input id="patcode"
                                                                name="patcode"
                                                                placeholder=""
                                                                type="select"
                                                            />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1"  >
                                                        <Label for="patcode" sm={4} style={{ textAlign: 'right', marginLeft: 0 }}>Tình trạng:</Label>
                                                        <Col >
                                                            <Input id="patcode"
                                                                name="patcode"
                                                                placeholder=""
                                                                type="select"
                                                            />
                                                        </Col>
                                                    </FormGroup>

                                                    {/* <FormGroup row className="mb-2 mr-sm-2 mb-sm-1"  >
                                                    <Col >
                                                        <Label>
                                                            <Input id="patcode"
                                                                name="patcode"
                                                                placeholder=""
                                                                type="radio"
                                                                value="option2"
                                                            // checked={selectedOption === 'option2'}
                                                            // onChange={handleOptionChange}
                                                            /> Tất cả
                                                        </Label>
                                                    </Col>

                                                    <Col >
                                                        <Label>
                                                            <Input id="patcode"
                                                                name="patcode"
                                                                placeholder=""
                                                                type="radio"
                                                                value="option2"
                                                            // checked={selectedOption === 'option2'}
                                                            // onChange={handleOptionChange}
                                                            /> Chờ khám
                                                        </Label>
                                                    </Col>
                                                    <Col >
                                                        <Label>
                                                            <Input id="patcode"
                                                                name="patcode"
                                                                placeholder=""
                                                                type="radio"
                                                                value="option2"
                                                            // checked={selectedOption === 'option2'}
                                                            // onChange={handleOptionChange}
                                                            /> Đang khám
                                                        </Label>
                                                    </Col>
                                                    <Col >
                                                        <Label>
                                                            <Input id="patcode"
                                                                name="patcode"
                                                                placeholder=""
                                                                type="radio"
                                                                value="option2"
                                                            // checked={selectedOption === 'option2'}
                                                            // onChange={handleOptionChange}
                                                            /> Đã khám
                                                        </Label>
                                                    </Col>
                                                </FormGroup> */}
                                                </Col>

                                            </Col>
                                        </div>
                                    </Paper>
                                </Grid>
                                {/* Danh sách bệnh nhân*/}
                                <Grid item xs={12} >
                                    <Paper style={{ height: '80px', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
                                        <div >
                                            {/* <Paper style={{ height: 300, backgroundColor: 'lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
                                            <Col  >
                                                <Card>
                                                    <CardHeader style={{ background: '#c2d0fc', color: '#265ec7', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', border: '10px 10px 0 0', padding: '5px' }}>
                                                        <CardTitle tag="h5">Danh sách!</CardTitle>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Table className='table-container' >
                                                            {/* <thead className="text-primary">
                                                                <tr>
                                                                    <th>STT</th>
                                                                    <th>Khoa </th>
                                                                    <th>Phòng khám </th>
                                                                    <th>Chờ khám</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {currentPageData.map((item, index) =>
                                                                    <tr key={index.rowid}>
                                                                        <td>{item.drugcode}</td>
                                                                        <td>{item.drugcode}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.qtyt}</td>
                                                                        <td>{item.storecode}</td>

                                                                    </tr>
                                                                )}
                                                                <tr>
                                                                    {Array.from({ length: totalPages }, (_, index) => (
                                                                        <Button style={{ margin: '1px' }} key={index} onClick={() => handlePageChange(index + 1)}>
                                                                            {index + 1}
                                                                        </Button>
                                                                    ))}
                                                                </tr>
                                                            </tbody> */}
                                                        </Table>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            {/* </Paper> */}

                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>

                        </div>
                    </Paper>
                </Grid>

                {/* Chi tiết khám */}
                <Grid item xs={12} sm={9.5}>
                    {/* <Paper style={{ height: '100%', backgroundColor: 'whitesmoke', alignItems: 'center', justifyContent: 'center', padding: 2 }}> */}
                    <div >
                        <Grid container spacing={1}>
                            {/* thông tin hành chình*/}
                            <Grid item xs={12} >
                                <Paper style={{ height: '60px', backgroundColor: '#417dec', color: 'white', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
                                    <h2>Thông tin hành chính</h2>
                                </Paper>
                            </Grid>
                            {/* thông tin sinh hiệu*/}
                            <Grid item xs={12} >
                                <Paper style={{ height: '90px', backgroundColor: '#c2d0fc', color: '#265ec7', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
                                    <div >
                                        <Col>
                                            <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Mạch:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="text"
                                                    />
                                                </Col>
                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Huyết áp:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="text"
                                                    />
                                                </Col>
                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Nhiệt độ:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="text"
                                                    />
                                                </Col>
                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Nhịp thở:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="text"
                                                    />
                                                </Col>
                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Ngày khám:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="Date"
                                                    />
                                                </Col>

                                            </FormGroup>
                                            <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >

                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Cân nặng:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="text"
                                                    />
                                                </Col>
                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Chiều cao:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="text"
                                                    />
                                                </Col>
                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> SpO2:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="text"
                                                    />
                                                </Col>
                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> BMI:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="text"
                                                    />
                                                </Col>
                                                <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Bác sỹ:</Label>
                                                <Col >
                                                    <Input
                                                        id="id"
                                                        name="name"
                                                        // value={formDataPatient.name}
                                                        // onChange={handleChange}
                                                        placeholder=" "
                                                        type="Date"
                                                    />
                                                </Col>

                                            </FormGroup>
                                        </Col>
                                    </div>
                                </Paper>
                            </Grid>
                            {/* thông tin Chi tiết khám*/}
                            <Grid item xs={12}>
                                {/* <Paper > */}
                                <Paper style={{ height: '700px', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
                                    {/* Tab buttons */}
                                    <div className='tab' >
                                        {data.map((item, index) => (
                                            // <Button className='tab butto' key={index} onClick={() => changeTab(index)}>{item.tabName}</Button>
                                            <Button className={activeTab === index ? 'active' : ''} onClick={() => changeTab(index)}>{item.tabName}</Button>

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
                                </Paper>
                                {/* </Paper> */}
                            </Grid>
                        </Grid>

                    </div>
                    {/* </Paper> */}
                </Grid>

                <Grid item xs={12} >
                    {/* <Paper style={{ height: '50px', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 2 }}> */}
                    <div style={{ height: 50, backgroundColor: 'while', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        {/* <Paper style={{ height: 50, backgroundColor: 'while', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
                        {/* <Button color="primary" outline onClick={handleSubmit} className="custom-button">Mới</Button>
                            <Button color="success" outline onClick={handleSubmit} className="custom-button">Lưu</Button>
                            <Button color="warning" outline onClick={handleSubmit} className="custom-button">Bỏ qua</Button>
                            <Button color="danger" outline onClick={handleSubmit} className="custom-button">Thoát</Button>
                            <PrintComponent /> */}

                        <Button color="primary" outline className="custom-button">Mới</Button>
                        <Button color="success" outline className="custom-button">Lưu</Button>
                        <Button color="warning" outline className="custom-button">Bỏ qua</Button>
                        <Button color="danger" outline className="custom-button">Thoát</Button>
                        {/* <PrintComponent /> */}
                        {/* </Paper> */}
                    </div>
                    {/* </Paper> */}
                </Grid>
            </Grid>
        </div>
    );
}

export default OutclinicCom;