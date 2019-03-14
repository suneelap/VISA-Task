import React from 'react';
import {connect} from 'react-redux';
import {updateTeamMember} from '../../actions';
import './TeamMember.css';

class TeamMember extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			editable: false,
			teamMember: null, 
			prevData: null
		}
		this.updateChange = this.updateChange.bind(this);
		this.saveRecord = this.saveRecord.bind(this);
		this.cancelUpdate = this.cancelUpdate.bind(this);
	}


	componentDidMount(){
		if(this.props.teams.teams && this.props.teams.teams.length > 0){
			let teams = this.props.teams.teams;
			let teamsList =  teams.filter(el =>  el.id === this.props.match.params.rosterId);
			let memberData = teamsList[0].roster[this.props.match.params.id];
			this.setState({teamMember: memberData, prevData: Object.assign({}, memberData)});
			console.log("calling did mount", this.state);
		}
		
	}

	doEditable(){
		this.setState({editable: !this.state.editable});
	}

	updateChange(e, key){
		const teamMember = this.state.teamMember;
		if(key === "displayName"){
			teamMember['person'][key] = e.target.value;
		}
		else {
			teamMember[key] = e.target.value;
		}
		this.setState({teamMember: teamMember});
	}

	saveRecord(){
		this.props.dispatch(
			updateTeamMember({
				rosterId: this.props.match.params.rosterId,
				index: this.props.match.params.id, 
				teamMember: this.state.teamMember})
		)
		//this.setState({editable: !this.state.editable, prevData: Object.assign({}, this.state.teamMember)});
		this.props.history.push('/team-roster/'+this.props.match.params.rosterId);
	}

	cancelUpdate(){

		this.setState({editable: false, teamMember: Object.assign({}, this.state.prevData)});
	}

	render() {
		const teamMember = this.state.teamMember;

		return (
				<div>
					<h1>Team Member</h1>
					<div> &nbsp;</div>
					
					{teamMember && !this.state.editable && <div className="row bdr">
						<div className="col-sm-6 col-md-6">DisplayName:</div>
						<div className="col-sm-6 col-md-6">{teamMember.person.displayName}</div>
						<div className="col-sm-6 col-md-6">Unit:</div>
						<div className="col-sm-6 col-md-6">{teamMember.unit}</div>
						<div className="col-sm-6 col-md-6">Position:</div>
						<div className="col-sm-6 col-md-6">{teamMember.position}</div>
						<div className="col-sm-6 col-md-6">DepthOrder:</div>
						<div className="col-sm-6 col-md-6">{teamMember.depthOrder}</div>
						<div className="col-sm-6 col-md-6"><button onClick={()=> this.doEditable()}>Edit</button></div>
					</div>}

					{teamMember && this.state.editable && <div className="row bdr">
						<div className="col-sm-6 col-md-6">DisplayName:</div>
						<div className="col-sm-6 col-md-6"><input type="text" value={this.state.teamMember.person.displayName} onChange={(e)=> this.updateChange(e, 'displayName')} /></div>
						<div className="col-sm-6 col-md-6">Unit:</div>
						<div className="col-sm-6 col-md-6"><input type="text" value={this.state.teamMember.unit} onChange={(e)=> this.updateChange(e, 'unit')} /></div>
						<div className="col-sm-6 col-md-6">Position:</div>
						<div className="col-sm-6 col-md-6"><input type="text" value={this.state.teamMember.position} onChange={(e)=> this.updateChange(e, 'position')} /></div>
						<div className="col-sm-6 col-md-6">DepthOrder:</div>
						<div className="col-sm-6 col-md-6"><input type="text" value={this.state.teamMember.depthOrder} onChange={(e)=> this.updateChange(e, 'depthOrder')} /></div>
						<div className="col-sm-6 col-md-6"><button onClick={this.saveRecord}>SAVE</button></div>
						<div className="col-sm-6 col-md-6"><button onClick={()=> this.cancelUpdate()}>CANCEL</button></div>
					</div>}

				

				</div>
			)
	}

}

const mapStateToProps = function(state) {
	return {
		teams: state.teams
	}
};

export default connect(mapStateToProps)(TeamMember);
