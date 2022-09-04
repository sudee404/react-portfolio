import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer pt-5" style={{minHeight:'100vh'}}>
                <div className="container pt-5">
                    <span className="pt-5">
                        <div className="p-lg-5 mb-4 bg-purple text-light rounded-3">
                            <div className="container-fluid py-5 text-center">
                                <h1
                                    className="display-5 fw-bold"
                                    style={{ fontFamily: "Helvetica" }}
                                >
                                    GET A QUOTE
                                </h1>
                                <p className="fs-4">
                                    Pick a project type below to get a quote
                                </p>
                                <div className="d-flex row mx-0 justify-content-center">
                                    <div className="mb-3 col-sm-12 col-lg-8">
                                        <label
                                            htmlFor="cities"
                                            className="form-label"
                                        >
                                            Category
                                        </label>
                                        <select
                                            className="form-control form-control-md text-center"
                                            name="cities"
                                            id="cities"
                                        >
                                            <option>Web Development</option>
                                            <option>Data Science</option>
                                            <option>Android Development</option>
                                        </select>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button
                                            type="button"
                                            name="catalog"
                                            id="catalog"
                                            className="btn btn-outline-light btn-default"
                                        >
                                            Catalog
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </footer>
        );
    }
}
