import { inspect } from "util";
// MARK: Mobx
import { observable, action } from "mobx";

// MARK: Resources
import handleError from "../../resources/handleError";

export default class UIStore {
	// MARK: LinearLoading
	@observable public linearLoading = false;

	@action
	public showErrorSnackbar = (error: any) => {

		let errorMessage: string;

		if (error.message) {
			errorMessage = error.message;
		} else {
			errorMessage = inspect(error);
		}
		this.showSnackbar(errorMessage);
	}

	@action
	public setLinearLoading = (linearLoading: boolean) => {
		this.linearLoading = linearLoading;
	}

	@action
	public clearLinearLoading = () => {
		this.linearLoading = false;
	}

	// MARK: CircularLoading
	@observable public circularLoading = false;
	@action
	public setCircularLoading = (circularLoading: boolean) => {
		this.circularLoading = circularLoading;
	}

	@action
	public clearCircularLoading = () => {
		this.circularLoading = false;
	}

	// MARK: Snackbar
	@observable public snackbarMessage: string | null = null;

	@action
	public showSnackbar = (message: string) => {
		this.snackbarMessage = message;
		this.runTimeout(this.clearSnackbar);
	}

	@action
	public showSnackbarError = (error: any) => {
		this.snackbarMessage = handleError(error);
		this.runTimeout(this.clearSnackbar);
	}

	@action
	public clearSnackbar = () => {
		this.snackbarMessage = null;
	}

	// MARK: Dialog
	@observable public dialogTitle: string | null = null;
	@observable public dialogMessage: string | null = null;
	@observable public onDialogConfirm: (() => void) | null = null;

	@action
	public showDialog = (dialogData: { title: string, message: string }, onConfirm?: () => void) => {
		this.dialogTitle = dialogData.title;
		this.dialogMessage = dialogData.message;
		this.onDialogConfirm = onConfirm || null;
	}

	@action
	public clearDialog = () => {
		this.dialogTitle = null;
		this.dialogMessage = null;
		this.onDialogConfirm = null;
	}

	// MARK: Alert
	@observable public alertTitle: string | null = null;
	@observable public alertMessage: string | null = null;
	@observable public onAlertConfirm: (() => void) | null = null;

	@action
	public showAlert = (alertData: { title: string, message: string }, onConfirm?: () => void) => {
		this.onAlertConfirm = onConfirm || (() => {});
		this.alertTitle = alertData.title;
		this.alertMessage = alertData.message;
	}

	@action
	public clearAlert = () => {
		this.alertTitle = null;
		this.alertMessage = null;
		this.onAlertConfirm = null;
	}

	// MARK: General
	@action
	public clear = () => {
		this.clearLinearLoading();
		this.clearCircularLoading();
		this.clearSnackbar();
		this.clearDialog();
		this.clearAlert();
	}

	@action
	public clearTimeout = () => {
		this.runTimeout(this.clear);
	}

	@action
	public runTimeout = (run: () => void) => {
		setTimeout(
			run,
			4000,
		);
	}
}
