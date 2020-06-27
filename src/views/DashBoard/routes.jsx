import React, { lazy, Suspense, useState, createRef, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import logo from "./../../assets/images/logo192.png";
import bgImage from "./../../assets/images/sidebar-2.jpg";
import DashBoardRoutes from "./layout/routes";

import { Loading } from "./../../components/Loading";
import History from "./../../common/history";
import { Sidebar } from "./../../components/admin/Sidebar";
import { NavBar } from "./../../components/admin/Navbar";

import styles from "./../../assets/jss/custom/adminStyle";
import SpecificContent from "./../../components/admin/SpecificContent";

const SpecificRoad = lazy(() => import("./SpecificRoad"));
const SpecificBehaviors = lazy(() => import("./SpecificBehaviors"));
const Profile = lazy(() => import("./Profile"));
const DashBoard = lazy(() => import("./DashBoard"));
const RoadSigns = lazy(() => import("./RoadSigns"));
const MobilityBehaviros = lazy(() => import("./MobilityBehaviors"));
const MyQualifications = lazy(() => import("./MyQualifications"));
const Certificate = lazy(() => import("./Certificate"));
const EvaluativeTest = lazy(() => import("./EvaluativeTests"));

const useStyles = makeStyles(styles);

let ps;

const RoutesAdmin = () => {
  const classes = useStyles();
  const mainPanel = createRef();
  const [mobileOpen, setMobileOpen] = useState(false);
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <Router history={History}>
      <div className={classes.wrapper}>
        <Sidebar
          routes={DashBoardRoutes}
          logoText={"Mobilize Learning"}
          logo={logo}
          image={bgImage}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color="blue"
        />
        <div className={classes.mainPanel} ref={mainPanel}>
          <NavBar
            routes={DashBoardRoutes}
            handleDrawerToggle={handleDrawerToggle}
          />
          <div className={classes.map}>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path="/admin" component={DashBoard} exact={true} />
                <Route
                  path="/admin/dashboard"
                  component={DashBoard}
                  exact={true}
                />
                <Route
                  path="/admin/roadsign"
                  component={RoadSigns}
                  exact={true}
                />
                <Route
                  path="/admin/roadsigns/curse=:data"
                  component={SpecificRoad}
                  exact={true}
                />
                <Route
                  path="/admin/mobilitybehavior"
                  component={MobilityBehaviros}
                />
                <Route
                  path="/admin/mobilitybehaviors/curse=:data"
                  component={SpecificBehaviors}
                  exact={true}
                />
                <Route
                  path="/admin/qualification"
                  component={MyQualifications}
                />
                <Route path="/admin/certificate" component={Certificate} />
                <Route path="/admin/test" component={EvaluativeTest} />
                <Route
                  path="/admin/content"
                  component={SpecificContent}
                  exact={true}
                />
                <Route path="/admin/profile" component={Profile} exact={true} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default RoutesAdmin;
