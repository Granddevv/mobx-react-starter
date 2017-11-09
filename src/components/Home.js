import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		return (

			<div>
				<header>
					<div>
						<h1>React Mobx APP</h1>
					</div>
					<div>
						<h4>
							start from create react app.
						</h4>
					</div>
				</header>
			</div>
		);
	}
}
