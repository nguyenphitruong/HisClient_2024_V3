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

function outSurvivalCom() {
    return (
        <div className="contentcomponent">
            <Grid container spacing={1}>
                {/* thông tin sinh hiệu*/}
                <Grid item xs={12}>
                    <Paper style={{ height: '100px', backgroundColor: '#c2d0fc', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
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

                                </FormGroup>
                                <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                                    <Label for="examplePassword" sm={2} style={{ textAlign: 'right', marginLeft: 0 }}> Bác sỹ khám:</Label>
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
                            </Col>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default outSurvivalCom