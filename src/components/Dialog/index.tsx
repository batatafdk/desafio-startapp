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
import { Button as MButton } from "@material-ui/core";

interface IProps {
	onDialogConfirm: (() => void) | null;
	clearDialog: () => void;
	dialogMessage?: string | null;
	dialogTitle?: string | null;
}

export default class Dialog extends React.Component<IProps> {
	private onConfirmClick = () => {
		const { onDialogConfirm, clearDialog } = this.props;

		if (onDialogConfirm) {
			onDialogConfirm();
		}

		clearDialog();
	};

	public render() {
		const { clearDialog, dialogMessage, dialogTitle } = this.props;

		return (
			<MDialog
				open={((!!dialogTitle && dialogTitle !== "") || (!!dialogMessage && dialogMessage !== ""))}
				onClose={clearDialog}
			>
				{dialogTitle && <MDialogTitle>{dialogTitle}</MDialogTitle>}
				{dialogMessage &&
					<MDialogContent>
						<MDialogContentText>
							{dialogMessage}
						</MDialogContentText>
					</MDialogContent>
				}
				<MDialogActions>
					<MButton
						onClick={clearDialog}
						variant="outlined"
					>
						{strings.cancel}
					</MButton>
					<MButton
						onClick={this.onConfirmClick}
						variant="contained"
						autoFocus
					>
						{strings.confirm}
					</MButton>
				</MDialogActions>
			</MDialog>
		);
	}
}
