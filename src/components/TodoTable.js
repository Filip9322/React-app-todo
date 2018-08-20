import React, { Component } from 'react';
import WeekTable from './WeekTable';

class TodoTable extends Component {
	constructor(props){
		super(props);
		this.state      = { taskDetails : ''};
	}
	render(){
		return(
			<WeekTable detailedTask = { this.state.taskDetails } />
		);
	}
}

export default WeekTable;