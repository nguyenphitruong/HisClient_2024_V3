import React, { useState,useEffect } from 'react';
import { Table, Button, Input } from 'reactstrap';
//import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import callApi from '../../apis/callApi';


//import { Table, Form } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp, FaCheckSquare, FaSquare } from 'react-icons/fa';
import { Row } from 'react-bootstrap';

// const data = [
//     {
//       id: 1,
//       name: 'Parent 1',
//       children: [
//         {
//           id: 11,
//           name: 'Child 1.1',
//           children: [
//             { id: 111, name: 'Grandchild 1.1.1' },
//             { id: 112, name: 'Grandchild 1.1.2' },
//           ],
//         },
//         { id: 12, name: 'Child 1.2' },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Parent 2',
//       children: [
//         { id: 21, name: 'Child 2.1' },
//         {
//           id: 22,
//           name: 'Child 2.2',
//           children: [
//             { id: 221, name: 'Grandchild 2.2.1' },
//             { id: 222, name: 'Grandchild 2.2.2' },
//           ],
//         },
//       ],
//     },
//   ];
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

// const Row = ({ row, onCheckboxChange,lstDataService }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleCheckboxChange = (id, isChild = false, isGrandchild = false) => {
//     onCheckboxChange(id, isChild, isGrandchild);
//   };
 
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(lstDataService);
//   const handleChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     setFilteredData(
//       lstDataService.filter((item) =>
//         item.name.toLowerCase().includes(value.toLowerCase())
//       )
//     );
//   };

//   return (
//     <>
//       <tr>
//         <td style={{width:'30px'}}>
//           {row.children && (
           
//             <Button color="link" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//             </Button>
        
//           )}
//         </td>
//         <td>
//         {/* <Input
//             type="checkbox"
//             checked={row.checked}
//             onChange={() => handleCheckboxChange(row.id)}
//           /> +  */}
//           {row.name}
//         </td>
//         {/* <td>
//         <Input
//             type="checkbox"
//             checked={row.checked}
//             onChange={() => handleCheckboxChange(row.id)}
//           />
//         </td> */}
//       </tr>
//       {isOpen &&
//         row.children &&
//         row.children.map((child) => (
          
//           <React.Fragment key={child.id}>
            
//             <tr>
//               <td style={{width:'30px'}}></td>
//               <td >
//                 {child.children && (
                  
//                   <Button color="link" onClick={() => handleCheckboxChange(child.id)}>
//                     {child.isOpen ? <FaChevronUp /> : <FaChevronDown />}
//                   </Button>
                 
//                 )}
//                 {/* <Input
//                   type="checkbox"
//                   checked={child.checked}
//                   onChange={() => handleCheckboxChange(child.id, true)}
//                 /> +  */}
//                 {child.name}

//                 <tr>
//                 <td> 
//                     <Input
//                     label="Search by name"
//                     value={searchTerm}
//                     onChange={handleChange}
//                     fullWidth
//                     margin="normal"
//                     placeholder = "Tìm kiếm nhanh"
                    
//                     />
//                 </td>
//             </tr>
//               </td>
//               {/* <td>
//                 <Input
//                   type="checkbox"
//                   checked={child.checked}
//                   onChange={() => handleCheckboxChange(child.id, true)}
//                 />
//               </td> */}
//             </tr>
//             {child.isOpen &&
//               child.children &&
//               child.children.map((grandchild) => (
                
//                 <tr key={grandchild.id}>
//                   <td></td>
//                   <td>
//                   <Input
//                       type="checkbox"
//                       checked={grandchild.checked}
//                       onChange={() => handleCheckboxChange(grandchild.id, true, true)}
//                     />   
                    
//                   </td>
//                   <td>{grandchild.code}</td> 
//                     <td>{grandchild.name} </td>
//                     <td>{grandchild.unitname} </td>
//                     <td>{grandchild.serprice}</td> 
//                     <td>{grandchild.hiprice} </td>
//                     <td>{grandchild.ishi} </td>
//                   {/* <td>
//                     <Input
//                       type="checkbox"
//                       checked={grandchild.checked}
//                       onChange={() => handleCheckboxChange(grandchild.id, true, true)}
//                     />
//                   </td> */}
//                 </tr>
//               ))}
            
//           </React.Fragment>
//         ))}
    
//     </>
//   );
// };

// const CateServiceItemCom = ({LstCachingCateShareLine,LstCachingCateICD10,LstCachingCateHopital,lstCachingCateSevice}) => {
//   const [data, setData] = useState(lstCachingCateSevice);

//   console.log("data:" +JSON.stringify(data))

//   const handleCheckboxChange = (id, isChild = false, isGrandchild = false) => {
//     setData((prevData) =>
//       prevData.map((parent) => {
//         if (parent.id === id && !isChild && !isGrandchild) {
//           return { ...parent, checked: !parent.checked };
//         }
//         if (parent.children) {
//           const updatedChildren = parent.children.map((child) => {
//             // if (child.id === id && isChild && !isGrandchild) {
//                 //   return { ...child, checked: !child.checked, isOpen: !child.isOpen };
//                 if (child.id === id && !isGrandchild) {
//               return { ...child, isOpen: !child.isOpen };
//             }
//             if (child.children) {
//               const updatedGrandchildren = child.children.map((grandchild) => {
//                 // if (grandchild.id === id && isChild && isGrandchild) {
//                 //   return { ...grandchild, checked: !grandchild.checked };

//                   if (grandchild.id === id  && isGrandchild) {
//                     return { ...grandchild, checked: !grandchild.checked };
//                 }
//                 return grandchild;
//               });
//               console.log("updatedGrandchildren:" + JSON.stringify(updatedGrandchildren))
//               return { ...child, children: updatedGrandchildren };
//             }
//             return child;
//           });
//           return { ...parent, children: updatedChildren };
//         }
//         return parent;
//       })
//     );
//   };

//   return (
//     <div className="contentcomponent">
        
//   {/* <Input
//       label="Search by name"
//       value={searchTerm}
//       onChange={handleChange}
//       fullWidth
//       margin="normal"
//     /> */}
//     <Table striped>
//       <thead>
//         <tr>
//         <td>Chọn</td>
//             <td></td>
//             <td>Mã DV</td>
//             <td>Tên DV</td>
//             <td>ĐVT</td>
//             <td>Giá DV</td>
//             <td>Giá BHYT</td>
//             <td>BHYT</td>
//           <th></th>
//           {/* <th>Name</th> */}
//           {/* <th>Checkbox</th> */}
//         </tr>
//       </thead>
//       <tbody>
//            {data.map((row) => (
//           <Row key={row.id} row={row} onCheckboxChange={handleCheckboxChange} />
//         ))}
//       </tbody>
//     </Table>
//     </div>
//   );
// };

// export default CateServiceItemCom;