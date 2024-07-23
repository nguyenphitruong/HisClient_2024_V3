class PatientHiModel {
    constructor( idline ='', nohi='', idlink='', patcode='', fromdate='', totate='', patientname='',sex= '',brdate = '', address='', gland='', isYear='', img='', filePath='', isusing='') 
    {
      this.idline = idline;
      this.nohi = nohi;
      this.idlink = idlink;
      this.patcode = patcode;
      this.fromdate = fromdate;
      this.totate = totate;
      this.patientname = patcode;
      this.sex = sex;
      this.brdate = brdate;
      this.address = address;
      this.gland = gland;
    }
    setNohi(nohi) {
      this.nohi = nohi;
    }
  
    setFromdate(fromdate) {
      this.fromdate = fromdate;
    }
    setTotate(totate) {
      this.totate = totate;
    }
    setAddress(address) {
      this.address = address;
    }
    setGland(gland) {
      this.gland = gland;
    }
  }

  export default PatientHiModel;


// const PatientModel = () =>
//     {
//         var a = {
//            idline:"", 
//            nohi:"", 
//            idlink:"", 
//            patcode:"", 
//            fromdate:"", 
//            totate:"", 
//            patientname:"",
//            sex:"",
//            brdate:"", 
//            address:"", 
//            gland:"", 
//            isYear:"", 
//            img:"", 
//            filePath:"", 
//            isusing:""
//         }
//     }
//     export default PatientModel