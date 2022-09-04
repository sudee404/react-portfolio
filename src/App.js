import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./ui/About";
import Cover from "./ui/Cover";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import NavBar from "./ui/NavBar";
import Portfolio from "./ui/Portfolio";
import Services from "./ui/Services";
import Work from "./ui/Work";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: "bg-purple-50 text-dark",
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
                classes: "bg-purple-50 text-dark",
                theme: "light",
            });
        }
    };
    render() {
        return (
            <Router>
                <div
                    className={this.state.classes}
                    style={{ minHeight: "100vh" }}
                >
                    <NavBar
                        handleChange={this.handleChange}
                        theme={this.state.theme}
                    />
                    <Routes>
                        <Route
                            exact
                            path="/home"
                            element={
                                <div>
                                    <Header /> <About /> <Services />{" "}
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
                        <Route
                            path="/"
                            element={
                                <div>
                                    <Header /> <About /> <Services />{" "}
                                    <Portfolio />
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        );
    }
}
