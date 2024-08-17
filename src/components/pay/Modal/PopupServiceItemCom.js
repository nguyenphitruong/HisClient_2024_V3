import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import callApi from '../../../apis/callApi';
import { FaChevronDown, FaChevronUp, FaCheckSquare, FaSquare } from 'react-icons/fa';
import CustomModal from '../../Modal/CustomModal.js'

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
    Navbar,
    Row,
} from "reactstrap";
function PopupServiceItemCom({ lstCachingCateSevice }) {


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
    const handleSubmit = (event) => {
        event.preventDefault();
        //Thực hien các thao tác liên quan đến việc gửi dữ liệu
        //SaveRegister()
        //console.log("Dữ liệu được gửi đi: ", formDataPatient);
        // <RegisterCom patientModel={formDataPatient}></RegisterCom>
        // console.log("formDataPatient send from modal: ", formDataPatient);
        setShow(false)
    };

    useEffect(() => {
        //RefreshList();
    }, []);

    const TreeTable = ({ data }) => {
        const [filter, setFilter] = useState('');
        const [selected, setSelected] = useState([]);
        const [expanded, setExpanded] = useState({});

        const [isChecked, setIsChecked] = useState(false);

        const toggleCheck = () => {
            setIsChecked(!isChecked);
        };

        const handleSelect = (id) => {
            setSelected((prevSelected) =>
                prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]
            );
        };
        const handleExpand = (id) => {
            setExpanded((prevExpanded) => ({
                ...prevExpanded,
                [id]: !prevExpanded[id],
            }));
        };

        const filterData = (data) => {
            if (!filter) return data;

            return data
                .map((item) => {
                    if (item.name.toLowerCase().includes(filter.toLowerCase())) {
                        return item;
                    }

                    if (item.children) {
                        const filteredChildren = filterData(item.children);
                        if (filteredChildren.length > 0) {
                            return { ...item, children: filteredChildren };
                        }
                    }
                    return null;
                })
                .filter((item) => item !== null);
        };

        const filteredData = filterData(data);

        const renderRows = (data, level = 0) => {
            return data.map((item) => (
                <React.Fragment key={item.id}>
                    <tr>
                        <td style={{ width: '5px', paddingLeft: `${level * 20}px`, margin: '2px' }}>
                            {
                                item.children && (
                                    <span onClick={() => handleExpand(item.id)} style={{ cursor: 'pointer' }}>
                                        {expanded[item.id] ? <FaChevronUp className="chevron-icon up-icon" /> : <FaChevronDown className="chevron-icon down-icon" />}
                                    </span>
                                )}{' '}

                            {/* <div className="check-container" onClick={toggleCheck}>
                                <FaCheckSquare className={`check-icon ${isChecked ? 'checked' : 'unchecked'}`} />
                                <span>{isChecked ? 'Checked' : 'Unchecked'}</span>
                            </div> */}
                            <span onClick={() => handleSelect(item.id)} style={{ cursor: 'pointer' }}>
                                {selected.includes(item.id) ?
                                    // <FaCheckSquare className={`check-icon ${isChecked ? 'checked' : 'unchecked'}`} /> :
                                    <FaCheckSquare className='check-icon' /> :
                                    <FaSquare />}
                            </span>{' '}
                        </td>
                        <td >{item.code}</td>
                        <td >{item.name}</td>
                        <td >{item.unitname}</td>
                        <td >{item.serprice}</td>
                        <td >{item.hiprice}</td>
                        <td >{item.ishi}</td>
                    </tr>
                    {expanded[item.id] && item.children && renderRows(item.children, level + 1)}
                </React.Fragment>
            ));
        };

        return (

            <Grid container spacing={1}>
                {/* Thông tin Hành chính*/}

                {/* <Col size='120' > */}
                <Grid item xs={12}>
                    <Input style={{ marginLeft: '10px', marginBottom: '10px' }}
                        type="text"
                        placeholder="Tìm nhanh..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    {/* <Table striped bordered hover style={{ marginLeft: '10px' }} >

                        <tr style={{ background: '#417dec', color: 'whitesmoke', width: '10px', alignItems: 'center'}}>
                            <td style={{ background: '#417dec', color: 'whitesmoke', width: '10px', alignItems: 'center'}}>Chọn</td>
                            <td style={{ background: '#417dec', color: 'whitesmoke', width: '30px', alignItems: 'center' }}>Mã DV</td>
                            <td style={{ background: '#417dec', color: 'whitesmoke', width: '150px', alignItems: 'center' }}>Tên DV</td>
                            <td style={{ background: '#417dec', color: 'whitesmoke', width: '30px', alignItems: 'center' }}>ĐVT</td>
                            <td style={{ background: '#417dec', color: 'whitesmoke', width: '30px', alignItems: 'center' }}>Giá DV</td>
                            <td style={{ background: '#417dec', color: 'whitesmoke', width: '30px', alignItems: 'center' }}>Giá BHYT</td>
                            <td style={{ background: '#417dec', color: 'whitesmoke', width: '10px', alignItems: 'center' }}>BHYT</td>
                        </tr>

                    </Table> */}
                </Grid>

                <Grid item xs={12}>
                    {/* <div className="contentcomponentpopup-cateservice"> */}
                    <div className="table-container">
                        <Table >
                            <thead >
                                <tr >
                                    <th style={{ background: '#417dec', color: 'whitesmoke' }}>Chọn</th>
                                    <th style={{ background: '#417dec', color: 'whitesmoke' }}>Mã DV</th>
                                    <th style={{ background: '#417dec', color: 'whitesmoke' }}>Tên DV</th>
                                    <th style={{ background: '#417dec', color: 'whitesmoke' }}>ĐVT</th>
                                    <th style={{ background: '#417dec', color: 'whitesmoke' }}>Giá DV</th>
                                    <th style={{ background: '#417dec', color: 'whitesmoke' }}>Giá BHYT</th>
                                    <th style={{ background: '#417dec', color: 'whitesmoke' }}>BHYT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderRows(filteredData)}
                            </tbody>
                        </Table>
                    </div>

                </Grid>
            </Grid>
        );
    };

    return (

        <div >
            <Form onSubmit={handleSubmit}>
                <Button color="primary" outline onClick={handleShow}>F7.CLS</Button>
                <CustomModal show={show} onHide={handleClose} width="1200px">
                    <Modal.Header closeButton className='custom-modal-header'>
                        <Modal.Title>Danh sách dịch vụ kỹ thuật!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div>
                            <TreeTable data={lstCachingCateSevice} />
                        </div>
                        {/* </Modal> */}
                    </Modal.Body>
                    <Modal.Footer >
                        {/* <Button color="primary" onClick={handleSubmit} className="custom-button">Mới</Button> */}
                        <Button color="primary" onClick={handleSubmit} className="custom-button">Chọn</Button>
                        {/* <Button color="secondary" onClick={handleClose} className="custom-button">Bỏ qua</Button> */}
                        <Button color="secondary" onClick={handleClose} className="custom-button">Thoát</Button>
                    </Modal.Footer>
                </CustomModal>
            </Form>
        </div>

    )
};
export default PopupServiceItemCom;




