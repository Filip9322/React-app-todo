import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WeekTable.css';
import * as dataJSON from './../tasks.json';

class WeekTable extends Component {
	render(){
		return (
			<table>
				<tbody>
					<WeekDaysNav />
					<TaskPerWeekList />	
				</tbody>
			</table>
		);
	};

}
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
				<tr>
					<th>Weekday</th>
				{
					WEEKDAYS.map((weekday) =>{
						let isWeekend = weekday.weekday;
						return(
							<th key={weekday.name}>
							{ this.isToday.getDay() === weekday.jsnumber ? (
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
		);
	}

}

class TaskPerWeekList extends Component {
	handleOver = (event) =>{
		var timer;
		timer = setTimeout(() => {
    		console.log('click');
		} , 1000);
	}
	render(){
		var dailyTask = Object.keys(dataJSON);
		return (
			dailyTask.map((itemTask) => {
				return(
					<tr>
						<td onMouseOver = { this.handleOver }>{ itemTask }</td>
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
const STATES = [
	"StateToDo": {
      "_id"     : 1,
      "value"  : "",
      "description": "todo"
    },
    "StateDone" : {
      "_id"   : 2,
      "value": "O",
      "description": "done"
    },
    "StateUndone" : {
      "_id"   : 3,
      "value": "X",
      "description": "undone"
    }
];


export default WeekTable;
