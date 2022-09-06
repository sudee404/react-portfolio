import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import NavBar from "./sections/NavBar";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Work from "./sections/Work";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: "bg-transparent text-dark",
            theme: "light",
        };
    }

    handleChange = (e) => {
        const { checked } = e.target;
        if (checked) {
            this.setState({
                classes: "bg-dark text-light",
                theme: "dark",
            });
        } else {
            this.setState({
                classes: "bg-transparent text-dark",
                theme: "light",
            });
        }
    };
    render() {
        return (
            <Router>
                <div
                    className={this.state.classes}
                >
                    <NavBar theme={this.state.theme} />
                    <div className="position-relative">
                    <label
                        className="toggle-control centered"
                        style={{ zIndex: 1 }}
                    >
                        <input type="checkbox" onChange={this.handleChange} />
                        <span className="control" />
                    </label>
                    </div>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <div>
                                    <Header /> <About /> <Services />
                                    <Portfolio />
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <div>
                                    <About /> <Services /> <Portfolio />
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/services"
                            element={
                                <div>
                                    <Services /> <Portfolio />
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/portfolio"
                            element={
                                <div>
                                    <Portfolio />
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/work"
                            element={
                                <div>
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route path="/contact" element={<Footer />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}
