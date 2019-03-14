import React from 'react';
import {connect} from 'react-redux';
import './TeamRoster.css';

class TeamRoster extends React.Component {
	constructor(props){
		super(props);
	}

	getRoster(teams){
		return teams.filter(el =>  el.id === this.props.match.params.id);
	}

	goToMember(id){
		this.props.history.push('/team-member/'+this.props.match.params.id +"/"+id);
	}

	render() {
		const teamRoster = this.getRoster(this.props.teams.teams);
		console.log("print roster", teamRoster);

		return (
				<div>
					<h1>Team Roster</h1>
					<div> &nbsp;</div>
					{teamRoster && teamRoster.length > 0 &&
						
						teamRoster[0].roster.map((el, index)=> {

						 	return  <div className="row bdr" key={"roster-"+index} onClick={(e)=>this.goToMember(index)}>
						 				<div class="row display" className="col-sm-12 col-md-7 col-lg-7">DisplayName: {el.person.displayName}</div>
						 				<div className="col-sm-12 col-md-7 col-lg-7">Unit: {el.unit}</div>
						 				<div className="col-sm-12 col-md-7 col-lg-7">Position: {el.position}</div>
						 				<div className="col-sm-12 col-md-7 col-lg-7">DepthOrder: {el.depthOrder}</div>
						 			</div>
						})
					}
				</div>
			)
	}

}

const mapStateToProps = function(state) {
	return {
		teams: state.teams
	}
};

export default connect(mapStateToProps)(TeamRoster);