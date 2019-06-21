// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Components
import BaseLayout from "../BaseLayout";
import Navbar from "./Navbar";

export default class MainLayout extends React.Component {
	public render() {
		const { children } = this.props;

		return (
			<div>
				<div className="mainLayoutContainer">
					<Navbar />
					<div className="mainLayoutChildrenContainer">
						{children}
					</div>
				</div>
				<BaseLayout />
			</div>
		);
	}
}
