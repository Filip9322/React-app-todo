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
	getWeekDates(weekDay, weekDate){
		let weekDays = [];
		for(let i = 0 ; i < 8 ; i++){
			let number   = i - weekDay + weekDate; 
			weekDays.push(number);
		}
		console.log(weekDay);
		return weekDays
	}

	render() {
		return(
		<table>
			<tr>
				<th>Weekday</th>
			{
				WEEKDAYS.map((weekday) =>{
					let isWeekDay = weekday.weekday;
					let isToday   = new Date();
					let arrayDate = this.getWeekDates(isToday.getDay,isToday.getDate);
					return(
						<th key={weekday.name}>
						{ isWeekDay && isToday.getDay() == weekday.jsnumber ? (
								<span area-day = {weekday.name}
								className="color-green">{weekday.kanji}<br/>{ isToday.getDate() }</span>
						)
						:isWeekDay ? (
								<span area-day = {weekday.name}
								className="color-red">{weekday.kanji}<br/>{ arrayDate[0]}</span>
							):(
								<span area-day = {weekday.name}
								className="color-blue">{weekday.kanji}<br/>{ arrayDate[0]}</span>
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
//{if (isToday == weekday.jsnumber) { 'background-green' }}
const WEEKDAYS = [
  {name: 'Domingo'    ,kanji: '日', weekday: false , jsnumber: 0},
  {name: 'Lunes'      ,kanji: '月', weekday: true  , jsnumber: 1},
  {name: 'Martes'     ,kanji: '火', weekday: true  , jsnumber: 2},
  {name: 'Miercoles'  ,kanji: '水', weekday: true  , jsnumber: 3},
  {name: 'Jueves'     ,kanji: '木', weekday: true  , jsnumber: 4},
  {name: 'Viernes'    ,kanji: '金', weekday: true  , jsnumber: 5},
  {name: 'Sabado'     ,kanji: '土', weekday: false , jsnumber: 6},
];

export default WeekDaysNav;
