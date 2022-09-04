import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./ui/About";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import NavBar from "./ui/NavBar";
import Example from "./ui/Example";
import Portfolio from "./ui/Portfolio";
import Services from "./ui/Services";
import Work from "./ui/Work";

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
                    style={{overflowY: "scroll" }}
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
