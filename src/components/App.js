import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class App extends Component {

	constructor(props) {
		super(props);

		 this.state = {
		 	text: ''
		 }
	}

	addTask() {
		
		this.props.addTask(this.state.text);
	}

	render() {
		console.log('this.props', this.props);
		return  (
			<div className="App">
				<div className="title">
					Task list
				</div>
				<div className="form-inline">
					<div className="from-group">
						<input 
							className="form-control"
							placeholder="I have to..."
							onChange = {event => this.setState({text: event.target.value})}
						/>
					</div>
					<button
						type="button"
						className="btn btn-success"
						onClick={() => this.addTask()}
					> 
						Add Task
					</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {

		return {
			taskList: state
		}
}

export default connect(mapStateToProps, {addTask})(App);