import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

import "./Footer.scss";

export const Footer = () => {
  return (
    <MDBFooter className="footercolor">
      <div className="footer-copyright text-center py-3 bgfooter">
        <MDBContainer fluid>
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved :
          <a href="/" className="footer-title">
            <b>Mobilize</b> Learning
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};
