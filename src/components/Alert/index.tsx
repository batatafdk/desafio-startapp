// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Resources
import strings from "../../resources/strings";

// MARK: Components
import { Dialog as MDialog } from "@material-ui/core";
import { DialogActions as MDialogActions } from "@material-ui/core";
import { DialogContent as MDialogContent } from "@material-ui/core";
import { DialogContentText as MDialogContentText } from "@material-ui/core";
import { DialogTitle as MDialogTitle } from "@material-ui/core";
import { Button as MButton} from "@material-ui/core";

interface IProps {
	onAlertConfirm?: (() => void) | null;
	clearAlert: () => void;
	alertMessage?: string | null;
	alertTitle?: string | null;
}

export default class Alert extends React.Component<IProps> {
	private onConfirmClick = () => {
		const { onAlertConfirm, clearAlert } = this.props;

		if (onAlertConfirm) {
			onAlertConfirm();
		}

		clearAlert();
	};

	public render() {
		const { clearAlert, alertMessage, alertTitle } = this.props;

		return (
			<MDialog
				open={(!!alertMessage && alertMessage !== "") || (!!alertTitle && alertTitle !== "")}
				onClose={clearAlert}
			>
				{alertTitle && <MDialogTitle>{alertTitle}</MDialogTitle>}
				{alertMessage &&
					<MDialogContent>
						<MDialogContentText>
							{alertMessage}
						</MDialogContentText>
					</MDialogContent>
				}
				<MDialogActions>
					<MButton
						onClick={() => this.onConfirmClick()}
						variant="contained"
						autoFocus
					>
						{strings.ok}
					</MButton>
				</MDialogActions>
			</MDialog>
		);
	}
}
