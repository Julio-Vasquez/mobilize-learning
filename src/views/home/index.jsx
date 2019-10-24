import React, {Component} from 'react';
import Typed from 'typed.js';

import NavBar from './../../components/layout-home/navbar/index';
import Footer from './../../components/layout-home/footer/index';

import './style.scss';

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state ={};
  }

  componentDidMount(){
    const text = {
      strings: [
        '¿No sabes nada acerca de señales de transito?',
        '¿Mucho menos del comportamientos de movilidad?',
        'Este es el lugar indicado!!',
        '¿Qué estas esperando?'
      ],
      typeSpeed: 105,
      backSpeed: 45,
      loop: true
    }
    new Typed('#dintext', text);
  }


  render(){
    return(
      <div id="cont">
        <NavBar />
        <div className="content">
          <span id="dintext"></span>
        </div>
        <Footer />
      </div>
    );
  }
}