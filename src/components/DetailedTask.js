import React, { Component } from 'react';

class DetailsFromTask extends Component {
	constructor(props){
		super(props);
		//this.state = this.props.detailedTask;
	}
	render(){
		return(
			<fieldset>
				<legend>Detailed Task</legend>
				<div className = "detailed-task">
					<label>{ this.props.detailedTask }</label>
				</div>
				<InfoStates states = {STATES} />
			</fieldset>
		);
	}
}
class InfoStates extends Component {
	render() {
		return(
			<div className = "info-state">
				{
					this.props.states.map((state) =>{
						return(
							<div className = "state-item">
								<p>{ state }</p>
							</div>
						);
					})
				}
			</div>
		);
	}
}
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

export default DetailsFromTask;