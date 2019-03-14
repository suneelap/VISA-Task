import React from 'react';
import {connect} from 'react-redux';
import {getTeams} from '../../actions';
import './TeamDetails.css';

class TeamDetails extends React.Component {
	constructor(props){
		super(props);
		
		this.goToRoster = this.goToRoster.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(getTeams());
	}

	goToRoster(id){
		console.log('goto roster', id);
		this.props.history.push('/team-roster/'+id)
	}

	render() {
		const teams = this.props.teams.teams;
		console.log("print teams", teams);
		return (
				<div>
					<h1>Teams</h1>
					<div> &nbsp;</div>
					{
						<div className="row bdr-header">
			 				<div className="col-sm-4 col-md-4 col-lg-4">Team Name</div>
			 				<div className="col-sm-4 col-md-4 col-lg-4"> Nick Name</div>
			 				<div className=" col-sm-4 col-md-4 col-lg-4">No. of Players</div>
			 			</div>
					}
					{teams && teams.length > 0 &&
						
						teams.map((el, index)=> {

						 	return  <div className="row bdr" key={"team-"+index} onClick={(e)=>this.goToRoster(el.id)}>
						 				<div className="col-sm-4 col-md-4 col-lg-4"> {el.name}</div>
						 				<div className="col-sm-4 col-md-4 col-lg-4"> {el.fullName}</div>
						 				<div className=" col-sm-4 col-md-4 col-lg-4"> {el.roster.length}</div>
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

export default connect(mapStateToProps)(TeamDetails);