import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";

@inject("store")
@observer
export default class Login extends Component {
	render() {
		return (
			<div>
				<h1>Content Page</h1>
				{this.props.store.authenticated &&
					!this.props.store.authenticating &&
					<Redirect to="/" />}
			</div>
		);
	}
}
