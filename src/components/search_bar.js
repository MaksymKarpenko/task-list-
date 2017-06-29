import React, { Component } from 'react';
import ReactDom from 'react-dom';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		}
	}
	
	render() {
		return ( 
		  <div className="search_field">
			 <div className ="row">
			 	<div className = "col-md-12">
			 		<div className="input-group">
    					<div className="input-group-btn">
							<input className="form-control" 
							  placeholder= 'find a video'
							   value = {this.state.term}
							    onChange={ event => this.onInputChange(event.target.value)} />
								  <button type="button" className="btn btn-default">
  									<span className="glyphicon glyphicon-search"></span>
								  </button>
						</div>
					</div>
				</div>
			</div>
		 </div> 
		)
	}
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
};

export default SearchBar;

