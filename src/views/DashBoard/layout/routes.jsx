import CommuteOutlinedIcon from "@material-ui/icons/CommuteOutlined";
import Dashboard from "@material-ui/icons/Dashboard";
import Task from "./../../../assets/images/svg/task.svg";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import CardMembershipOutlinedIcon from "@material-ui/icons/CardMembershipOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
//Views
import DashBoard from "./../DashBoard";
import RoadSigns from "./../RoadSigns";
import MobilityBehaviros from "./../MobilityBehaviors";
import MyQualifications from "./../MyQualifications";
import Certificate from "./../Certificate";
import EvaluativeTest from "./../EvaluativeTests";

const DashBoardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashBoard,
    layout: "/admin"
  },
  {
    path: "/roadsigns",
    name: "Señales de transito",
    icon: CommuteOutlinedIcon,
    component: RoadSigns,
    layout: "/admin"
  },
  {
    path: "/mobilitybehaviros",
    name: "Comp de movilidad",
    icon: Task,
    component: MobilityBehaviros,
    layout: "/admin"
  },
  {
    path: "/qualification",
    name: "Mis Notas",
    icon: LibraryBooksOutlinedIcon,
    component: MyQualifications,
    layout: "/admin"
  },
  {
    path: "/certificate",
    name: "Certificados",
    icon: CardMembershipOutlinedIcon,
    component: Certificate,
    layout: "/admin"
  },
  {
    path: "/test",
    name: "Test Evaluativos",
    icon: NotificationsOutlinedIcon,
    component: EvaluativeTest,
    layout: "/admin"
  }
];

export default DashBoardRoutes;
