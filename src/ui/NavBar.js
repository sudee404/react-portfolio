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
        const classes = "navbar navbar-expand-sm  navbar-" + this.props.theme;
        return (
            <nav className={classes}>
                <div className="container-fluid px-5">
                    <a className="navbar-brand fs-1 fw-bolder" >
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
                            
                            <Link className="nav-link active" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/services">Services</Link>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            <Link className="nav-link" to="/work">Work</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="position-relative">
                        <label className="toggle-control position-fixed float-end" style={{ zIndex:1}}>
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
