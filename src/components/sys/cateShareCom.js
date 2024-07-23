
import React, {useContext, useState, useEffect} from 'react';
import callApi from '../../apis/callApi';
//import { DataContext } from '../../contexts/ShareContext/DataContext';

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

    function CateShareCom({ LstCachingCateShareHeader,LstCachingCateShareLine,LstCachingCateICD10,LstCachingCateHopital}) {

    const itemsPerPage = 15; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    //const [data, setData] = useState([LstCachingCateShareLine]);

   // console.log("DataPage:" +LstCachingCateShareLine )
    // Calculate total number of pages
    const totalPages = Math.ceil(LstCachingCateShareLine.length / itemsPerPage);
    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // Data to be displayed on current page
    const currentPageData = LstCachingCateShareLine.slice(startIndex, endIndex);
    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
    //JoneData();
    //RefreshList();
  }, []);
        return (
      
                <div className="contentcomponent">

                     {/* Danh sách chờ khám ! */}
                       <Row style={{height:'10px'}}>
                        <Col md = {12}>
                                    <Table Striped style={{maxHeight:'400px', minWidth:'1600px'}} >
                                        <thead >
                                            <tr >
                                                <th style={{width:'300px'}}>ID </th>
                                                <th >Mã </th>
                                                <th >Tên </th>
                                                <th>Phân hệ </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {LstCachingCateShareHeader.map((item, index) =>
                                                <tr key={index.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.code}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.model}</td>
                                                </tr>
                                            )}
                                            
                                        </tbody>
                                    </Table>
                        </Col>

                        <Col md = {12}>
                                    <Table Striped style={{maxHeight:'400px', minWidth:'1600px'}} >
                                        <thead >
                                            <tr >
                                                <th style={{width:'300px'}}>Mã </th>
                                                <th >Tên </th>
                                                <th>Mã cấp cha  </th>
                                                <th>Tên  </th>
                                                
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {currentPageData.map((item, index) =>
                                                <tr key={index.code}>
                                                    <td>{item.code}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.codeh}</td>
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
                        </Col>
                      </Row>
                      
                </div>


        )
    
}

export default CateShareCom;
