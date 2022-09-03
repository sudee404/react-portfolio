import React, { Component } from "react";
import img1 from "../images/image-01.png";
import img2 from "../images/image-05.png";
import img3 from "../images/image-16.png";
import NavBar from "./NavBar";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div style={{ minHeight: "100vh" }} className=" " id="home">
                <NavBar handleChange={this.props.handleChange} theme={ this.props.theme} />
                <div className="row align-items-md-stretch mx-0">
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-3">
                            <div className="py-5"></div>
                            <div className="py-3"></div>
                            <h2 className="  display-5 fw-bolder">HELLO</h2>
                            <h2 className="  display-3 fw-bolder">
                                I AM <span className="text-purple">SUDI</span>
                            </h2>
                            <p className="lead fw-bolder">
                                Full-Stack Web Developer
                            </p>
                            <button
                                className="btn text-purple"
                                style={{ borderColor: "purple" }}
                                type="button"
                            >
                                Hire Me
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 py-4 rounded-3 text-white">
                            <img className="card-img" src={img3} alt="Title" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
