import React, {Component} from 'react';
import Typed from 'typed.js';

import NavBar from './../../components/layout-home/navbar/index';
import Footer from './../../components/layout-home/footer/index';

import './style.scss';

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      text : {}
    };
  }

  componentDidMount(){
    const text = {
      strings: ['test inicial', 'la test 2', ' test fianl'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    }
    new Typed('#dintext', text);
  }


  render(){

    return(
      <div id="cont">
        <NavBar />
        <div className="content"><span id="dintext"></span></div>
        
        <Footer />
      </div>
    );
  }
}