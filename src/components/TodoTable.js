import React, { Component } from 'react';
import WeekTable from './WeekTable';
import DetailsTask from './DetailedTask';

class TodoTable extends Component {
	constructor(props){
		super(props);
		this.state      = { taskDetails : 'hola'};
	}
	render(){
		return(
			<div>
				<WeekTable   detailedTask = { this.state.taskDetails } />
				<DetailsTask detailedTask = { this.state.taskDetails } />
			</div>
		);
	}
}

export default TodoTable;