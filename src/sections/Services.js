import React, { Component } from "react";
import img1 from "../images/image-08.png";
import img2 from "../images/image-02.png";
import img3 from "../images/image-13.png";
import Card from "../ui/Card";
import Cover from "../ui/Cover";
import axios from "axios";
import Loader from "../ui/Loader";
export default class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount = () => {
        // const url = "http://localhost:8000/services/";
        const url1 = "http://ip172-18-0-10-ccf00j8ja8q000am6aag-8000.direct.labs.play-with-docker.com/services/"
        axios
            .get(url1)
            .then((response) => {
                this.setState({
                    data: response.data.results,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        const images = [img1, img2, img3];
        const loadServices = () =>
            this.state.data.map((skill) => {
                const data = {
                    skill: skill.name,
                    description: skill.description,
                    image: images.at(this.state.data.indexOf(skill)),
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
        const coverText = () => (
            <div className="pt-5 mb-4 rounded-3">
                <div className="container-fluid text-center">
                    <h1 className="fw-bold">Services</h1>
                    <p className="lead">
                        I offer the following services to the fullest of my
                        abilities.
                    </p>
                </div>
            </div>
        );

        return (
            <div className="pt-5">
                <Cover comp={coverText} />

                <div className="row mx-0 d-flex justify-content-center align-items-center">
                    {this.state.data.length > 0 ? (
                        loadServices()
                    ) : (
                        
                            <Loader/>
                    )}
                </div>
            </div>
        );
    }
}
