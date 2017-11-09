import React, { Component } from "react";


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.counter = this.props.counter;
	}
	render() {
		const counter = this.counter;
		return (
			<div className="homepage"> Home Page
				<h1>This is homepage</h1>
			</div> 
			);
	}
}