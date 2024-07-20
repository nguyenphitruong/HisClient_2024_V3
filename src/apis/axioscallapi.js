//import { configure } from '@testing-library/react';
import axios from 'axios';
import queryString from 'query-string';
import { parse, stringify } from 'qs'
//import variable from 'Variables';

const axioscallapi = axios.create(
    {
    //baseURL:process.env.REACT_APP_API,
    //baseURL:variable.API_URL,
    //baseURL: "https://localhost:50001/api/EMR/v1",
    baseURL: "https://localhost:5001/api/PHA/v1",
    //baseURL: "http://10.0.10.13:8080",
    
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        },
    //paramsSerializer: params =>queryString.stringify(params),
    params:{
        paramsSerializer: {
            encode: parse,
            serialize: stringify,
          },
    }
});

axioscallapi.interceptors.request.use(async(config)=>{
    return config;
})

axioscallapi.interceptors.response.use((response)=>{
    if(response && response.data)
    {
        return response.data;
    }
    return response ;
},(error)=>{
    throw error;
});

export default axioscallapi;