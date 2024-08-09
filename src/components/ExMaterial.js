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

function ExMaterial() {
  //const size = useWindowSize();
  return (
    <Grid container spacing={1}>

      {/* <Grid item xs={12}>
        <Paper style={{ height: 100, backgroundColor: 'lightblue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Header
        </Paper>
      </Grid> */}

      <Grid item xs={12} sm={4}>
        <Paper style={{  height: 200, backgroundColor: 'lightgreen',  alignItems: 'center', justifyContent: 'center', padding:2 }}>
         <div >
       <Col>
                            <Col>
                             <FormGroup row  className="mb-2 mr-sm-2 mb-sm-1"  >
                             <Label  for="patcode" sm={2} >Mã BN:</Label>
                               <Col >
                                <Input 
                                 id="patcode" 
                                 name="patcode" 
                               
                                 placeholder=""
                                 type="text"
                                 />
                               </Col>
                              
                             </FormGroup>

                         <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                           <Label for="examplePassword"sm={2}> Họ tên:</Label>
                           <Col >
                             <Input 
                                id="id" 
                                name="fullname" 
                               placeholder=" "
                               type="text"
                             />
                          
                           </Col>
                         
                        </FormGroup>
                         <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                           <Label for="exampleSelect" sm={2}> Giới tính:</Label>
                      <Col >
                             <Input 
                               id="exampleSelect"
                               name="select"
                               type="select"
                             >
                               <option>
                              1
                               </option>
                               <option>
                                 2
                              </option>
                              <option>
                                 3
                               </option> 
                             </Input>
                           </Col>
                          
                           <Label
                             sm={3}
                           >
                             Điện thoại:
                           </Label>
                          <Col  > 
                                 <Input
                                 id="phonenumber" 
                                 name="phonenumber" 
                                 placeholder=""
                                 type="text"
                                 />
                               </Col>
                         </FormGroup>
                         <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                           <Label
                            for="exampleSelectMulti"
                             sm={2}
                           >
                             Địa chỉ:
                          </Label>
                               <Col  > 
                                 <Input
                                id="addresworkplace" 
                                 name="addresworkplace" 
                                 // value={formDataPatient.addresworkplace}
                                 // onChange={handleChange}
                                 placeholder=""
                                 type="text"
                                 />
                               </Col>
                         </FormGroup>
                         </Col> 

                       
                        </Col> 

       </div> 
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper style={{ height: 200, backgroundColor: 'lightgreen',  alignItems: 'center', justifyContent: 'center', padding:2 }}>
        <div >
       <Col>
                            <Col>
                             <FormGroup row  className="mb-2 mr-sm-2 mb-sm-1"  >
                             <Label  for="patcode" sm={2} >Mã BN:</Label>
                               <Col >
                                <Input 
                                 id="patcode" 
                                 name="patcode" 
                               
                                 placeholder=""
                                 type="text"
                                 />
                               </Col>
                              
                             </FormGroup>

                         <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                           <Label for="examplePassword"sm={2}> Họ tên:</Label>
                           <Col >
                             <Input 
                                id="id" 
                                name="fullname" 
                               placeholder=" "
                               type="text"
                             />
                          
                           </Col>
                         
                        </FormGroup>
                         <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                           <Label for="exampleSelect" sm={2}> Giới tính:</Label>
                      <Col >
                             <Input 
                               id="exampleSelect"
                               name="select"
                               type="select"
                             >
                               <option>
                              1
                               </option>
                               <option>
                                 2
                              </option>
                              <option>
                                 3
                               </option> 
                             </Input>
                           </Col>
                          
                           <Label
                             sm={3}
                           >
                             Điện thoại:
                           </Label>
                          <Col  > 
                                 <Input
                                 id="phonenumber" 
                                 name="phonenumber" 
                                 placeholder=""
                                 type="text"
                                 />
                               </Col>
                         </FormGroup>
                         <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                           <Label
                            for="exampleSelectMulti"
                             sm={2}
                           >
                             Địa chỉ:
                          </Label>
                               <Col  > 
                                 <Input
                                id="addresworkplace" 
                                 name="addresworkplace" 
                                 // value={formDataPatient.addresworkplace}
                                 // onChange={handleChange}
                                 placeholder=""
                                 type="text"
                                 />
                               </Col>
                         </FormGroup>
                         </Col> 

                       
                        </Col> 

       </div> 
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper style={{ height: 200, backgroundColor: 'lightgreen',  alignItems: 'center', justifyContent: 'center', padding:2 }}>
        <div >
       <Col>
                            <Col>
                             <FormGroup row  className="mb-2 mr-sm-2 mb-sm-1"  >
                             <Label  for="patcode" sm={2} >Mã BN:</Label>
                               <Col >
                                <Input 
                                 id="patcode" 
                                 name="patcode" 
                               
                                 placeholder=""
                                 type="text"
                                 />
                               </Col>
                              
                             </FormGroup>

                         <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                           <Label for="examplePassword"sm={2}> Họ tên:</Label>
                           <Col >
                             <Input 
                                id="id" 
                                name="fullname" 
                               placeholder=" "
                               type="text"
                             />
                          
                           </Col>
                         
                        </FormGroup>
                         <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                           <Label for="exampleSelect" sm={2}> Giới tính:</Label>
                      <Col >
                             <Input 
                               id="exampleSelect"
                               name="select"
                               type="select"
                             >
                               <option>
                              1
                               </option>
                               <option>
                                 2
                              </option>
                              <option>
                                 3
                               </option> 
                             </Input>
                           </Col>
                          
                           <Label
                             sm={3}
                           >
                             Điện thoại:
                           </Label>
                          <Col  > 
                                 <Input
                                 id="phonenumber" 
                                 name="phonenumber" 
                                 placeholder=""
                                 type="text"
                                 />
                               </Col>
                         </FormGroup>
                         <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                           <Label
                            for="exampleSelectMulti"
                             sm={2}
                           >
                             Địa chỉ:
                          </Label>
                               <Col  > 
                                 <Input
                                id="addresworkplace" 
                                 name="addresworkplace" 
                                 // value={formDataPatient.addresworkplace}
                                 // onChange={handleChange}
                                 placeholder=""
                                 type="text"
                                 />
                               </Col>
                         </FormGroup>
                         </Col> 
                        </Col> 

       </div> 
        </Paper>
      </Grid>
      
      {/* <Grid item xs={12}>
        <Paper style={{ height: 100, backgroundColor: 'lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Footer
        </Paper>
      </Grid> */}
    </Grid>
  );
}

export default ExMaterial;