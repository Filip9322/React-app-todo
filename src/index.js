import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App       from './components/App';
import TodoTable from './components/TodoTable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, 
	document.getElementById('root'));

ReactDOM.render(<TodoTable />, 
	document.getElementById('week-table')
);

//Averigua que hace esta linea!
registerServiceWorker();


//--Decide donde guardaras tus imagenes
//-- Atributos (NO) --> propiedades 
/*
 Nombre de los componentes:
   Los nombres de los componentes empiezan en mayuscula, y los llamados de
   los componentes deben ser en Mayuscula, es la forma de decirle a React 
   que son componentes.
*/
/*
 Estilos:
  Los estilos se pueden agregar en linea, o con una hoja de estilos
  incluso se pueden llamar si se han definido en un objeto. En el caso de
  tener palabras separadas por un guion como font-size: , existe la convención
  de usar Camel Case, la cual consiste en dejar en minuscula la primera letra
  y las palabras que continuan pegas y en mayuscula, es decir fontSize. Y los
  valores entre comillas o sin letras para que javascript no lo intente interpretar.
  backgroundColor: '#0ac456a' 000
*/
/*
 Propiedades:
   Lo que antes llamabamos atributos, se convierten en propiedades, es favor de dar
   propiedades dinamicas.  {this.props}
       this.props.author
       this.props.title
       this.props.image
*/