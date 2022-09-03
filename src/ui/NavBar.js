import React, { Component } from "react";

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: this.props.theme,
        };
    }

    render() {
        const classes = "navbar navbar-expand-sm  navbar-" + this.props.theme;
        return (
            <nav className={classes}>
                <div className="container-fluid px-5">
                    <a className="navbar-brand fs-1 fw-bolder" href="#">
                        SUDI <span className=" text-purple">.</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarID"
                        aria-controls="navbarID"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse navbar-expand-sm d-flex justify-content-center fw-bolder fs-5"
                        id="navbarID"
                        style={{ fontVariant: "small-caps" }}
                    >
                        <div className="navbar-nav">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="#"
                            >
                                About
                            </a>
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="#"
                            >
                                Services
                            </a>
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="#"
                            >
                                Portfolio
                            </a>
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="#"
                            >
                                Work
                            </a>
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="#"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="position-relative">
                        <label className="toggle-control position-fixed float-end">
                            <input
                                type="checkbox"
                                onChange={this.props.handleChange}
                            />
                            <span className="control" />
                        </label>
                    </div>
                </div>
            </nav>
        );
    }
}
