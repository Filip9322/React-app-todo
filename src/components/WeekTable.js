import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './WeekTable.css';
import * as dataJSON from './../tasks.json';

class WeekTable extends Component {
	constructor(props){
		super(props);
		this.state = { detailedTask : this.props.detailedTask};
	}
	render(){
		return (
			<table>
				<tbody>
					<WeekDaysNav weekdays = {WEEKDAYS}/>
					<TaskPerWeekList dailyTasks = {Object.keys(dataJSON)} detailedTask={this.state.detailedTask} />	
				</tbody>
			</table>
		);
	};

}
class WeekDaysNav extends Component {
	
	constructor(props){
		super(props);
		this.isToday       = new Date();
		this.arrayWeekDate = this.getWeekDates( this.isToday.getDay() , this.isToday.getDate() );
	}

	getWeekDates(weekDay, weekDate){
		let weekDaysDates = [];
		
		for(let i = 0 ; i < 8 ; i++){
			let number   = i - weekDay + weekDate; 
			weekDaysDates.push(number);
		}
		return weekDaysDates;
	}

	render() {
		return(
				<tr>
					<th>Weekday</th>
				{
					this.props.weekdays.map((weekday) =>{
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
	constructor(props){
		super(props);
		this.arrayTasks = this.props.dailyTasks;
		this.state      = { detailedTask : this.props.detailedTask , counter : 0 };
	}
	componentWillMount() {
		console.log('Component WILL MOUNT!')
	}
	componentDidMount() {
		console.log('Component DID MOUNT!')
	}
	componentWillReceiveProps(newProps) {    
		console.log('Component WILL RECIEVE PROPS!', newProps);
	}
	shouldComponentUpdate(newProps, newState) {
		console.log(newProps, newState.counter <= 10);
		return newState.counter <= 10;
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('Component DID UPDATE!', prevProps, prevState)
	}

	componentWillUnmount() {
		console.log('Component WILL UNMOUNT!')
	}
	handleOver = (data, e) =>{
		var timer;
		timer = setTimeout(() => {
			this.setState({ taskDetails : data });
			this.setState({ counter : this.state.counter + 1 });
    		//console.log(this.state.taskDetails);
		} , 1000);
	}
	render(){
		return (
			this.arrayTasks.map((itemTask) => {
				return(
					<tr>
						<td onMouseOver = { this.handleOver.bind(this,dataJSON[itemTask]._id) }>{ itemTask }</td>
						<td>{ this.state.counter }</td>
						<td>X</td>
					</tr>
				);
			})
		);
	}
}


/*TaskPerWeekList.propTypes = {
  detailedTask:  props.detailedTask,
}*/

const WEEKDAYS = [
  {name: 'Domingo'    ,kanji: '日', weekday: false , jsnumber: 0},
  {name: 'Lunes'      ,kanji: '月', weekday: true  , jsnumber: 1},
  {name: 'Martes'     ,kanji: '火', weekday: true  , jsnumber: 2},
  {name: 'Miercoles'  ,kanji: '水', weekday: true  , jsnumber: 3},
  {name: 'Jueves'     ,kanji: '木', weekday: true  , jsnumber: 4},
  {name: 'Viernes'    ,kanji: '金', weekday: true  , jsnumber: 5},
  {name: 'Sabado'     ,kanji: '土', weekday: false , jsnumber: 6},
];

export default WeekTable;
