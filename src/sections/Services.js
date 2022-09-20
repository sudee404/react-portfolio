import React, { Component } from "react";
import img1 from "../images/image-08.png";
import img2 from "../images/image-12.png";
import img3 from "../images/image-13.png";
import Card from "../ui/Card";
import Loader from "../ui/Loader";
export default class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount = () => {
        this.setState({
            data: [
                {
                    poster: img2,
                    name: "Android Development",
                    description:
                        "I develop android apps of all kinds using Kotlin. For added functionality , I use Django backend to allow advance data processing.",
                },
                {
                    poster: img3,
                    name: "Data Science",
                    description:
                        "Whether you need simple data analysis and visualisation or modelling and prediction, I've got you .",
                },
                {
                    poster: img1,
                    name: "Web Development",
                    description:
                        "I develop fully responsive websites for different works and purposes. Be it static or dynamic, am still your best pic. No pun intended.",
                },
            ],
        });
    };
    render() {
        const loadServices = () =>
            this.state.data.map((skill) => {
                const data = {
                    skill: skill.name,
                    description: skill.description,
                    image: skill.poster,
                };
                return (
                    <div
                        className="col-sm-12 col-md-6 col-lg-4 p-lg-5 py-5"
                        key={data.skill}
                    >
                        <Card data={data} />
                    </div>
                );
            });

        return (
            <div className="pt-5">
                <div className="pt-5 mb-4 rounded-3">
                    <div className="container-fluid text-center">
                        <h1 className="fw-bold">Services</h1>
                        <p className="lead">
                            I offer the following services to the fullest of my
                            abilities.
                        </p>
                    </div>
                </div>
                <div className="row mx-0 d-flex justify-content-center align-items-center">
                    {this.state.data.length > 0 ? loadServices() : <Loader />}
                </div>
            </div>
        );
    }
}
