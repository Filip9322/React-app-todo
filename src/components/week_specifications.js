import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DateComponent extends React.Component {
	constructor () {
		super();

		var DateToday = new Date(),
		console.log(DateToday),
	};

}

const WEEKDAYS = [
  {name: 'Lunes'      ,kanji: '月', weekday: true },
  {name: 'Martes'     ,kanji: '火', weekday: true },
  {name: 'Miercoles'  ,kanji: '水', weekday: true },
  {name: 'Jueves'     ,kanji: '木', weekday: true },
  {name: 'Viernes'    ,kanji: '金', weekday: true },
  {name: 'Sabado'     ,kanji: '土', weekday: false},
  {name: 'Domingo'    ,kanji: '日', weekday: false},
];
ReactDOM.render(
  <FilterableProductTable weekdays={WEEKDAYS} />,
  document.getElementById('week_table')
);
