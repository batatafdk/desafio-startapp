// MARK: React
import * as React from "react";
import "./style.scss";

interface IProps {
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
}

export default class FilledButton extends React.Component<IProps> {
	public render() {
		return (
			<button
				className={`filledButton ${this.props.className}`}
				disabled={this.props.disabled}
				onClick={this.props.onClick}
			>
				<span>{this.props.children}</span>
			</button>
		);
	}
}
