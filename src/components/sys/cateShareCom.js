
import React, {useContext, useState, useEffect} from 'react';
import callApi from '../../apis/callApi';
// import RowCus from '../../../src/RowCus/Row';
// import ColCus from '../../../ColumnCus.js';
//import RowCus from '../../RowCus.js';
//import ColCus from '../../ColumnCus.js';
//import { DataContext } from '../../contexts/ShareContext/DataContext';

import {
    Container,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    //Table,
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

const TableRow = ({ row, onClick, rowHeight  }) => {
  const handleClick = () => {
    onClick(row.code);
  };

  return (
       <tr onClick={handleClick} style={{ height: rowHeight }}>
        <td >{row.id}</td>
        <td>{row.code}</td>
        <td>{row.name}</td>
        <td>{row.model}</td>
      </tr>
     
    
  );
};
const Table = ({ data, onRowClick,rowHeight  }) => {
  return (
    <table border="1" className='table-container'>
      <thead>
        <tr>
        <th style={{width:'300px'}}>ID </th>
                                              <th >Mã </th>
                                              <th >Tên </th>
                                              <th>Phân hệ </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow key={row.code} row={row} onClick={onRowClick} rowHeight={rowHeight}/>
        ))}
      </tbody>
    </table>
  );
};

function CateShareCom({ LstCachingCateShareHeader,LstCachingCateShareLine,LstCachingCateICD10,LstCachingCateHopital}) 
{
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
    const handleRowFocusChange = (id) => {
      setFocusedRowId(id);
    };
    const [focusedRowId, setFocusedRowId] = useState(null);

  useEffect(() => {
    if (focusedRowId !== null) {
      console.log(`Row with ID ${focusedRowId} is focused`);
    }
  }, [focusedRowId]);

  //   useEffect(() => {
  //   //JoneData();
  //   //RefreshList();
  // }, []);


 
  const [LstCachingCateShareLineRowSelect, SetLstCachingCateShareLineRowSelect] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleRowClick = (code) => {

    const dataWTemp = LstCachingCateShareLine.filter(f => f.codeh === code);
    console.log("list Line when rows select dataWTemp:" +JSON.stringify(dataWTemp) );
    if(dataWTemp.length>0)
    {
      SetLstCachingCateShareLineRowSelect(dataWTemp);

      console.log("list Line when rows select:" +LstCachingCateShareLineRowSelect);
    }

    setSelectedRowId(code);
  };
        return (
                // <div className="contentcomponent">
                  <div>
                     {/* Danh sách header ! */}
                    

                        <Table data={LstCachingCateShareHeader} onRowClick={handleRowClick} rowHeight="10px"/>
                        {selectedRowId && <p>Selected Row ID: {selectedRowId}</p>}

                                    {/* <table className='table-container'  
                                    onRowFocusChange={handleRowFocusChange} >
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
                                    </table> */}
                      

                      { <Row className="bg-light p-2">


            <Col md = {12}>
            <table Striped style={{Height:'100px', Width:'1600px'}}>
                <thead >
                    <tr >
                        <th style={{width:'100px'}}>ID </th>
                        <th style={{width:'100px'}}>Mã </th>
                        <th >Tên</th>
                        <th style={{width:'150px'}}>Mã cấp cha  </th>
                        <th >Mô tả</th>
                    </tr>
                </thead>

                <tbody>
                    {LstCachingCateShareLineRowSelect.map((item, index) =>
                        <tr key={index.code}>
                            <td>{item.id}</td>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.codeh}</td>
                        </tr>
                    )}
                    {/* <tr>
                        {Array.from({ length: totalPages }, (_, index) => ( 
                        <Button style={{margin:'1px'}} key={index} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </Button>
                        ))}
                    </tr> */}
                    
                </tbody>
            </table>
</Col>
</Row> }
                      
                </div>


        )
    
};

export default CateShareCom;
