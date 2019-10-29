import React from 'react';
import { MDBBtn } from "mdbreact";
import { Footer } from './../layout-home/footer/index';
import PropTypes from 'prop-types';

import './style.scss'
export const Page404 = props => {
  return (
     <div className="container404">
       <MDBBtn color="purple">
        <a href={props.path}>{props.text}</a>
       </MDBBtn>
        <Footer />
     </div>
  );
}
Page404.defaultProps ={
  path : '/',
  text : 'Volver al inicio'
}

Page404.propTypes = {
  path : PropTypes.string.isRequired,
  text : PropTypes.string.isRequired
}
