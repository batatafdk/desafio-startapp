// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Mobx
import { observer, inject } from "mobx-react";

// MARK: Resources
import strings from "../../resources/strings";

// MARK: Stores
import { RouterStore } from "mobx-react-router";

// MARK: Components
import FilledButton from "../../components/FilledButton";

interface IProps {
	routerStore: RouterStore;
}

@inject("routerStore")
@observer
export default class HomePage extends React.Component<IProps> {
	public render() {
		const { routerStore } = this.props;

		return (
			<div className="homePageContainer">
				<FilledButton onClick={() => alert(strings.helloWorld)}>{strings.helloWorld}</FilledButton>
			</div>
		);
	}
}
