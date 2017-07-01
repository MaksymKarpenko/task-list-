import React, { Component } from 'react';
class App extends Component {
	render() {
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
						/>
					</div>
					<button
						type="button"
						className="btn btn-success"
					> 
						Add Task
					</button>
				</div>
			</div>
		)
	}
}

export default App;