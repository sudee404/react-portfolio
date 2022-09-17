import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import NavBar from "./sections/NavBar";
import Portfolio from "./sections/Portfolio";
import Qualifications from "./sections/Qualifications";
import Services from "./sections/Services";
import Work from "./sections/Work";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: "text-dark",
            theme: "light",
            light: true,
            navStick: false,
            prevPosition:0,
        };
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    };
    handleScroll = (event) => {
        if (window.scrollY > this.state.prevPosition) {
            this.setState({navStick:false})
        }else {
            this.setState({navStick:true})
        }
        this.setState({prevPosition:window.scrollY})
    };
    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    };

    toggleTheme = () => {
        this.setState({ light: !this.state.light });
        if (this.state.light) {
            this.setState({
                classes: "text-light",
                theme: "dark",
            });
        } else {
            this.setState({
                classes: "text-dark",
                theme: "light",
            });
        }
    };

    render() {
        let nightPalette = {
            one: "rgb(22, 33, 62)",
            two: "rgb(15, 52, 96)",
            three: "rgb(83, 52, 131)",
            four: "rgb(233, 69, 96)",
        };
        let lightPalette = {
            one: "rgb(227, 253, 253)",
            two: "rgb(203, 241, 245)",
            three: "rgb(166, 227, 233)",
            four: "rgb(113, 201, 206)",
        };
        const { one, two, three, four } = this.state.light
            ? lightPalette
            : nightPalette;

        return (
            <Router>
                <div
                    className={this.state.classes}
                    style={{ background: one, color: two ,minHeight:'100vh'}}
                >
                    <NavBar
                        theme={this.state.theme}
                        toggleTheme={this.toggleTheme}
                        light={this.state.light}
                        color={one}
                        stick={this.state.navStick}
                    />

                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <div>
                                    <Header color={three}/> <About color={three} />{" "}
                                    <Services color={three} />
                                    <Portfolio color={four} colors={[one,two,three,four]}/>
                                    <Qualifications colors={[one,two,three,four]}/>
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <div>
                                    <About color={two} />{" "}
                                    <Services color={three} />{" "}
                                    <Portfolio color={four} colors={[one,two,three,four]}/>
                                    <Qualifications colors={[one,two,three,four]}/>
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/services"
                            element={
                                <div>
                                    <Services color={three} />{" "}
                                    <Portfolio color={four} colors={[one,two,three,four]}/>
                                    <Qualifications colors={[one,two,three,four]}/>
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/portfolio"
                            element={
                                <div>
                                    <Portfolio color={four} colors={[one,two,three,four]}/>
                                    <Qualifications colors={[one,two,three,four]}/>
                                    <Work />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/skills"
                            element={
                                <div>
                                    <Qualifications colors={[one,two,three,four]}/>
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
