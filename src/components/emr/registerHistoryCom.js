
import React, { useState, useEffect } from 'react';
import callApi from '../../apis/callApi';

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

const RegisterHistoryCom = () =>  {
    const itemsPerPage = 15; // Number of items per page
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

    useEffect(() => {
    //JoneData();
    RefreshList();
  }, []);
            async function RefreshList()
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

        return (
            <>
                <div style={{margin: '10px', fontSize: '14px'}}>
                     {/* Danh sách chờ khám ! */}
                       <Row style={{height:'10px'}}>
                        <Col md = {12}>
                        <Card>
                                {/* <CardHeader>
                                    <CardTitle tag="h4">Dịch vụ đăng ký!</CardTitle>
                                </CardHeader> */}
                                <CardBody>
                                    <Table Striped style={{maxHeight:'400px', minWidth:'1600px'}} >
                                        <thead >
                                            <tr >
                                                <th>Mã </th>
                                                <th>Tên </th>
                                                <th>SL </th>
                                                <th>ĐVT </th>
                                                <th>BHYT </th>
                                                <th>Giá DV</th>
                                                <th>Giá BHYT </th>
                                                <th>Tỉ lệ </th>
                                                <th>Quỹ BHYT </th>
                                                <th>Cùng chi trả </th>
                                                <th>Tự trả </th>
                                                <th>% Chiết khấu </th>
                                                <th>Chiết khấu </th>
                                                <th>Nguồn khác </th>
                                                <th>Phải thu </th>
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
                      
                </div>
            </>
        )
}

export default RegisterHistoryCom;




