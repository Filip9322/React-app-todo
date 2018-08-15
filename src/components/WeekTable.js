import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './WeekTable.css';

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
		<table>
			<tr>
				<th>Weekday</th>
			{
				WEEKDAYS.map((weekday) =>{
					let isWeekDay = weekday.weekday;
					return(
						<th key={weekday.name}>
						{ isWeekDay ? (
								<span className="color-red">{weekday.kanji}</span>
							):(
								<span className="color-blue">{weekday.kanji}</span>
							)
						}
						</th>
						);
				})
			}
			</tr>
			<tr>
				<td>Tarea 1</td>
				<td>O</td>
				<td>X</td>
			</tr>
			<tr>
				<td>Tarea 2</td>
				<td>O</td>
				<td>X</td>
			</tr>
			<tr>
				<td>Tarea 3</td>
				<td>O</td>
				<td>X</td>
			</tr>
		</table>
		);
	}

}

const WEEKDAYS = [
  {name: 'Domingo'    ,kanji: '日', weekday: false},
  {name: 'Lunes'      ,kanji: '月', weekday: true },
  {name: 'Martes'     ,kanji: '火', weekday: true },
  {name: 'Miercoles'  ,kanji: '水', weekday: true },
  {name: 'Jueves'     ,kanji: '木', weekday: true },
  {name: 'Viernes'    ,kanji: '金', weekday: true },
  {name: 'Sabado'     ,kanji: '土', weekday: false},
];

export default WeekDaysNav;
