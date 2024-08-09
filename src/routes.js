

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

//import Patientcomponent from "./components/emr/patientcomponent";
import Registercomponent from "./components/emr/registercomponent";
import Outcliniccomponent from "./components/emr/outcliniccomponent";
import Patient from './components/emr/PatientCom.js';
import TabTableComponent from './components/emr/TabTableComponent.js';
import PageNumberCom from './components/emr/PageNumberCom.js';
import CateShareCom from "./components/sys/cateShareCom.js";
import ExMaterial from "./components/ExMaterial.js";



import callApi from './apis/callApi';

var routes = [
  {
    modulecode: "TIEPNHAN",
    modulename: "Model 01",
    modulepath: "/emr",
    moduleicon: GridViewRoundedIcon,
    chilren : [
      {
        code: "BENHNHAN",
        name: "Bệnh nhân_compo",
        path: "/patientcomponent",
        icon: ReceiptRoundedIcon,
        component : Patient,
        layout: "/admin",
        modulepath: "/emr",
      },
      {
        code: "DANGKY",
        name: "Đăng ký_compo",
        path: "/registercomponent",
        icon: BarChartRoundedIcon,
        component : Registercomponent,
        layout: "/admin",
        modulepath: "/emr",
      },
    ]
  },
  {
    modulecode: "NGOAITRU",
    modulename: "Model 03",
    modulepath: "/pha",
    moduleicon: LogoutRoundedIcon,
    
    chilren : [
      {
        code: "KHAMBENH",
        name: "Menu 05",
        path: "/outcliniccomponent",
        icon: TimelineRoundedIcon,
        component : Outcliniccomponent,
        layout: "/admin",
        modulepath: "/pha",
      },
      {
        code: "KHAMBENHH",
        name: "Menu 06",
        path: "/outcliniccomponent",
        icon: SavingsRoundedIcon,
        component : Outcliniccomponent,
        layout: "/admin",
        modulepath: "/pha",
      },
    ]
  },
  {
    modulecode: "NOITRU",
    modulename: "Model 01",
    modulepath: "/emr",
    moduleicon: AccountBalanceRoundedIcon,
    chilren : [
      {
        code: "DANHSACHNOITRU",
        name: "Menu 01",
        path: "/patientcomponent",
        icon: BubbleChartRoundedIcon,
        component : Patient,
        layout: "/admin",
        modulepath: "/emr",
      },
      {
        code: "TONGHOPTHUOC",
        name: "Menu 02",
        path: "/outcliniccomponent",
        icon: BarChartRoundedIcon,
        component : Outcliniccomponent,
        layout: "/admin",
        modulepath: "/emr",
      },
    ]
  },
  {
    modulecode: "THUNGAN",
    modulename: "Model 03",
    modulepath: "/pha",
    moduleicon: MonetizationOnRoundedIcon,
    
    chilren : [
      {
        code: "THUNGOAITRU",
        name: "Menu 05",
        path: "/Patientcomponent",
        icon: TimelineRoundedIcon,
        component : Patient,
        layout: "/admin",
        modulepath: "/pha",
      },
      {
        code: "THUNGOAITRUBHYT",
        name: "Menu 06",
        path: "/outcliniccomponent",
        icon: SavingsRoundedIcon,
        component : Outcliniccomponent,
        layout: "/admin",
        modulepath: "/pha",
      },
      {
        code: "THANHTOANRAVIEN",
        name: "Menu 06",
        path: "/outcliniccomponent",
        icon: SavingsRoundedIcon,
        component : Outcliniccomponent,
        layout: "/admin",
        modulepath: "/pha",
      },
    ]
  },
  {
    modulecode: "DUOC",
    modulename: "Model 03",
    modulepath: "/pha",
    moduleicon: ShieldRoundedIcon,
    
    chilren : [
      {
        code: "DUYETHUOCOP",
        name: "Menu 05",
        path: "/Patientcomponent",
        icon: TimelineRoundedIcon,
        component : Patient,
        layout: "/admin",
        modulepath: "/pha",
      },
      {
        code: "PHATTHUOC",
        name: "Menu 06",
        path: "/outcliniccomponent",
        icon: SavingsRoundedIcon,
        component : Outcliniccomponent,
        layout: "/admin",
        modulepath: "/pha",
      },
    ]
  },
  {
    modulecode: "TIENICH",
    modulename: "Model 03",
    modulepath: "/pha",
    moduleicon: SettingsApplicationsRoundedIcon,
    
    chilren : [
      {
        code: "BAOCAO",
        name: "TabTable example",
        path: "/TabTableComponent",
        icon: TimelineRoundedIcon,
        component : TabTableComponent,
        layout: "/admin",
        modulepath: "/pha",
      },
      {
        code: "SUAHCBN",
        name: "Phân trang",
        path: "/pageNumberCom",
        icon: SavingsRoundedIcon,
        component : PageNumberCom,
        layout: "/admin",
        modulepath: "/pha",
      },
    ]
  },

  {
    modulecode: "HETHONG",
    modulename: "Model 03",
    modulepath: "/pha",
    moduleicon: SettingsApplicationsRoundedIcon,
    
    chilren : [
      {
        code: "DANHMUCDUNGCHUNG",
        name: "cateShareCom",
        path: "/cateShareCom",
        icon: TimelineRoundedIcon,
        component : CateShareCom,
        layout: "/admin",
        modulepath: "/sys",
      },
      {
        code: "DANHMUCKHAC",
        name: "Giao diện",
        path: "/exMaterial",
        icon: TimelineRoundedIcon,
        component : ExMaterial,
        layout: "/admin",
        modulepath: "/sys",
      },
    ]
  },
];
export default routes;
