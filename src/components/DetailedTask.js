import React, { Component } from 'react';

class DetailsFromTask extends Component {
	constructor(props){
		super(props);
		this.state = this.props.detailedTask;
	}
	render(){
		return(
			<fieldset>
				<legend>Detailed Task</legend>
				<div>
					<label>{ this.props.detailedTask }</label>
				</div>
			</fieldset>
		);
	}
}

export default DetailsFromTask;