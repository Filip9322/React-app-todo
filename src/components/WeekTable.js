import React, { Component } from 'react';
//import PropTypes from 'prop-types';

// class DateDayMonthYear extends React.Component {
// 	constructor () {
// 		super();

// 		var DateToday = new Date(),
// 		console.log(DateToday),
// 	};

// }
class WeekDaysNav extends React.Component {
	render() {
		return(
		<ul>
			{
				WEEKDAYS.map((weekday) =>{
					console.log(this);
					return(
						<li key={weekday.name}> 
							<span>{weekday.kanji}</span>
						</li>
						);
				})
			}
		</ul>
		);
	}

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

export default WeekDaysNav;