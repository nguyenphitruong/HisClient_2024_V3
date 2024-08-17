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
import { Margin } from '@mui/icons-material';

function OutExamCom() {
    return (
        <div className="contentcomponent">
            <Grid container spacing={2}>
                {/* Thông tin Hành chính*/}

                {/* <Col size='120' > */}

                <Grid item xs={12} >

                    <Col>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'left', justifyContent: 'center', marginLeft: 10, overflow: 'auto', alignContent: 'center' }}>Quá trình bệnh lý:</Label>
                            <Col >
                                <Input style={{ height: '120px', marginTop: '10px' }}
                                    id="id"
                                    name="name"
                                    // value={formDataPatient.name}
                                    // onChange={handleChange}
                                    placeholder=" "
                                    type="textarea"
                                />

                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'left', justifyContent: 'center', marginLeft: 10, overflow: 'auto', alignContent: 'center' }}>Tiền sử bản thân:</Label>
                            <Col >
                                <Input style={{ height: '120px' }}
                                    id="id"
                                    name="name"
                                    // value={formDataPatient.name}
                                    // onChange={handleChange}
                                    placeholder=" "
                                    type="textarea"
                                />

                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'left', justifyContent: 'center', marginLeft: 10, overflow: 'auto', alignContent: 'center' }}>Tiền sử gia đình:</Label>
                            <Col >
                                <Input style={{ height: '120px' }}
                                    id="id"
                                    name="name"
                                    // value={formDataPatient.name}
                                    // onChange={handleChange}
                                    placeholder=" "
                                    type="textarea"
                                />

                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'left', justifyContent: 'center', marginLeft: 10, overflow: 'auto', alignContent: 'center' }}>Khám toàn thân:</Label>
                            <Col >
                                <Input style={{ height: '120px' }}
                                    id="id"
                                    name="name"
                                    // value={formDataPatient.name}
                                    // onChange={handleChange}
                                    placeholder=" "
                                    type="textarea"
                                />

                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                            <Label for="examplePassword" sm={1} style={{ textAlign: 'left', justifyContent: 'center', marginLeft: 10, overflow: 'auto', alignContent: 'center' }}>Khám chuyên khoa:</Label>
                            <Col >
                                <Input style={{ height: '120px' }}
                                    id="id"
                                    name="name"
                                    // value={formDataPatient.name}
                                    // onChange={handleChange}
                                    placeholder=" "
                                    type="textarea"
                                />

                            </Col>
                        </FormGroup>

                    </Col>
                </Grid>
            </Grid>
        </div>
    );
}

export default OutExamCom