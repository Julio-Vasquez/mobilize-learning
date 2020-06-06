import React, { useState, createRef, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import logo from "./../../../assets/images/logo192.png";
import bgImage from "./../../../assets/images/sidebar-2.jpg";

import { makeStyles } from "@material-ui/core/styles";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import DashBoardRoutes from "./routes";
import Sidebar from "./../../../components/admin/Sidebar";
import Navbar from "./../../../components/admin/Navbar";

import styles from "./../../../assets/jss/custom/adminStyle";
import SpecificContent from "./../../../components/admin/SpecificContent";

import SpecificRoad from "./../SpecificRoad";
import SpecificBehaviors from "./../SpecificBehaviors";
import Profile from "./../Profile";

import { MenuOutlined } from "@ant-design/icons";

const switchRoutes = (
  <Switch>
    {DashBoardRoutes.map((route, key) => {
      if (route.layout === "/admin") {
        return (
          <Route
            path={route.layout + route.path}
            component={route.component}
            key={key}
          />
        );
      }
      return null;
    })}

    <Route
      path="/admin/mobilitybehaviors/curse=:data"
      component={SpecificBehaviors}
      exact={true}
    />
    <Route
      path="/admin/roadsigns/curse=:data"
      component={SpecificRoad}
      exact={true}
    />
    <Route path="/admin/content" component={SpecificContent} exact={true} />
    <Route path="/admin/profile" component={Profile} exact={true} />
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

let ps;

export default function Admin({ ...rest }) {
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
    <div className={classes.wrapper}>
      <Sidebar
        routes={DashBoardRoutes}
        logoText={"Mobilize Learning"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="blue"
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={DashBoardRoutes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.map}>{switchRoutes}</div>
      </div>
    </div>
  );
}
