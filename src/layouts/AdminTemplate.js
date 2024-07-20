
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar  } from "react-pro-sidebar";

import { Routes, Route, Link } from "react-router-dom";
import React, { useState,Fragment  } from "react";
import routes from "../routes.js";

import { Icon } from "@mui/material";
//import './App.css';

const  AdminTemplate = ({ children }) =>  {
    const sidebar = React.useRef();
    const { collapseSidebar } = useProSidebar();
    console.log( children);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col xs={2} className="sidebar">

            <Sidebar className="app">
            <Menu>
            <MenuItem className="closemenu" 
            icon={<MenuRoundedIcon 
                onClick={() => {
                    collapseSidebar();
                }}
            />}>
                <h2> Close</h2>
            </MenuItem>
      
            {routes.map((prop, key) => (
                <SubMenu key={key} icon =  {<prop.moduleicon></prop.moduleicon>} label ={prop.modulename} >
                
                    {prop.chilren.map((chilren, keychilren) => (
                    <MenuItem key={keychilren} >
                    {<chilren.icon />}
                    <Link to={chilren.layout  + chilren.modulepath +  chilren.path}>{chilren.name}
                    </Link>
                    </MenuItem>
                    ))}
                </SubMenu>
            ))}
            </Menu>
            </Sidebar>
          </Col>
          <Col className="content">
          {/* {children} */}
          
          <Routes>
        {routes.map((prop, index) => (
        <Fragment>
            {prop.chilren.map((propchilren, indexchilren) => (
             <Route key={indexchilren} path={propchilren.layout  + propchilren.modulepath + propchilren.path} element={<propchilren.component />} />
          ))}
        </Fragment>
        ))}
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );

//   return (
//     <div style={{ display: "flex", height: "80vh" }}>
//         {/* <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar> */}

//       {/* <PerfectScrollbar> */}
//       <Sidebar className="app">
//         <Menu>
//           <MenuItem className="closemenu" 
//           icon={<MenuRoundedIcon 
//             onClick={() => {
//                 collapseSidebar();
//               }}
//           />}>
//             <h2> Close</h2>
//           </MenuItem>
      
//         {props.routes.map((prop, key) => (
//              <SubMenu key={key} icon =  {<prop.moduleicon></prop.moduleicon>} label ={prop.modulename} >
              
//                   {prop.chilren.map((chilren, keychilren) => (
//                 <MenuItem key={keychilren} >
//                   {<chilren.icon />}
//                   <Link to={chilren.layout  + chilren.modulepath +  chilren.path}>{chilren.name}
//                   </Link>
//                 </MenuItem>
//                   ))}
//             </SubMenu>
//         ))}
//         </Menu>
//       </Sidebar>
//       {/* </PerfectScrollbar> */}
   
//       <Routes>
//         {props.routes.map((prop, index) => (
//         <Fragment>
//             {prop.chilren.map((propchilren, indexchilren) => (
//              <Route key={indexchilren} path={propchilren.layout  + propchilren.modulepath + propchilren.path} element={<propchilren.component />} />
//           ))}
//         </Fragment>
//         ))}
//       </Routes>
    
//     </div>
//   );
};

export default AdminTemplate;