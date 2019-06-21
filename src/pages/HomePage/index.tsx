// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Mobx
import { observer, inject } from "mobx-react";

// MARK: Resources
import strings from "../../resources/strings";

// MARK: Stores
import { RouterStore } from "mobx-react-router";

// MARK: Layout
import MainLayout from "../../layouts/MainLayout";

// MARK: Components
import FilledButton from "../../components/FilledButton";

interface IProps {
	routerStore: RouterStore;
}

@inject("routerStore")
@observer
export default class HomePage extends React.Component<IProps> {
	public render() {
		return (
			<MainLayout>
				<div className="homePageContainer">
					<h1>{strings.welcome}</h1>

					<FilledButton
						onClick={() => alert(strings.helloWorld)}
					>
						{strings.helloWorld}
					</FilledButton>
				</div>
			</MainLayout>
		);
	}
}
