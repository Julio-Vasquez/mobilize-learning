import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./style.scss";

export const Page404 = (props) => {
  return (
    <div className="container404">
      <Link to={props.path}>
        <MDBBtn color="purple">{props.text}</MDBBtn>
      </Link>
    </div>
  );
};

Page404.defaultProps = {
  path: "/",
  text: "Volver al inicio",
};

Page404.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
