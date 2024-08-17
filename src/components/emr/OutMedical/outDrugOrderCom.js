import React from 'react';
import { Grid, Paper } from '@mui/material';
//import useWindowSize from './useWindowSize';

//import './App.css';
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

function OutDrugOrderCom() {
    return (
        <div className="contentcomponent">
            <Grid container spacing={2}>
                {/* Thông tin Hành chính*/}

                {/* <Col size='120' > */}
                <Grid item xs={12}>
                    <Col>
                        {/* <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Chẩn đoán:</Label>
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

                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}></Label>
                            <Col  >
                                <Table style={{ height: '100px' }} >
                                    <thead className="text-primary">
                                        <tr>
                                            <th>STT</th>
                                            <th>Chính</th>
                                            <th>Mã </th>
                                            <th>Tên </th>
                                            <th>Ghi chú</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                    </tbody>
                                </Table>

                            </Col>

                        </FormGroup> */}

                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Chọn kho:</Label>
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
                            <Col sm={1}>
                                <Button color="primary" outline className="custom-button">Cho lại</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Tên thuốc:</Label>
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
                            <Col sm={1}>
                                <Button color="primary" outline className="custom-button">Đơn mẫu</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Ghi chú:</Label>
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
                            <Col sm={1}>
                                <Button color="primary" outline className="custom-button">Lưu mẫu</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Chọn mẫu</Label>
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
                            <Col sm={1}>
                                <Button color="primary" outline className="custom-button">In đơn</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >

                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Sáng:</Label>
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
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Trưa:</Label>
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
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Chiều:</Label>
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

                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Tối:</Label>
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
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Số ngày:</Label>
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
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Tổng:</Label>
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

                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}></Label>
                            <Col >
                                <div className="table-container">
                                    <Table >
                                        <thead >
                                            <tr >
                                                <th style={{ background: '#c2d0fc', color: '#265ec7' }}>Chọn</th>
                                                <th style={{ background: '#c2d0fc', color: '#265ec7' }}>Mã DV</th>
                                                <th style={{ background: '#c2d0fc', color: '#265ec7' }}>Tên DV</th>
                                                <th style={{ background: '#c2d0fc', color: '#265ec7' }}>ĐVT</th>
                                                <th style={{ background: '#c2d0fc', color: '#265ec7' }}>Giá DV</th>
                                                <th style={{ background: '#c2d0fc', color: '#265ec7' }}>Giá BHYT</th>
                                                <th style={{ background: '#c2d0fc', color: '#265ec7' }}>BHYT</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </Table>
                                </div>



                            </Col>

                        </FormGroup>

                        {/* <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Tình trạng:</Label>
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

                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Kết quả điều trị:</Label>
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

                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Lời dặn:</Label>
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

                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Ngày tái khám:</Label>
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
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'right', marginLeft: 0 }}> Số ngày nghỉ BHYT:</Label>
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

                        </FormGroup> */}


                    </Col>
                </Grid>


            </Grid>
        </div>
    );
}

export default OutDrugOrderCom