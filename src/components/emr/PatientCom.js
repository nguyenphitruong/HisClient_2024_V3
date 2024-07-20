import React, { useState, useEffect } from 'react';
//import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import callApi from '../../apis/callApi';
//import Modal from '../Modal/Modal.js';
import patientModel from '../../models/emr/patient/PatientModel';
import patientHiModel from '../../models/emr/patient/PatientHiModel';
import PrintComponent from '../PrintReports/PrintComponent.js';
import Row from '../../RowCus.js';
import Col from '../../ColumnCus.js';

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
function Patient ({ LstCachingCateShareLine}) {

  const CustomModal = styled(Modal)`
  .modal-dialog {
    max-width: ${({ width }) => width || '500px'};
    
  }
`;
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

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
  const handleChange_test = (event) => {
      const { name, value } = event.target;
      //Cật nhật trạng thái của model dữ liệu với giá trị mới
      setFormData({
          ...formData,
          [name]: value
      });
  };
  const ethnics = LstCachingCateShareLine.filter(f=>f.codeh === "NATION");
  const [selectedEthnic, setSelectedEthnic] = useState();
  //console.log("ethnics:" + ethnics);


  const handleChangeEthnic = (e) => {
    setSelectedEthnic(e.target.value);
    const { name, value } = setSelectedEthnic(name ,e.target.value);
    setFormData({
      ...formData,[name]: value
  });

  };
   //DM quốc tịch
   const nations = LstCachingCateShareLine.filter(f=>f.codeh === "NATIONATY");
   const [selectedNation, setSelectedNation] = useState();
   const handleChangeNation = (e) => {
     setSelectedNation(e.target.value);
     const { name, value } = selectedNation;
      //Cật nhật trạng thái của model dữ liệu với giá trị mới
      setFormData({
          ...formData,
          [name]: value
      });
   };
    //DM nghề nghiệp
    const jobs = LstCachingCateShareLine.filter(f=>f.codeh === "JOB");
     const [selectedJob, setSelectedJob] = useState();
     const handleChangeJob = (e) => {
       setSelectedJob(e.target.value);

       const { name, value } = selectedJob;
      //Cật nhật trạng thái của model dữ liệu với giá trị mới
      setFormData({
          ...formData,
          [name]: value
      });
     };
  
     //DM Tỉnh thành
     const provincials = LstCachingCateShareLine.filter(f=>f.codeh === "CITY");
  const [selectedProvincial, setSelectedProvincial] = useState();
  const handleChangeProvincial = (e) => {
    setSelectedProvincial(e.target.value);
    console.log("selectedProvincial:" +e.target.value );
    if(e.target.value.length>0)
    {
      const lstTem = [];
      districtsfull.forEach(f => {
          if(f.parent === e.target.value)
          {
             lstTem.push({...f})
          }
      });
      setDistricts(lstTem);

      //console.log("Tỉnh thành:" +selectedProvincial);
      const { name, value } = e.target.value;
      //Cật nhật trạng thái của model dữ liệu với giá trị mới
      setFormData({
          ...formData,
          [name]: value
      });
  };
};
 
     //DM quận huyện
     const districtsfull = LstCachingCateShareLine.filter(f=>f.codeh === "DISTRICT");
     //const districts = [];
     const [districts, setDistricts]  = useState([]);

     console.log("districts:" + districts)
     const [selectedDistrict, setSelectedDistrict] = useState();

     const handleChangeDistrict = (e) => {
       setSelectedDistrict(e.target.value);

       //console.log("selectedProvincial:" +e.target.value );
    if(e.target.value.length>0)
    {
      const lstTem = [];
      wardsfull.forEach(f => {
          if(f.parent === e.target.value)
          {
             lstTem.push({...f})
          }
      });
      setWards(lstTem);

      //Cật nhật trạng thái của model dữ liệu với giá trị mới
      const { name, value } = e.target.value;
      setFormData({
          ...formData,
          [name]: value
      });
  };
     };
     //DM phường xã
     const wardsfull = LstCachingCateShareLine.filter(f=>f.codeh === "WARDS");
     const [wards, setWards]  = useState([]);
     const [selectedWard, setSelectedWard] = useState();
     
     const handleChangeWard = (e) => {
       setSelectedWard(e.target.value);

       const { name, value } = e.target.value;
      //Cật nhật trạng thái của model dữ liệu với giá trị mới
      setFormData({
          ...formData,
          [name]: value
      });
     };

      //DM phường xã, quận huyện, tỉnh thành
      
        const pdws = [
        {
          id: 1,
          code: "code2",
          name: "Name 01",
        },
        {
          id: 2,
          code: "code2",
          name: "Name 02",
          
        },
        {
          id: 3,
          code: "code2",
          name: "Name 03",
          
        }
        ];
      const [selectedPdw, setSelectedPdw] = useState('');
      const handleChangePdw = (e) => {
         setSelectedPdw(e.target.value);
        //const selectedValues  = Array.from(e.target.selectedPdw, option => option.value);
        //setSelectedPdw(selectedValues);
         
      };

     //DM đối tượng khám
     const objects = LstCachingCateShareLine.filter(f=>f.codeh === "PROVIN");
     const [selectedObject, setSelectedObject] = useState('');
     const handleChangeObject = (e) => {
       setSelectedObject(e.target.value);
     };
     //DM KCBBD
     const hospitals = LstCachingCateShareLine.filter(f=>f.codeh === "PROVIN");
     const [selectedHospital, setSelectedHospital] = useState('');
     const handleChangeHospital = (e) => {
       setSelectedJob(e.target.value);
     };
      //DM hình thức đến
      const formcos = LstCachingCateShareLine.filter(f=>f.codeh === "PROVIN");
      const [selectedFormco, setSelectedFormco] = useState('');
      const handleChangeFormco = (e) => {
        setSelectedFormco(e.target.value);
      };
     //DM đối tượng ưu tiên
     const priorityobjects = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     const [selectedPriorityObject, setSelectedPriorityObject] = useState('');
     const handleChangePriorityObject = (e) => {
       setSelectedPriorityObject(e.target.value);
     };
     
     //DM thanh toán kèm theo
     const payattachts = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     const [selectedPayattacht, setSelectedPayattacht] = useState('');
     const handleChangePayattacht = (e) => {
       setSelectedPayattacht(e.target.value);
     };
     //DM chiết khấu
     const discounts = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     const [selectedDiscount, setSelectedDiscount] = useState('');
     const handleChangeDiscount = (e) => {
       setSelectedDiscount(e.target.value);
     };

     //DM Dịch vụ khám
     const serExams = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     const [selectedSerExam, setSelectedSerExam] = useState('');
     const handleChangeSerExam = (e) => {
       setSelectedSerExam(e.target.value);
     };

     //DM BS khám
     const docExams = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
     const [selectedDocExam, setSelectedDocExam] = useState('');
     const handleChangeDocExam = (e) => {
       setSelectedDocExam(e.target.value);
     };

    //1.Tạo model với các thuộc tính để biding
    // const[formData, setFormData] = useState({
    //   username:'',
    //   email:''
    // });
    //patientModel.patcode = 'Ma bn';
    //patientModel.fullname = 'Họ tên';

    const[formData, setFormData] = useState({
      patientModel
    });

    
  //2.Xử lý dữ ệu khi một thuộc tính có sự thay đổi
  const handleChange = (event) => {
      const { name, value } = event.target;
      console.log("EVEN:" + JSON.stringify(event.target.name)) ; 
      //Cật nhật trạng thái của model dữ liệu với giá trị mới

      if(event.target.name === "citycode"&& event.target.length>0)
      {
        const lstTem = [];
      districtsfull.forEach(f => {
          if(f.parent === event.target.value)
          {
             lstTem.push({...f})
          }
      });
      setDistricts(lstTem);
      }
      if(event.target.name === "districtcode"&& event.target.length>0)
      {
        const lstTem = [];
      wardsfull.forEach(f => {
          if(f.parent === event.target.value)
          {
             lstTem.push({...f})
          }
      });
      setWards(lstTem);
      }
      setFormData({
          ...formData,
          [name]: value
      });
      // setFormData({
      //     ...formData, 
      // });
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


  useEffect(() => {
    GetListWaitExams();
}, []);
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
               <div >
              
     

      <Button color="primary" onClick={handleShow}>...</Button>
      <CustomModal show={show} onHide={handleClose} width="1200px" h>
      <Modal.Header closeButton className='custom-modal-header'>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body >

{/* <button onClick={openModal}>Open Modal</button>
      <Modal show={showModal} onClose={closeModal} width="700px"> */}
      
     
                <div className="contentcomponent">
                <Form onSubmit={handleSubmit}>
                
                   {/* Thông tin Hành chính*/}
                      <Row className="bg-light p-2">
                      <Col>
                     
                            <FormGroup row  className="mb-2 mr-sm-2 mb-sm-1"  >
                              <Label className="custom-label"  for="patcode" sm={3} >Mã BN:</Label>
                              <Col className="mb-2 mr-sm-2 mb-sm-1" >
                                < Input  className="custom-input"
                                id="patcode" 
                                name="patcode" 
                                value={formData.patientModel.patcode}
                                onChange={handleChange} 
                                placeholder=""
                                
                                type="text"
                                />
                              </Col>
                              
                            </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                          <Label
                            for="examplePassword"
                            sm={3}
                          >
                            Họ tên:
                          </Label>
                          <Col >
                            <Input className='cus_Input'
                               id="id" 
                               name="fullname" 
                               value={formData.patientModel.fullname}
                               onChange={handleChange} 
                              placeholder=" "
                              type="text"
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label for="exampleSelect" sm={3}> Giới tính:</Label>
                          <Col >
                            <Input className='cus_Input'
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
                            sm={3}
                          >
                            Ngày sinh:
                          </Label>
                          <Col >
                            <Input className='cus_Input'
                                id="birthday" 
                                name="birthday" 
                                value={formData.patientModel.birthday}
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
                                <Input className='cus_Input'
                                id="phonenumber" 
                                name="phonenumber" 
                                value={formData.patientModel.phonenumber}
                                onChange={handleChange}
                                placeholder=""
                                type="text"
                                />
                              </Col>
                        </FormGroup>
                       
                        </Col> 
                        <Col md = {3} >
                         
                   
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label for="Dân tộc" sm={4}>
                            Dân tộc:
                          </Label>
                       
                          <Col>
                          <Input select  value= {formData.patientModel.nationcode}  onChange={handleChange}
                          id="nationcode"
                          name="nationcode"
                          type="select"
                        >
                          <option value="">Chọn dân tộc</option>
                          {ethnics.map((option, index) => (
                                  <option key={index.id} value={option.code}>
                                     {option.code} -  {option.name}
                                  </option>
                                ))}
                               
                        </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="examplePassword"
                            sm={4}
                          >
                            Quốc tịch:
                          </Label>
                       
                          <Col>
                          <Input select value={formData.patientModel.nationNatycode} onChange={handleChange}
                          id="nationNatycode"
                          name="nationNatycode"
                          type="select"
                        >
                          <option value="">Chọn quốc tịch</option>
                          {nations.map((option, index) => (
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
                            Nghề nghiệp:
                          </Label>
                         
                          <Col>
                          <Input select value= {formData.patientModel.jobcode} onChange={handleChange}
                          id="jobcode"
                          name="jobcode"
                          type="select"
                          placeholder='Chọn nghề nghiệp'
                        >
                          {jobs.map((option, index) => (
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
                            Email:
                          </Label>
                          <Col>
                          <Input
                                 id="email" 
                                 name="email" 
                                 value={formData.patientModel.email}
                                 onChange={handleChange} 
                              placeholder=""
                              type="email"
                            />
                          </Col>
                        </FormGroup>
                        
                        </Col>

                        <Col md = {2} className="bg-light border">
                          <Form>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="exampleEmail"
                            sm={3}
                          >
                            Tỉnh thành:
                          </Label>
                         
                         
                          <Col>
                          <Input select value={selectedProvincial} onChange={handleChange}
                          id="code"
                          name="citycode"
                          type="select"
                          placeholder=""
                          
                        >
                          <option value="">Chọn tỉnh thành</option>
                          {provincials.map((option, index) => (
                                   <option key={index.id} value={option.code}>
                                 {option.code} - {option.name}
                                 </option>
                                ))}
                        </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                          <Label
                            for="examplePassword"
                            sm={3}
                          >
                            Quận huyện:
                          </Label>
                          
                          <Col>
                          <Input select value={selectedDistrict} onChange={handleChange}
                          id="exampleSelect"
                          name="districtcode"
                          
                          type="select"
                        >
                          <option value="">Chọn quận huyện</option>
                          {districts.map((option, index) => (
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
                            sm={3}
                          >
                            Phường xã:
                          </Label>
                          
                          <Col >
                          <Input select value= {formData.patientModel.wardscode} onChange={handleChange}
                          id="wardscode"
                          name="wardscode"
                          type="select"
                        >
                          <option value="">Chọn phường xã </option>
                          {wards.map((option, index) => (
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
                            Số nhà:
                          </Label>
                          <Col sm={2}>
                          <Input 
                                id="village" 
                                name="village" 
                                value={formData.patientModel.village}
                                onChange={handleChange}  
                                placeholder=""
                                type="text"
                                />
                          </Col>
                          <Col sm={2}>
                          <Input 
                                id="exampleEmail" 
                                name="email" 
                                placeholder=""
                                type="text"
                                />
                          </Col>
                          <Col >
                          <Input select  value={selectedPdw} onChange={handleChangePdw}
                          id="exampleSelect"
                          name="select"
                          type="select"
                        >
                          <option value="">Chọn địa chỉ</option>
                          {pdws.map((option) => (
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
                       {/* <Row style={{height:'100'}}>
                       <Col  >
                       <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">Danh sách chờ khám !</CardTitle>
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
                     
                      </Row> */}
                      {/* Thông tin Nút chuc năng*/}
                <Row className="bg-light p-1">
                      
                        {/* <Form onSubmit={handleSubmit}> */}
                          {/* <Input  type="text"
                            value={inputValue}
                            onChange={handleInputChange}>
                          
                          </Input> */}
                         <div>
                          <Button color="primary" outline style={{margin: '3px', width:'70px'}}>
                            Mới
                          </Button>
                         
                          <Button  type="submit" color="success" outline style={{margin: '3px' , width:'70px'}}>
                            Lưu
                          </Button>
                         
                          <Button color="danger" outline style={{margin: '3px' , width:'80px'}} >
                            Bỏ qua
                          </Button>
                          <PrintComponent/>
                          </div>
                          
                          {/* </Form> */}
                        
                </Row>
                
                </Form>
                </div> 
                {/* </Modal> */}
        </Modal.Body>
        <Modal.Footer >
          <Button color="primary" onClick={handleClose} className="custom-button">Do Something</Button>
          <Button color="secondary" onClick={handleClose} className="custom-button">Cancel</Button>
        </Modal.Footer>
      </CustomModal>
    </div>
            </>
        )
    }
export default Patient;




