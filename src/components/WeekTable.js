import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WeekTable.css';
import * as dataJSON from './../todo_track_task.json';

class WeekDaysNav extends Component {
	
	constructor(){
		super();
		this.isToday       = new Date();
		this.arrayWeekDate = this.getWeekDates( this.isToday.getDay() , this.isToday.getDate() );
	}

	getWeekDates(weekDay, weekDate){
		let weekDays = [];
		
		for(let i = 0 ; i < 8 ; i++){
			let number   = i - weekDay + weekDate; 
			weekDays.push(number);
		}
		
		return weekDays
	}

	render() {
		return(
		<table>
			<tbody>
				<tr>
					<th>Weekday</th>
				{
					WEEKDAYS.map((weekday) =>{
						let isWeekend = weekday.weekday;
						return(
							<th key={weekday.name}>
							{ isWeekend && this.isToday.getDay() === weekday.jsnumber ? (
									<span area-day = {weekday.name}
									className="color-green">{weekday.kanji}<br/>{ this.isToday.getDate() }</span>
							)
							:isWeekend ? (
									<span area-day = {weekday.name}
									className="color-red">{weekday.kanji}<br/>{ this.arrayWeekDate[weekday.jsnumber]}</span>
								):(
									<span area-day = {weekday.name}
									className="color-blue">{weekday.kanji}<br/>{ this.arrayWeekDate[weekday.jsnumber]}</span>
								)
							}
							</th>
							);
					})
				}
				</tr>
			<TaskPerWeekList />	
			</tbody>
		</table>
		);
	}

}

class TaskPerWeekList extends Component {

	render(){
		var dailyTask = dataJSON.taskDay;
		return (
			dailyTask.map((itemTask) => {
				return(
					<tr>
						<td>Tarea 1</td>
						<td>O</td>
						<td>X</td>
					</tr>
				);
			})
		);
	}
}

TaskPerWeekList.propTypes = {
  title:  PropTypes.string,
  author: PropTypes.string,
  type:   PropTypes.oneOf(['video', 'audio']),
}

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
