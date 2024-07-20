import React, {useState} from 'react';
//import '../App.css';
import AdminTemplate from '../../layouts/AdminTemplate'
//import Dashboard from '../../layouts/dashboard'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  InputGroup,
  FormText,
  CardText,
  Label,
  Container,
  Table,
} from "reactstrap";


function Patientcomponent (props) {
  //const { data } = useContext(DataContext);
  //console.log("data maincomponent:" + data);

  return (
    <div>
        
      <h1>Main Component</h1>
      
    </div>
  );
}; 
export default Patientcomponent;

// const Patientcomponent = () => {

//   return (
//     <>

//       <div className="content">
//       <Container>
       
//         <Row xs="2">
//           <Col className="tr-col" xs={12} md={6} >
          
//               <Form>
//                   <FormGroup row>
//                     <Label for="exampleEmail" sm={2}>Email</Label>
//                     <Col >
//                       <Input
//                         id="exampleEmail"
//                         name="email"
//                         placeholder="with a placeholder"
//                         type="email"
//                       />
//                     </Col>
                
//                   </FormGroup>

//                   <FormGroup row>
//                     <Label for="examplePassword" sm={2}>Password</Label>
//                     <Col sm={10}>
//                       <Input
//                         id="examplePassword"
//                         name="password"
//                         placeholder="password placeholder"
//                         type="password"
//                       />
//                     </Col>
//                   </FormGroup>

//                   <FormGroup row>
//                     <Label for="exampleSelect" sm={2} > Select </Label>
//                     <Col sm={10}>
//                       <Input
//                         id="exampleSelect"
//                         name="select"
//                         type="select"
//                       >
//                         <option>
//                           1
//                         </option>
//                         <option>
//                           2
//                         </option>
//                         <option>
//                           3
//                         </option>
//                         <option>
//                           4
//                         </option>
//                         <option>
//                           5
//                         </option>
//                       </Input>
//                     </Col>
//                   </FormGroup>
                
//                   <FormGroup row>
//                     <Label for="exampleText" sm={2}>Text Area</Label>
//                     <Col sm={10}>
//                       <Input
//                         id="exampleText"
//                         name="text"
//                         type="textarea"
//                       />
//                     </Col>
//                   </FormGroup>

//                   <FormGroup row>
//                     <Label for="exampleFile" sm={2}>File</Label>
//                     <Col sm={10}>
//                       <Input
//                         id="exampleFile"
//                         name="file"
//                         type="file"
//                       />
//                     </Col>
//                   </FormGroup>

//                   <FormGroup row>
//                     <Label for="exampleSelect" sm={2} > Select </Label>
//                     <Col sm={10}>
//                       <Input
//                         id="exampleSelect"
//                         name="select"
//                         type="select"
//                       >
//                         <option>
//                           1
//                         </option>
//                         <option>
//                           2
//                         </option>
//                         <option>
//                           3
//                         </option>
//                         <option>
//                           4
//                         </option>
//                         <option>
//                           5
//                         </option>
//                       </Input>
//                     </Col>
//                   </FormGroup>
//               </Form>
            
//           </Col>

//           <Col className="bg-light border" xs={12} md={5}>
//             <Form>
//                 <FormGroup row>
//                   <Label for="exampleEmail" sm={2}>Email</Label>
//                   <Col >
//                     <Input
//                       id="exampleEmail"
//                       name="email"
//                       placeholder="with a placeholder"
//                       type="email"
//                     />
//                   </Col>
              
//                 </FormGroup>

//                 <FormGroup row>
//                   <Label for="examplePassword" sm={2}>Password</Label>
//                   <Col sm={10}>
//                     <Input
//                       id="examplePassword"
//                       name="password"
//                       placeholder="password placeholder"
//                       type="password"
//                     />
//                   </Col>
//                 </FormGroup>

//                 <FormGroup row>
//                   <Label for="exampleSelect" sm={2} > Select </Label>
//                   <Col sm={10}>
//                     <Input
//                       id="exampleSelect"
//                       name="select"
//                       type="select"
//                     >
//                       <option>
//                         1
//                       </option>
//                       <option>
//                         2
//                       </option>
//                       <option>
//                         3
//                       </option>
//                       <option>
//                         4
//                       </option>
//                       <option>
//                         5
//                       </option>
//                     </Input>
//                   </Col>
//                 </FormGroup>
              
//                 <FormGroup row>
//                   <Label for="exampleText" sm={2}>Text Area</Label>
//                   <Col sm={10}>
//                     <Input
//                       id="exampleText"
//                       name="text"
//                       type="textarea"
//                     />
//                   </Col>
//                 </FormGroup>

//                 <FormGroup row>
//                   <Label for="exampleFile" sm={2}>File</Label>
//                   <Col sm={10}>
//                     <Input
//                       id="exampleFile"
//                       name="file"
//                       type="file"
//                     />
//                   </Col>
//                 </FormGroup>

//                 <FormGroup row>
//                   <Label for="exampleSelect" sm={2} > Select </Label>
//                   <Col sm={10}>
//                     <Input
//                       id="exampleSelect"
//                       name="select"
//                       type="select"
//                     >
//                       <option>
//                         1
//                       </option>
//                       <option>
//                         2
//                       </option>
//                       <option>
//                         3
//                       </option>
//                       <option>
//                         4
//                       </option>
//                       <option>
//                         5
//                       </option>
//                     </Input>
//                   </Col>
//                 </FormGroup>
//             </Form>
//           </Col>
     
//         </Row>
        
//         <Row>
//           <Table striped>
//     <thead>
//       <tr>
//         <th>
//           #
//         </th>
//         <th>
//           First Name
//         </th>
//         <th>
//           Last Name
//         </th>
//         <th>
//           Username
//         </th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th scope="row">
//           1
//         </th>
//         <td>
//           Mark
//         </td>
//         <td>
//           Otto
//         </td>
//         <td>
//           @mdo
//         </td>
//       </tr>
//       <tr>
//         <th scope="row">
//           2
//         </th>
//         <td>
//           Jacob
//         </td>
//         <td>
//           Thornton
//         </td>
//         <td>
//           @fat
//         </td>
//       </tr>
//       <tr>
//         <th scope="row">
//           3
//         </th>
//         <td>
//           Larry
//         </td>
//         <td>
//           the Bird
//         </td>
//         <td>
//           @twitter
//         </td>
//       </tr>
//     </tbody>
//           </Table>
//         </Row>
//       </Container>
//       </div>
//     </>
//   );
// };

// export default Patientcomponent;
  