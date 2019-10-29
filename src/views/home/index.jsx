import React, {Component} from 'react';
import Typed from 'typed.js';


import './style.scss';

export  class Home extends Component{

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

  componentWillMount(){
    document.body.style.backgroundImage = "url(./../../assets/images/signals/01.jpg)";   
  }

  render(){
    return(
      <div id="conthome">
      <div className="content">
        <span id="dintext"></span>
      </div>
    </div>
    );
  }
}

//NO funciona la version responsive, letra muy grande e imagen no funciona bien! falta agregar mediaquery