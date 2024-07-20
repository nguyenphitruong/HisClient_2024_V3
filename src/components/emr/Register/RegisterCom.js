import React, { useState, useEffect } from 'react';
import callApi from '../../../apis/callApi';
import RegisterModel from '../../../models/emr/RegisterModel';
import patientModel from '../../../models/emr/patient/PatientModel';
import patientHiModel from '../../../models/emr/patient/PatientHiModel';
import PrintComponent from '../../PrintReports/PrintComponent.js';
import PopupPatientCom from '../../emr/Patient/PopupPatientCom.js'
//import RegisterCom from '../emr/Register/RegisterCom';


import Row from '../../../RowCus.js';
import Col from '../../../ColumnCus.js';

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
    Input,
    Button,
    FormText,
    Navbar

} from "reactstrap";
import Patient from '../PatientCom.js';
function RegisterCom ({ LstCachingCateShareLine,LstCachingCateICD10,LstCachingCateHopital,lstCachingCateSevice}) {

  //console.log("LstCachingCateShareLine:" +JSON.stringify(LstCachingCateShareLine));
  const itemsPerPage = 2; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Data to be displayed on current page
  const currentPageData = data.slice(startIndex, endIndex);
  // Function to handle page change
  const handlePageChange = (page) => {
      setCurrentPage(page);
  };

  
  //2.Xử lý dữ ệu khi một thuộc tính có sự thay đổi

     //DM đối tượng khám
     const objects = LstCachingCateShareLine.filter(f=>f.codeh === "PROVIN");
     //DM KCBBD
     const hospitals = LstCachingCateShareLine.filter(f=>f.codeh === "PROVIN");
      //DM hình thức đến
      const formcos = LstCachingCateShareLine.filter(f=>f.codeh === "PROVIN");
     //DM đối tượng ưu tiên
     const priorityobjects = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     //DM thanh toán kèm theo
     const payattachts = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     //DM chiết khấu
     const discounts = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     //DM Dịch vụ khám
     const serExams = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     //DM BS khám
     const docExams = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     const [selectedDocExam, setSelectedDocExam] = useState('');

    const[formData, setFormData] = useState({
      RegisterModel
    });

    
    const[patcodeSelect, setPatcodeSelect] = useState('');

    const[formDataPatient, setFormDataPatient] = useState({
      patientModel
    });

    const[patientEditInfo, setPatientEditInfo] = useState(formDataPatient);
    

    
  //2.Xử lý dữ ệu khi một thuộc tính có sự thay đổi
  const handleChange = (event) => {
      const { name, value } = event.target;
      console.log("EVEN:" + JSON.stringify(event.target.name)) ; 
      setFormDataPatient({
          ...formDataPatient,
          [name]: value
      });
    
  };

  const[formPatientHi, setFormPatientHi] = useState({
    patientHiModel
  });
  const handleChangePatientHiModel = (event) => {
    const { name, value } = event.target;
    //Cật nhật trạng thái của model dữ liệu với giá trị mới
    setFormPatientHi({
        ...formPatientHi,
        [name]: value
    });
   
};
  //Xử lý sự kiện trên form được gửi đi
  const handleSubmit = (event) => {
      event.preventDefault();
      //Thực hien các thao tác liên quan đến việc gửi dữ liệu
      SaveRegister()
      console.log("Dữ liệu được gửi đi: ", formData);
  };

  const handleKeyDownPatcode = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      // Thực hiện hành động mong muốn, ví dụ: gửi biểu mẫu hoặc lưu giá trị
      console.log('Input value :', event.target.value);
  
      GetPatientInfoByPatcode(event.target.value);
    }
  };

  useEffect(() => {
    //GetListWaitExams();
}, []);
          async function GetPatientInfoByPatcode(i_patcode)
          {
              try
               {
                console.log('i_patcode', +i_patcode)
                
                  let datatemp = await callApi.GetPatientBypatcode(i_patcode);
                  console.log('GetPatientByPatcode_datatemp', datatemp);
                  const arr = []
                  Object.keys(datatemp).forEach(key => arr.push({name: key, value: datatemp[key]}))
                   let dataPase = arr[2].value;
                   console.log('GetPatientByPatcode', dataPase);
                   setFormDataPatient(dataPase);
                   console.log('formDataPatient', JSON.stringify(formDataPatient));

                   
        
              } catch (error) 
              {
                  console.log('Get list field',error)
              }
          }
          async function GetListWaitExams()
          {
              try
               {
                  let datatemp = await callApi.GetAll1();
                  const arr = []
                  Object.keys(datatemp).forEach(key => arr.push({name: key, value: datatemp[key]}))
                   let dataPase = arr[2].value;
                   console.log('Get List dataPase menu', dataPase);
                   setData(dataPase);
        
              } catch (error) 
              {
                  console.log('Get list field',error)
              }
          }
          async function SaveRegister()
          {
              try
               {
                 let url = '/Patient';

                 if(formPatientHi!=null)
                 {
                  formData.patientHi = formPatientHi;
                 }
                 
                 const jsonString = JSON.stringify(formData);
                 console.log('Json lưu', jsonString);
                 alert(jsonString);
                 let datatemp = await callApi.Post(url,jsonString);

                  const arr = []
                  Object.keys(datatemp).forEach(key => arr.push({name: key, value: datatemp[key]}))
                   let dataPase = arr[2].value;
                   console.log('Lưu thành công', dataPase);
                   //setData(dataPase);
        
              } catch (error) 
              {
                  console.log('Lưu lỗi',error)
              }
          }
        return (
            <>
                <div className="contentcomponent">
                <Form onSubmit={handleSubmit}>
                
                   {/* Thông tin Hành chính*/}
                      <Row className="bg-light p-2">
                      <Col>
                            <Col>
                            <FormGroup row  className="mb-2 mr-sm-2 mb-sm-1"  >
                              {/* <Label className="custom-label"  for="patcode" sm={3} >Mã BN:</Label> */}
                              <Label  for="patcode" sm={3} >Mã BN:</Label>
                              <Col className="mb-2 mr-sm-2 mb-sm-1" >
                                <Input style={{width:'240px'}}
                                id="patcode" 
                                name="patcode" 
                                // value= {patcodeSelect} onChange={(e) => setPatcodeSelect(e.target.value)}
                                value={formDataPatient.patcode}
                                onKeyDown={handleKeyDownPatcode}
                                // onChange={handleChange} 
                                placeholder=""
                                type="text"
                                />
                              </Col>
                              <Col ms={1}>
                                  <PopupPatientCom 
                                  LstCachingCateShareLine={LstCachingCateShareLine} 
                                  LstCachingCateHopital={LstCachingCateHopital} />
                                  
                                   {/* patientModel={formDataPatient} /> */}
                              </Col>
                            </FormGroup>

                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                          <Label for="examplePassword"sm={3}> Họ tên:</Label>
                          <Col >
                            <Input 
                               id="id" 
                               name="fullname" 
                               value={formDataPatient.name}
                               onChange={handleChange} 
                              placeholder=" "
                              type="text"
                            />
                          
                          </Col>
                         
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label for="exampleSelect" sm={3}> Giới tính:</Label>
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
                            for="exampleSelect"
                            sm={2}
                          >
                            N.sinh:
                          </Label>
                         
                          <Col >
                            <Input 
                                id="birthday" 
                                name="birthday" 
                                value={formDataPatient.birthday}
                                onChange={handleChange}
                                type="text"
                            >
                             
                            </Input>
                          </Col>
                        </FormGroup>
                     
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleSelectMulti"
                            sm={3}
                          >
                            Điện thoại:
                          </Label>
                          <Col  > 
                                <Input
                                id="phonenumber" 
                                name="phonenumber" 
                                value={formDataPatient.phonenumber}
                                onChange={handleChange}
                                placeholder=""
                                type="text"
                                />
                              </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleSelectMulti"
                            sm={3}
                          >
                            Địa chỉ:
                          </Label>
                              <Col  > 
                                <Input
                                id="addresworkplace" 
                                name="addresworkplace" 
                                value={formDataPatient.addresworkplace}
                                onChange={handleChange}
                                placeholder=""
                                type="text"
                                />
                              </Col>
                        </FormGroup>
                        </Col> 

                       
                        </Col> 
                        <Col md = {3} >
                         
                   
                       
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="examplePassword"
                            sm={4}
                          >
                            Nơi giới thiệu:
                          </Label>
                       
                          <Col>
                          <Input select value={formData.RegisterModel.placeIntrocode} onChange={handleChange}
                          id="nationNatycode"
                          name="nationNatycode"
                          type="select"
                        >
                          <option value=""></option>
                          {objects.map((option, index) => (
                                   <option key={index.id} value={option.code}>
                                   {option.code} - {option.name}
                                 </option>
                                ))}
                        </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleSelect"
                            sm={4}
                          >
                            Bảng giá:
                          </Label>
                         
                          <Col>
                          <Input select value= {formData.RegisterModel.pricecode} onChange={handleChange}
                          id="jobcode"
                          name="jobcode"
                          type="select"
                          placeholder='Chọn bảng giá'
                        >
                          {discounts.map((option, index) => (
                                  <option key={index.id} value={option.code}>
                                    {option.code} - {option.name}
                                  </option>
                                ))}
                        </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleSelectMulti"
                            sm={4}
                          >
                            Chiết khấu:
                          </Label>
                          <Col>
                          <Input select value= {formData.RegisterModel.pricecode} onChange={handleChange}
                          id="jobcode"
                          name="jobcode"
                          type="select"
                          placeholder='Chọn chiết khấu'
                        >
                          {discounts.map((option, index) => (
                                  <option key={index.id} value={option.code}>
                                    {option.code} - {option.name}
                                  </option>
                                ))}
                        </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleSelectMulti"
                            sm={4}
                          >
                            Công khám:
                          </Label>
                          <Col>
                          <Input select value= {formData.RegisterModel.pricecode} onChange={handleChange}
                          id="jobcode"
                          name="jobcode"
                          type="select"
                          placeholder='Chọn công khám'
                        >
                          {serExams.map((option, index) => (
                                  <option key={index.id} value={option.code}>
                                    {option.code} - {option.name}
                                  </option>
                                ))}
                        </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleSelectMulti"
                            sm={4}
                          >
                            Phòng khám:
                          </Label>
                          <Col>
                          <Input select value= {formData.RegisterModel.pricecode} onChange={handleChange}
                          id="jobcode"
                          name="jobcode"
                          type="select"
                          placeholder='Chọn phòng khám'
                        >
                          {docExams.map((option, index) => (
                                  <option key={index.id} value={option.code}>
                                    {option.code} - {option.name}
                                  </option>
                                ))}
                        </Input>
                          </Col>
                        </FormGroup>
                        
                        </Col>

                       
                        <Col md = {2} className="bg-light border">
                          <Form>
                             {/* <FormGroup row className="mb-2 mr-sm-2 mb-sm-1"> */}

                             <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label for="Đối tượng" sm={3}>
                            Đối tượng:
                          </Label>
                       
                          <Col>
                          <Input style={{width:'120px'}} select  value= {formData.RegisterModel.objectcode}  onChange={handleChange}
                          id="objectcode"
                          name="objectcode"
                          type="select"
                        >
                          <option value="">Chọn dân tộc</option>
                          {objects.map((option, index) => (
                                  <option key={index.id} value={option.code}>
                                     {option.code} -  {option.name}
                                  </option>
                                ))}
                               
                        </Input>
                          </Col>
                          <Col>
                          <Input  select  value= {formData.RegisterModel.objectcode}  onChange={handleChange}
                          id="objectcode"
                          name="objectcode"
                          type="checkbox"
                        > BHTN
                         
                               
                        </Input>
                          </Col>
                          <Col>
                          <Input select  value= {formData.RegisterModel.objectcode}  onChange={handleChange}
                          id="objectcode"
                          name="objectcode"
                          type="checkbox"
                        >Ưu tiên
                          
                        </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleEmail"
                            sm={3}
                          >
                            Số thẻ:
                          </Label>
                         
                         
                          <Col>
                          <Input
                                 id="email" 
                                 name="email" 
                                 value={formData.RegisterModel.discountcode}
                                 onChange={handleChange} 
                              placeholder=""
                              type="email"
                            />
                          
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="examplePassword"
                            sm={3}
                          >
                            Hạn thẻ:
                          </Label>
                          
                          <Col>
                          <Input
                                 id="email" 
                                 name="email" 
                                 value={formData.RegisterModel.discountcode}
                                 onChange={handleChange} 
                              placeholder=""
                              type="email"
                            />
                          </Col>
                          <Col>
                          <Input
                                 id="email" 
                                 name="email" 
                                 value={formData.RegisterModel.discountcode}
                                 onChange={handleChange} 
                              placeholder=""
                              type="email"
                            />
                          </Col>
                        </FormGroup>
                      
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleSelect"
                            sm={3}
                          >
                            ĐKKCBBĐ:
                          </Label>
                          
                          <Col >
                          <Input select value= {formData.RegisterModel.objectcode} onChange={handleChange}
                          id="objectcode"
                          name="objectcode"
                          type="select"
                        >
                          <option value="">Chọn phường xã </option>
                          {hospitals.map((option, index) => (
                                   <option key={index.id} value={option.code}>
                                    {option.code} - {option.name}
                                 </option>
                                ))}
                        </Input>
                            
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleSelectMulti"
                            sm={3}
                          >
                            Tuyến
                          </Label>
                          <Col sm={2}>
                          <Input 
                                id="objectcode" 
                                name="objectcode" 
                                value={formData.RegisterModel.objectcode}
                                onChange={handleChange}  
                                placeholder=""
                                type="text"
                                />
                          </Col>
                          <Label
                            for="exampleSelectMulti"
                            sm={3}
                          >
                            M.hưởng:
                          </Label>
                          <Col sm={2}>
                          <Input 
                                id="exampleEmail" 
                                name="email" 
                                placeholder=""
                                type="text"
                                />
                          </Col>
                          <Col >
                          <Input select  value={selectedDocExam} onChange={handleChange}
                          id="exampleSelect"
                          name="select"
                          type="checkbox"
                        >
                          <option value="">Chọn địa chỉ</option>
                          {discounts.map((option) => (
                                  <option key={option.id} value={option.code}>
                                    {option.name}
                                  </option>
                                  
                                ))}
                                 
                        </Input>
                        {/* <p>Selected options: {selectedPdw.join(', ')}</p> */}
                            
                          </Col>
                        </FormGroup>
                     
                          </Form>
                        </Col>

                       
                      </Row>
                      
                      
                     {/* Danh sách chờ khám ! */}
                       <Row style={{height:'40px'}}>
                       <Col  >
                       <Card>
                                <CardHeader>
                                    <CardTitle tag="h5">Danh sách chờ khám !</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
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
                                                  <Button style={{margin:'1px'}} key={index} onClick={() => handlePageChange(index + 1)}>
                                                    {index + 1}
                                                  </Button>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col  >
                       <Card>
                                <CardHeader>
                                    <CardTitle tag="h5">Danh sách chờ khám !</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
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
                                                  <Button style={{margin:'1px'}} key={index} onClick={() => handlePageChange(index + 1)}>
                                                    {index + 1}
                                                  </Button>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                     
                      </Row>
                      {/* Thông tin Nút chuc năng*/}
                <Row className="bg-light p-1">
                      
                        {/* <Form onSubmit={handleSubmit}> */}
                          {/* <Input  type="text"
                            value={inputValue}
                            onChange={handleInputChange}>
                          
                          </Input> */}
                         <div>
                          {/* <Button color="primary" outline style={{margin: '3px', width:'70px'}}>
                            Mới
                          </Button>
                         
                          <Button  type="submit" color="success" outline style={{margin: '3px' , width:'70px'}}>
                            Lưu
                          </Button>
                         
                          <Button color="danger" outline style={{margin: '3px' , width:'80px'}} >
                            Bỏ qua
                          </Button> */}

          <Button color="primary" onClick={handleSubmit} className="custom-button">Mới</Button>
          <Button color="primary" onClick={handleSubmit} className="custom-button">Lưu</Button>
          <Button color="secondary" onClick={handleSubmit} className="custom-button">Bỏ qua</Button>
          <Button color="secondary" onClick={handleSubmit} className="custom-button">Thoát</Button>
                          <PrintComponent/>
                          </div>
                          
                          {/* </Form> */}
                        
                </Row>
                </Form>
                </div>
            </>
        )
    }
export default RegisterCom;




