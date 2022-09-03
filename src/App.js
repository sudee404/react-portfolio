import React, { Component } from "react";
import About from "./ui/About";
import Cover from "./ui/Cover";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Portfolio from "./ui/Portfolio";
import Services from "./ui/Services";
import Work from "./ui/Work";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: "bg-purple-50 text-dark",
            theme:'light',
        };
    }
    
   

    handleChange = (e) => {
        const { checked } = e.target;
        if (checked) {
            this.setState({
                classes: "bg-dark text-light",
                theme:'dark',
            });
        } else {
            this.setState({
                classes: "bg-purple-50 text-dark",
                theme:'light',
            });
        }
    };
    render() {
        return (
            <div className={this.state.classes}>
                
                    <Header handleChange={this.handleChange} theme={ this.state.theme} />
                    <About />
                    <Services />
                    <Portfolio />
                    <Work />
                <Footer />
                <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
                <a class="navbar-brand" href="#">Navbar</a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#fat">@fat</a>
                    </li>
                </ul>
            </nav>
            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                <h4 id="fat">@fat</h4>
            </div>
            </div>
            
        );
    }
}
