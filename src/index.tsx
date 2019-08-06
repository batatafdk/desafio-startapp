// MARK: React
import * as React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

// MARK: Mobx
import { Provider } from "mobx-react";
import { rootStore } from "./stores/_rootStore";

// MARK: Routing
import { Router, Route, Switch } from "react-router-dom";
import * as history from "history";
import { syncHistoryWithStore } from "mobx-react-router";
const browserHistory = history.createBrowserHistory();
syncHistoryWithStore(browserHistory, rootStore.routerStore);

// MARK: Pages
import HomePage from "./pages/HomePage";

ReactDOM.render(
	(
		<Provider {...rootStore}>
			<Router history={rootStore.routerStore.history}>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</Router>
		</Provider>
	),
	document.getElementById("app"),
);
