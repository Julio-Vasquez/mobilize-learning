import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

import "./style.scss";

export default function Footer() {
  return (
    <MDBFooter className="footer-app">
      <div className="footer-copyright text-center py-3 ">
        <MDBContainer fluid>
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved :{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
