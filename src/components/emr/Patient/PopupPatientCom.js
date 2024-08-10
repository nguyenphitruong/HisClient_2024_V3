import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';

//import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import callApi from '../../../apis/callApi';
//import Modal from '../Modal/Modal.js';
import patientModel from '../../../models/emr/patient/PatientModel';
import patientHiModel from '../../../models/emr/patient/PatientHiModel';
import PrintComponent from '../../PrintReports/PrintComponent.js';
import Row from '../../../RowCus.js';
//import Col from '../../../ColumnCus.js';
import CustomModal from '../../Modal/CustomModal.js'
import RegisterModel from '../../../models/emr/RegisterModel';
import RegisterCom from '../../../components/emr/Register/RegisterCom.js';
import bHYTModel from '../../../models/emr/patient/BHYTModel';

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  FormText,
  Navbar
} from "reactstrap";
function Patient({ LstCachingCateShareLine, LstCachingCateHopital }) {

  // if(patientEditInfo != null)
  // {
  //console.log('nuuuuuuu:' + patientModel)
  // const patientEditInfoTemp = patientEditInfo;
  // console.log('patientEditInfoTemp:' + JSON.stringify(patientEditInfoTemp))
  // const[formData, setFormData] = useState({patientModel});
  // console.log('patientEditInfo:' + JSON.stringify(patientEditInfo))
  //}
  // const[formDataPatientFromReg, setFormDataPatientFromReg] = useState(i_patientModel
  // );
  const [formDataPatient, setFormDataPatient] = useState({ patientModel });
  const [dataPatientHi, setDataPatientHi] = useState(new patientHiModel());

  const [dataBHYT, setDataBHYT] = useState({ bHYTModel });
  // const[formDataPatient, setFormDataPatient] = useState({
  //   patientModel
  // });

  //console.log('formDataPatient:' + formDataPatient)


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const ethnics = LstCachingCateShareLine.filter(f => f.codeh === "NATION");
  //DM quốc tịch
  const nations = LstCachingCateShareLine.filter(f => f.codeh === "NATIONATY");
  //DM nghề nghiệp
  const jobs = LstCachingCateShareLine.filter(f => f.codeh === "JOB");
  //DM Tỉnh thành
  const provincials = LstCachingCateShareLine.filter(f => f.codeh === "CITY");
  //DM quận huyện
  const districtsfull = LstCachingCateShareLine.filter(f => f.codeh === "DISTRICT");
  const [districts, setDistricts] = useState([]);
  //DM phường xã
  const wardsfull = LstCachingCateShareLine.filter(f => f.codeh === "WARDS");
  const [wards, setWards] = useState([]);
  //Dm địa chỉ full    

  //DM KCBBD
  const hospitals = LstCachingCateHopital;
  //DM hình thức đến


  //1.Tạo model với các thuộc tính để biding
  // const[formData, setFormData] = useState({
  //   patientModel
  // });
  //2.Xử lý dữ ệu khi một thuộc tính có sự thay đổi
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("EVEN:" + JSON.stringify(event.target.name));
    setFormDataPatient({
      ...formDataPatient,
      [name]: value
    });
  };

  const handleChangeBHYT = (event) => {
    const { name, value } = event.target;
    console.log("EVEN:" + JSON.stringify(event.target.name));

    const dataPatientHiNew = { ...dataPatientHi };
    if (name === 'nohi') {
      dataPatientHiNew.setNohi(value);
    } else if (name === 'fromdate') {
      dataPatientHi.setFromdate(value);
    }
    setDataPatientHi(dataPatientHiNew);

    // setDataPatientHi({
    //     ...dataPatientHiNew,
    //     [name]: value
    // });
  };

  //1.Tạo model với các thuộc tính để biding
  const [formGetBHYT, setFormGetBHYT] = useState({
    OR: '',
  });
  const handleChangeQR = (event) => {
    const { name, value } = event.target;
    //Cật nhật trạng thái của model dữ liệu với giá trị mới
    setFormGetBHYT({
      ...formGetBHYT,
      [name]: value
    });
  };

  const handleKeyDownQR = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      console.log('Input value:', event.target.value);
      GetCheckExpertiseBHYT(event.target.value);

    }
  };
  const dataPDWTemp = [];
  const [filteredDataW, setfilteredDataW] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [dataAddress, setDataAddress] = useState([]);

  const [pdwAddress, setPdwAddress] = useState('');
  const SetComboAddressFull = ({ hotkeys }) => {

    if (hotkeys.length > 0) {
      //const lstTem = a.filter(f=>f.hotkey === hotkeys);
      const lstTem = null;
      setDataAddress(lstTem);

      console.log("addfull:" + lstTem);

    }
  }

  const handleKeyDownAdd = (event) => {
    if (event.key === 'Enter') {
      console.log("Enter:" + searchKeyword);
      const dataWTemp = wardsfull.filter(w =>
        w.acro.toUpperCase().includes(searchKeyword.toUpperCase()));

      //console.log("dataWTemp:" +  JSON.stringify(dataWTemp) );

      if (dataWTemp.length > 0) {
        dataWTemp.forEach(w => {
          const dataDTemp = districtsfull.filter(d =>
            d.code === w.parent);
          //console.log("dataDTemp:" +  JSON.stringify(filteredDataD) );
          dataDTemp.forEach(d => {

            const dataPTemp = provincials.filter(p =>
              p.code === d.parent);
            dataPTemp.forEach(p => {
              //console.log("dataPTemp:" + JSON.stringify(dataPTemp));
              dataPDWTemp.push({
                pcode: p.code,
                pname: p.name,
                dcode: d.code,
                dname: d.name,
                wcode: w.code,
                wname: w.name,
                pdwcode: p.code + '.' + d.code + '.' + w.code,
                wdpname: w.name + ' ,' + d.name + ' ,' + p.name,
                acro: w.acro,
              })
              setfilteredDataW(dataPDWTemp);
              console.log("filteredDataW:" + JSON.stringify(filteredDataW));

              console.log("dataPDWTemp:" + JSON.stringify(dataPDWTemp));


            })
          })
        })
      }
    }
  };

  //Xử lý sự kiện trên form được gửi đi
  const handleSubmit = (event) => {
    event.preventDefault();
    //Thực hien các thao tác liên quan đến việc gửi dữ liệu
    SaveRegister()
    console.log("Dữ liệu được gửi đi: ", formDataPatient);
    // <RegisterCom patientModel={formDataPatient}></RegisterCom>
    // console.log("formDataPatient send from modal: ", formDataPatient);
    setShow(false)
  };
  useEffect(() => {
    //GetListWaitExams();
  }, []);
  async function GetListWaitExams() {
    try {
      let datatemp = await callApi.GetAll1();
      const arr = []
      Object.keys(datatemp).forEach(key => arr.push({ name: key, value: datatemp[key] }))
      let dataPase = arr[2].value;
      console.log('Get List dataPase menu', dataPase);
      setData(dataPase);

    } catch (error) {
      console.log('Get list field', error)
    }
  }
  async function SaveRegister() {
    try {
      let url = '/Patient';

      if (dataPatientHi != null) {
        formDataPatient.patientHi = dataPatientHi;
      }

      const jsonString = JSON.stringify(formDataPatient);
      console.log('Json lưu', jsonString);
      alert(jsonString);
      let datatemp = await callApi.Post(url, jsonString);

      const arr = []
      Object.keys(datatemp).forEach(key => arr.push({ name: key, value: datatemp[key] }))
      let dataPase = arr[2].value;
      console.log('Lưu thành công', dataPase);
      //setData(dataPase);

    } catch (error) {
      console.log('Lưu lỗi', error)
    }
  }
  async function GetCheckExpertiseBHYT(bhytGet) {
    try {
      let url = '/Patient/CheckExpertiseBHYT';
      console.log('Json lưu', bhytGet);
      alert(bhytGet);

      let datatemp = await callApi.Post(url, bhytGet);
      const arr = []
      Object.keys(datatemp).forEach(key => arr.push({ name: key, value: datatemp[key] }))
      let dataPase = arr[2].value;
      console.log('Data BHYT dataPase:', JSON.stringify(dataPase));
      setDataBHYT(dataPase);

      //setDataPatientHi(PatientHiTem);

      formDataPatient.name = dataBHYT.hoTen;
      formDataPatient.birthday = dataBHYT.ngaySinh;
      formDataPatient.sexcode = dataBHYT.gioiTinh;
      formDataPatient.addresworkplace = dataBHYT.diaChi;

      //console.log('Data dataPatientHi Get:' + dataBHYT);



      dataPatientHi.nohi = dataBHYT.mathe;
      dataPatientHi.fromdate = dataBHYT.gtTheTu;
      dataPatientHi.totate = dataBHYT.gtTheDen;
      dataPatientHi.gland = dataBHYT.maDKBD;

      //setDataPatientHi(dataPatientHiTemp);

      console.log('Data dataPatientHiTemp:' + JSON.stringify(dataPatientHi));



    } catch (error) {
      console.log('Lưu lỗi', error)
    }
  }
  return (

    <div >
      <Form onSubmit={handleSubmit}>
        <Button color="primary" onClick={handleShow}>Thêm</Button>
        <CustomModal show={show} onHide={handleClose} width="1400px">
          <Modal.Header closeButton className='custom-modal-header'>
            <Modal.Title>Thông tinh hành chính bệnh nhân!</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <div className="contentcomponentpopup">
              <Grid container spacing={2}>
                {/* Thông tin Hành chính*/}

                {/* <Col size='120' > */}
                <Grid item xs={12} sm={4}>
                  {/* <Paper style={{ height: 280, backgroundColor: '#d9eef5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}> */}

                  <Col>
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1"  >
                      {/* <Label className="custom-label"  for="patcode" sm={3} >Mã BN:</Label> */}
                      <Label for="patcode" sm={3} >Mã BN:</Label>
                      <Col >
                        <Input
                          id="patcode"
                          name="patcode"
                          //value={formDataPatient.patientModel.patcode}
                          value={formDataPatient.patcode}
                          onChange={handleChange}
                          placeholder=""
                          type="text"
                        />


                      </Col>
                      <Label for="patcode" sm={1} >QR:</Label>
                      <Col size='35px'>
                        <Input
                          id="QR"
                          name="QR"
                          value={formGetBHYT.QR}
                          onChange={handleChangeQR}
                          onKeyDown={handleKeyDownQR}
                          placeholder=""
                          type="text"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1" >
                      <Label for="examplePassword" sm={3}> Họ tên:</Label>
                      <Col >
                        <Input
                          id="id"
                          name="name"
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
                    </FormGroup>
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                      <Label
                        for="exampleSelect"
                        sm={3}
                      >
                        Ngày sinh:
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
                      <Col>
                        <Input
                          id="addresworkplace"
                          name="addresworkplace"
                          value={formDataPatient.addresworkplace}
                          onChange={handleChange}
                          type="text"
                        />
                      </Col>

                      <Col size='10px'>
                        <Input
                          type="text"
                          value={searchKeyword}
                          onChange={e => setSearchKeyword(e.target.value)}
                          onKeyDown={handleKeyDownAdd}
                          placeholder="Viết tắt"
                        />
                      </Col>

                    </FormGroup>
                  </Col>

                  {/* </Paper> */}
                </Grid>

                <Grid item xs={12} sm={4}>
                  {/* <Paper style={{ height: 280, backgroundColor: '#d9eef5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}> */}

                  <Col >
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                      <Label for="Dân tộc" sm={4}>
                        Dân tộc:
                      </Label>

                      <Col>
                        <Input select value={formDataPatient.nationcode} onChange={handleChange}
                          id="nationcode"
                          name="nationcode"
                          type="select"
                        >
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
                        <Input select value={formDataPatient.nationNatycode} onChange={handleChange}
                          id="nationNatycode"
                          name="nationNatycode"
                          type="select"
                        >
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
                        <Input select value={formDataPatient.jobcode} onChange={handleChange}
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
                          value={formDataPatient.email}
                          onChange={handleChange}
                          placeholder=""
                          type="email"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                      <Label
                        for="exampleSelectMulti"
                        sm={4}
                      >
                        CCCD:
                      </Label>
                      <Col>
                        <Input
                          id="email"
                          name="email"
                          value={formDataPatient.email}
                          onChange={handleChange}
                          placeholder=""
                          type="email"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                      <Col>
                        <Input select value={pdwAddress} onChange={handleChange}
                          id="pdwcode"
                          name="pdwcode"
                          type="select"
                          placeholder=''
                        >
                          {filteredDataW.map((option, index) => (
                            <option key={index.pdwcode} value={option.pdwcode}>
                              {/* {option.pdwcode} -  */}
                              {option.wdpname}
                            </option>
                          ))}
                        </Input>
                      </Col>
                    </FormGroup>
                  </Col>

                  {/* </Paper> */}
                </Grid>

                <Grid item xs={12} sm={4}>
                  {/* <Paper style={{ height: 280, backgroundColor: '#d9eef5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}> */}

                  <Col >
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                      <Label for="Số thẻ" sm={3}>
                        Số thẻ:
                      </Label>

                      <Col>
                        <Input
                          id="nohi"
                          name="nohi"
                          value={dataPatientHi.nohi}
                          // value={dataBHYT.maThe}

                          onChange={handleChange}
                          placeholder=" "
                          type="text"
                        />

                      </Col>
                    </FormGroup>
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                      <Label
                        for="examplePassword"
                        sm={3}
                      >
                        Từ ngày:
                      </Label>

                      <Col>
                        <Input
                          id="fromdate"
                          name="fromdate"
                          value={dataPatientHi.fromdate}
                          onChange={handleChangeBHYT}
                          placeholder=" "
                          type="date"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                      <Label
                        for="examplePassword"
                        sm={3}
                      >
                        Đến ngày:
                      </Label>

                      <Col>
                        <Input
                          id="totate"
                          name="totate"
                          value={dataPatientHi.totate}
                          onChange={handleChangeBHYT}
                          placeholder=" "
                          type="date"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                      <Label
                        for="exampleSelect"
                        sm={3}
                      >
                        KCBBĐ:
                      </Label>

                      <Col>
                        <Input select value={formDataPatient.jobcode}
                          onChange={handleChange}
                          id="jobcode"
                          name="jobcode"
                          type="select"
                          placeholder=''
                        >
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
                        Tỉ lệ:
                      </Label>
                      <Col>
                        <Input
                          id="email"
                          name="email"
                          value={dataPatientHi.ratehi}
                          onChange={handleChangeBHYT}
                          placeholder=""
                          type="email"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="mb-2 mr-sm-2 mb-sm-1">
                      <Label
                        for="exampleSelectMulti"
                        sm={3}
                      >
                        Địa chỉ thẻ:
                      </Label>
                      <Col>
                        <Input
                          id="email"
                          name="email"
                          value={dataPatientHi.makv}
                          onChange={handleChangeBHYT}
                          placeholder=""
                          type="email"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  {/* </Paper> */}

                </Grid>
                {/* Thông tin Nút chuc năng*/}

                {/* <Grid item xs={12}>
        <Paper style={{ height: 50, backgroundColor: 'lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Footer
        </Paper>
                      </Grid> */}

              </Grid>
            </div>
            {/* </Modal> */}
          </Modal.Body>
          <Modal.Footer >
            <Button color="primary" onClick={handleSubmit} className="custom-button">Mới</Button>
            <Button color="primary" onClick={handleSubmit} className="custom-button">Lưu</Button>
            <Button color="secondary" onClick={handleClose} className="custom-button">Bỏ qua</Button>
            <Button color="secondary" onClick={handleClose} className="custom-button">Thoát</Button>
          </Modal.Footer>
        </CustomModal>
      </Form>

    </div>

  )
};
export default Patient;




