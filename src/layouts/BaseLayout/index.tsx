// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Mobx
import { inject, observer } from "mobx-react";

// MARK: Stores
import UIStore from "../../stores/_UIStore";

// MARK: Components
import Snackbar from "../../components/Snackbar";
import CircularProgress from "../../components/CircularProgress";
import LinearProgress from "../../components/LinearProgress";
import Dialog from "../../components/Dialog";
import Alert from "../../components/Alert";

interface IProps extends IStores {}
interface IStores {
	uiStore: UIStore;
}

@inject("uiStore")
@observer
export default class BaseLayout extends React.Component<IProps> {
	public static defaultProps: IStores;

	public componentDidMount() {
		this.props.uiStore.clearTimeout();
	}

	public render() {
		const { uiStore } = this.props;

		return (
			<>
				<LinearProgress
					hidden={!uiStore.linearLoading}
				/>
				<CircularProgress
					hidden={!uiStore.circularLoading}
				/>
				<Snackbar
					snackbarMessage={uiStore.snackbarMessage}
				/>
				<Dialog
					onDialogConfirm={uiStore.onDialogConfirm}
					clearDialog={uiStore.clearDialog}
					dialogMessage={uiStore.dialogMessage}
					dialogTitle={uiStore.dialogTitle}
				/>
				<Alert
					onAlertConfirm={uiStore.onAlertConfirm}
					clearAlert={uiStore.clearAlert}
					alertMessage={uiStore.alertMessage}
					alertTitle={uiStore.alertTitle}
				/>
			</>
		);
	}
}
