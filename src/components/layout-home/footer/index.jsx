import React from 'react';
import { 
  MDBContainer,
  MDBFooter 
} from "mdbreact";
import './style.scss';

const Footer = () => {
  return(
    <MDBFooter className="font-small pt-4 mt-4 footercolor">
      <div className="footer-copyright text-center py-3 bgfooter">
        <MDBContainer fluid>
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved : <a href="/" className="footer-title"> <b>Mobilize</b> Learning</a>  
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;