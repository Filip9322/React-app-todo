import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './../logo.svg';
import './App.css';

class App extends Component {
  //constructor(){
    //clase que se ejecuta al moemento de ser instanciada--> clasico en Js
    //super(props);
    //this.handleClick = this.handleClick.bind(this); estilo ECMA6
  //}
  handleClick = (event) =>{
    console.log(this.props.title);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
/* 
  Prop-types
  Nos ayuda a validar que el contenido que se espera sea lo que se esta esperando
  si esperamos un string y llega un objeto, el nos avisa.
  Y el error no llega a producción, tambi´n se debe agregar la instalación al npm:
     npm install prop-types --save
  Tener en cuenta:
  - que se usa como llave: App.propTypes
  - que se usa como componente : PropType

  PropTypes.string --- textos
  PropTypes.bool   --- boleano
  PropTypes.number --- numero 
  PropTypes.func   --- funcion
  PropTypes.array  --- array
  PropTypes.oneOf(['video', 'audio']) --- espera que sea uno de tipo de video o audio
  .isRequired      ---  es requerido
 */
App.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}
/* 
    Se creo el componente , ahora se debe exportar, para poder importarlo 
    otras interfaces.
*/
export default App;
