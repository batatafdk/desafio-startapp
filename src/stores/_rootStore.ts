import { RouterStore } from "mobx-react-router";
import UIStore from "./_UIStore";

export const routerStore = new RouterStore();
export const uiStore = new UIStore();

export const rootStore = {
	routerStore,
	uiStore,
};
