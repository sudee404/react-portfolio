import React, { Component } from "react";
import OwlDemo from "./OwlDemo";
export default class Work extends Component {
    render() {
        return (
            <div className="p-lg-5">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-5 fw-bold">Testimonials</h1>
                    <p className="fs-4 ">
                        Below are all the feedback received from clients who
                        I've worked with before. To give feedback for a project
                        click below
                    </p>
                    <button
                        className="btn bg-purple btn-outline-light btn-md fw-bolder"
                        type="button"
                        style={{ fontFamily: "cursive" }}
                    >
                        VOUCH
                    </button>
                </div>
                <OwlDemo />
            </div>
        );
    }
}
