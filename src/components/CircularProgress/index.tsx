// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Components
import { CircularProgress as MCircularProgress } from "@material-ui/core";

interface IProps {
	hidden?: boolean;
}

export default class CircularProgress extends React.Component<IProps> {
	public render() {
		return (
			<div className="progressContainer" hidden={this.props.hidden}>
				<MCircularProgress size={120} hidden={this.props.hidden} />
			</div>
		);
	}
}
