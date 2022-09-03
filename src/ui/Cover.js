import React, { Component } from "react";
import img1 from "../images/image-01.png";
import img2 from "../images/image-02.png";
import img3 from "../images/image-03.png";

const coverStyle = {
    backgroundImage:img1,
    backgroundAttachment: "fixed",
    position: "sticky",
    backgroundSize: "cover",
    height: "60vh",
};
export default class Cover extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid">
                <div style={{ coverStyle }}>{this.props.comp()}</div>
            </div>
        );
    }
}
