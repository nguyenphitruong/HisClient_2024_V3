import React, { useState,useEffect } from 'react';
import { Table, Button, Input } from 'reactstrap';
//import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import callApi from '../../apis/callApi';


//import { Table, Form } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp, FaCheckSquare, FaSquare } from 'react-icons/fa';
import { Row } from 'react-bootstrap';
const TreeTable = ({ data }) => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState({});

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
          <td style={{ width:'30px', paddingLeft: `${level * 20}px`, margin:'5px' }}>
            {item.children && (
              <span onClick={() => handleExpand(item.id)} style={{ cursor: 'pointer' }}>
                {expanded[item.id] ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            )}{' '}
            <span onClick={() => handleSelect(item.id)} style={{ cursor: 'pointer' }}>
              {selected.includes(item.id) ? <FaCheckSquare /> : <FaSquare />}
            </span>{' '}
          </td>
          <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.unitname}</td>
            <td>{item.serprice}</td>
            <td>{item.hiprice}</td>
            <td>{item.ishi}</td>
        </tr>
        {expanded[item.id] && item.children && renderRows(item.children, level + 1)}
      </React.Fragment>
    ));
  };

  return (
    <div >
      {/* <Form.Control
        type="text"
        placeholder="Filter..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      /> */}
      
      <Row style={{margin: '5px', color:'Red'}}>
      <Table striped bordered hover>
        <thead>
          <Input
           type="text"
           placeholder="Tìm nhanh..."
           value={filter}
           onChange={(e) => setFilter(e.target.value)}
            // type="checkbox"
            //  checked={row.checked}
            //  onChange={() => handleCheckboxChange(row.id)}
          /> 

    
          </thead>
         

          </Table>
     

      </Row>
      <Row style={{margin: '5px', width: '1360px'}}>
      <Table striped bordered hover>
        <thead>
         
        <tr>
             <td>Chọn</td>
             <td>Mã DV</td>
             <td>Tên DV</td>
             <td>ĐVT</td>
             <td>Giá DV</td>
             <td>Giá BHYT</td>
             <td>BHYT</td>
          </tr>
        </thead>
        <tbody>{renderRows(filteredData)}</tbody>
      </Table>

      </Row>
      
    </div>
  );
};

function CateServiceItemCom ({LstCachingCateShareLine,LstCachingCateICD10,LstCachingCateHopital,lstCachingCateSevice}){
  return (
    <div className="contentcomponent">
      <TreeTable data={lstCachingCateSevice} />
    </div>
  );
};
export default CateServiceItemCom;

