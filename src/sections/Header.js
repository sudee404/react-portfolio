import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import img from "../images/image-05.png";
import ButtonLink from "../ui/ButtonLink";
import "./header.css";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ minHeight: "100vh", position: "relative" }} id="home">
                <div
                    className="custom-shape-divider-bottom-1663163981"
                    style={{ fill: this.props.color }}
                >
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            className="shape-fill"
                        />
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            className="shape-fill"
                        />
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"
                        />
                    </svg>
                </div>

                <div className="row d-flex align-items-center justify-content-center mx-0 py-md-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="p-5 rounded-3">
                            <div className="py-5"></div>
                            <div className="py-5 py-lg-0"></div>
                            <h2 className="  display-5 fw-bolder">HELLO</h2>
                            <h2 className="  display-3 fw-bolder">
                                I AM <span className="text-purple">SUDI</span>
                            </h2>
                            <div className="lead fw-bolder">
                                <Typewriter
                                    options={{
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(
                                                "Full-Stack Web Developer"
                                            )

                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString(
                                                "Data Analyst"
                                            )
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("Android Developer")
                                            .start();
                                    }}
                                />
                            </div>
                            <div
                                className="pt-3"
                            >
                                
                                <ButtonLink
                                    text="Hire Me"
                                    link={"https://www.upwork.com/freelancers/~0125f71b5182fcca25"}
                                />
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 pt-3 d-none d-md-block d-lg-block  d-xl-block">
                        <div className="pe-lg-5 pe-md-4 pt-3 ">
                            <img className="card-img" src={img} alt="Title" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
