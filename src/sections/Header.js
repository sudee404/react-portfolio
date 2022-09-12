import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import img from "../images/image-05.png";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ minHeight: "100vh" }} id="home">
                <div className="row align-items-md-stretch mx-0 py-md-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="p-5 rounded-3">
                            <div className="py-lg-5"></div>
                            <h2 className="  display-5 fw-bolder">HELLO</h2>
                            <h2 className="  display-3 fw-bolder">
                                I AM <span className="text-purple">SUDI</span>
                            </h2>
                            <div className="lead fw-bolder">
                                <Typewriter
                                    options={{
                                        loop:true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(
                                                "Full-Stack Web Developer"
                                            )

                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString(
                                                "Data Analyst and ML Expert"
                                            )
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("Android Developer")
                                            .start();
                                        
                                    }}
                                    
                                />
                            </div>
                            <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                            >
                                <button
                                className="btn text-purple  btn-outline-light mt-3"
                                style={{ borderColor: "purple" }}
                                type="button"
                            >
                                Hire Me
                            </button>
                            <button
                                className="btn text-purple  btn-outline-light mt-3"
                                style={{ borderColor: "purple" }}
                                type="button"
                            >
                                Resume
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 pt-3">
                        <div className="pe-lg-5 pe-md-4 pt-lg-5 py-3 ">
                            <img className="card-img" src={img} alt="Title" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
