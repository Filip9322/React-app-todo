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
				<InfoStates states = { Object.entries(STATES) } />
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
								<h3>{ state[1]["name"] }</h3>
								<p>ID : { state[1]["_id"] }<br/>
									value: { state[1]["value"] }<br/>
									description: { state[1]["description"] }
								</p>
							</div>
						);
					})
					//STATES.map((state) =>{
						/*

					})*/
				}
			</div>
		);
	}
}
const STATES = [
	{
      "name"   : "StateToDo",
      "_id"    : 1,
      "value"  : "",
      "description": "todo"
    },
    {
      "name"  : "StateDone",
      "_id"   : 2,
      "value" : "O",
      "description": "done"
    },
    {
      "name"  : "StateUndone",
      "_id"   : 3,
      "value" : "X",
      "description": "undone"
    }
];

export default DetailsFromTask;