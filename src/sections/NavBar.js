import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: this.props.theme,
        };
    }

    render() {
        const classes =
            "navbar navbar-expand-sm sticky-top shadow-lg navbar-" +
            this.props.theme + " bg-"+this.props.theme;
        return (
            <nav className={classes}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fw-bolder ps-lg-4" to="/">
                        SUDI <span className=" text-purple">.</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className={"offcanvas offcanvas-end offcanvas-fullscreen bg-"+this.props.theme}
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5
                                className="offcanvas-title"
                                id="offcanvasNavbarLabel"
                            >
                                <Link
                                    className="navbar-brand fs-1 fw-bolder"
                                    to="/"
                                >
                                    SUDI <span className=" text-purple">.</span>
                                </Link>
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <div className="py-5 py-lg-0"></div>
                            <ul
                                className="navbar-nav justify-content-end text-center flex-grow-1 pe-3 fw-bolder fs-5"
                                style={{ fontVariant: "small-caps" }}
                            >
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link active" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/services">
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/portfolio">
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/work">
                                        Testimonials
                                    </Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
