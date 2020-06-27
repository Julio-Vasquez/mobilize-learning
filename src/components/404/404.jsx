import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./404.scss";

export const Page404 = ({ path, text }) => {
  return (
    <div className="container404">
      <Link to={path}>
        <MDBBtn color="purple">{text}</MDBBtn>
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
