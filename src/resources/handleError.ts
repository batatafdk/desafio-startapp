// MARK: Libraries
import { inspect } from "util";

// MARK: Resourses
import strings from "../resources/strings";

export declare enum ErrorType {
	Fatal = "Fatal",
	Connection = "Connection",
}

export default function handleError(e: any): string {
	const apiError: { type?: ErrorType, message?: string } = e;

	if (apiError.message && apiError.type !== ErrorType.Connection && apiError.type !== ErrorType.Fatal) {
		return apiError.message;
	}

	// tslint:disable-next-line: no-console
	console.error(inspect(e));

	return strings.error.default;
}
