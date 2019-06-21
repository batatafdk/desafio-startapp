// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Components
import { LinearProgress as MLinearProgress} from "@material-ui/core";

interface IProps {
	hidden?: boolean;
}

export default class LinearProgress extends React.Component<IProps> {
	public render() {
		return (
			<MLinearProgress hidden={this.props.hidden} />
		);
	}
}
