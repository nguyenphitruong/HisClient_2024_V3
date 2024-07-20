
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

// function RegisterHiHistoryCom ({LstCachingCateShareLine,LstCachingCateICD10,LstCachingCateHopital}){ 
    function RegisterHiHistoryCom({ LstCachingCateShareLine,LstCachingCateICD10,LstCachingCateHopital}) {

        // const a = prop.title;
        // const b = prop.description;
        // console.log("a:" +a);
        // console.log("b:" +b);
      
        const a = LstCachingCateShareLine;
        const b = LstCachingCateICD10;
        const c = LstCachingCateHopital;
        console.log("a:" +a);
        console.log("b:" +b);
        console.log("c:" +c);
    //const {DataCaching} = useContext(DataContext);
    //const lstDataCaching =  [];
    //lstDataCaching = DataCaching;
    //console.log("dataCachingHis:" + lstDataCaching);
    //console.log("dataCachingHis:" + JSON.stringify(DataCaching));
    //const lstCateShare = LstCachingCateShareLine;
    //console.log("dataCachingHis:" + lstCateShare);

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
            <>
                {/* <div style={{margin: '10px', fontSize: '14px'}}> */}
                <div className="contentcomponent">

                {/* <div>
      {LstCachingCateShareLine.map((item, index) =>
                                                <tr key={index.code}>
                                                    <td>{item.code}</td>
                                                    <td>{item.name}</td>

                                                </tr>
                                            )}
      </div> */}
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
                                                <th style={{width:'300px'}}>Mã </th>
                                                <th >Tên </th>
                                                <th>Mã cấp cha  </th>
                                                
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
                                </CardBody>
                            </Card>
                        </Col>
                      </Row>
                      
                </div>
                
            </>
        )
    
}

export default RegisterHiHistoryCom;
