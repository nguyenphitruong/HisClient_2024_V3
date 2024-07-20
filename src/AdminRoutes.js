import React, { useState, useEffect } from 'react';
import callApi from './apis/callApi';
//import patientModel from '../../models/emr/patient/PatientModel';
import RouteComponent from './routes';
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
//  var routes = [];
 const AdminRoutes = () =>  {
    const [routes, setData] = useState([]);
    useEffect(() => {
    GetListRoutesData()
    //routes = [GetListRoutesData()];
}, []);
//var dataresult = [];

async function GetListRoutesData()
{
      try
       {
        var routes = [];
          //let data = callApi.GetAll();
          let datatemp =  await callApi.GetAll();
          const arr = []
          Object.keys(datatemp).forEach(key => arr.push({name: key, value: datatemp[key]}))
          let dataPase = arr[2].value;
          console.log('Get List dataPase menu', dataPase);

           var innerJoin = RouteComponent.reduce((result, item1) => 
           {
            // Lọc phần tử trong mảng array2 có id trùng với id của item1
            const menuselects = dataPase.filter(item2 => item2.modulecode === item1.modulecode );
            //const addChildrens = [];
            //addChildrens = JoneChildren(item1.chilren,menuselects.chilren);
            // Nếu có ít nhất một phần tử được tìm thấy, nối các thuộc tính và thêm vào mảng kết quả
            if (menuselects.length > 0) {
              
              menuselects.forEach(items => {
                //console.log("lis addChildrens:" + addChildrens );
                result.push(
                  { ...item1, 
                    modulecode: items.modulecode, 
                    modulename: items.modulename, 
                    //chilren: addChildrens,
                    //chilren: JoneChildren(item1.chilren,items.chilren),
                  });
                //console.log('Get List result 1', result);
                setData(result);
                console.log('Get List result 1', result);
              });
              //setData(result);
            }

            routes = result;
         
            //return result;
          }, []);

      } catch (error) 
      {
          console.log('Get list field',error)
      }
      //setData(routes);
      console.log('Get List route', routes);
      return routes;
  }
}
export default AdminRoutes;




