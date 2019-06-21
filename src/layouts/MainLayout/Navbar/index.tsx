// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Resources
import strings from "../../../resources/strings";

interface IProps {
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
}

export default class Navbar extends React.Component<IProps> {
	public render() {
		return (
			<>
				<header className="toolbar">
					<nav>
						<div className="navbar-content">
							<img src="/logo_horizontal.png" alt={strings.logo.alt} />
						</div>
					</nav>
				</header>
				<div className="navbarPlaceholder" />
			</>
		);
	}
}
