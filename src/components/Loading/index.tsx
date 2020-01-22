// MARK: React
import * as React from "react";
import "./style.scss";

export default class Loading extends React.Component {
    public render() {
        return (
            <div className="body">
                <div className="loader"></div>
            </div>
        );
    }
}
