// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Components
import { Snackbar as MSnackbar} from "@material-ui/core";

interface IProps {
	snackbarMessage?: string | null;
}

export default class Snackbar extends React.Component<IProps> {
	public render() {
		const { snackbarMessage } = this.props;

		return (
			<MSnackbar
				className="snackbar"
				open={!!snackbarMessage}
				message={<h3>{snackbarMessage}</h3>}
				ContentProps={{ "aria-describedby": "Alert" }}
			/>
		);
	}
}
