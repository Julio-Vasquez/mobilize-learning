import CommuteOutlinedIcon from "@material-ui/icons/CommuteOutlined";
import Dashboard from "@material-ui/icons/Dashboard";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
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
    path: "/roadsign",
    name: "Señales de transito",
    icon: CommuteOutlinedIcon,
    component: RoadSigns,
    layout: "/admin"
  },
  {
    path: "/mobilitybehavior",
    name: "Comp de movilidad",
    icon: ListAltOutlinedIcon,
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
