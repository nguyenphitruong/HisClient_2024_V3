
import axioscallapi from "./axioscallapi";

class CateApi{
   
    GetServicesAll = () =>
    {
        //const url = '/CateBed/GetListCateBed';
        const url = '/Cate/Services';
        //const url = '/SYS/GetMenuAl';
        return axioscallapi.get(url);
    };
    GetCateAll = () =>
    {
        //const url = '/CateBed/GetListCateBed';
        const url = '/Cates/GetCateICD10All';
        //const url = '/SYS/GetMenuAl';
        return axioscallapi.get(url);
    };
     GetPatientBypatcode = (patcode)=>
     {
        console.log('patcodeApi:' + JSON.stringify(patcode))
        const url = '/Patient/'+patcode;
        return axioscallapi.get(url);
     };

    GetAll1 = () =>
    {
        //const url = '/CateBed/GetListCateBed';
        const url = '/Inventory/GetDrugInventoryByStore';
        //const url = '/SYS/GetMenuAl';
        return axioscallapi.get(url);
    };
    GetMenuAll = () =>
    {
        //const url = '/CateBed/GetListCateBed';
        const url = '/Inventory/GetMenuAll';
        //const url = '/SYS/GetMenuAl';
        return axioscallapi.get(url);
    };
    GetAll = () =>
    {
        //const url = '/CateBed/GetListCateBed';
        const url = '/Inventory/GetDrugInventoryByStore1';
        //const url = '/SYS/GetMenuAl';
        return axioscallapi.get(url);
    };
    Get = (params)=>
    {
        const url = '/Inventory/GetDrugInventoryByStore';
        return axioscallapi.get(url,{params});
    };
    // GetAll = (params)=>
    // {
    //     const url = '/api/EMR/v1/Cates/GetCateICD10All';
    //     return axioscallapi.get(url,{params});
    // };
    
    GetByID = (id)=>
    {
        const url = '/ICD/${id}';
        return axioscallapi.get(url,{id});
    };
    GetTest = (params)=>
    {
        const url = '/ICD/Test';
        return axioscallapi.get(url,{params});
    };
    Post = ( url,params)=>
    {
        return axioscallapi.post(url,params);
    };

    Delete = (id)=>
    {
        const url = '/ICD/Test';
        return axioscallapi.delete(url,{id});
    };
}

const cateApi = new CateApi();
export default cateApi;