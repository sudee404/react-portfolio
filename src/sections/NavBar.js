import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: this.props.theme,
            light:true,
        };
    }

    toggleBtn = () => (this.setState({light:!this.state.light}))

    render() {
        const classes =
            "navbar navbar-expand-md navbar-" +
            this.props.theme;
        const pos = this.props.stick ? " sticky-top " : "";
        return (
            <nav className={classes+pos} style={{background:this.props.color}}>
                <div className="container-fluid">
                    <Link
                        className="navbar-brand fs-1 fw-bolder ps-lg-4"
                        to="/"
                    >
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
                        className={
                            "offcanvas offcanvas-end offcanvas-fullscreen bg-" +
                            this.props.theme
                        }
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
                        <div className="offcanvas-body modal-fullscreen-md-down">
                            <div className="py-5 py-lg-0"></div>
                            <ul
                                className="navbar-nav justify-content-end text-center flex-grow-1 pe-3 fw-bolder fs-5"
                                style={{ fontVariant: "small-caps" }}
                            >
                                <li
                                    className="nav-item"
                                    data-bs-dismiss="offcanvas"
                                >
                                    <Link className="nav-link active" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="nav-item"
                                    data-bs-dismiss="offcanvas"
                                >
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li
                                    className="nav-item"
                                    data-bs-dismiss="offcanvas"
                                >
                                    <Link className="nav-link" to="/services">
                                        Services
                                    </Link>
                                </li>
                                
                                <li
                                    className="nav-item"
                                    data-bs-dismiss="offcanvas"
                                >
                                    <Link className="nav-link" to="/portfolio">
                                        Portfolio
                                    </Link>
                                </li>
                                <li
                                    className="nav-item"
                                    data-bs-dismiss="offcanvas"
                                >
                                    <Link className="nav-link" to="/skills">
                                        Skills
                                    </Link>
                                </li>
                                <li
                                    className="nav-item"
                                    data-bs-dismiss="offcanvas"
                                >
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

                            {!this.state.light && (
                                <button
                                    type="button"
                                    className="btn rounded-pill border-0"
                                    onClick={() => { this.props.toggleTheme(); this.toggleBtn() }}
                                >
                                    <div
                                        style={{ transform: "rotateY(180deg)" }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-moon-stars-fill text-light"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                                        </svg>
                                    </div>
                                </button>
                            )}
                            {this.state.light && (
                                <button
                                    type="button"
                                    className="btn rounded-pill border-0"
                                    onClick={() => { this.props.toggleTheme(); this.toggleBtn() }}
                                >
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-sun-fill text-dark"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                        </svg>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
