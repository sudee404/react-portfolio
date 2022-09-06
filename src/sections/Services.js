import React, { Component } from "react";
import img1 from "../images/image-08.png";
import img2 from "../images/image-02.png";
import img3 from "../images/image-13.png";
import Card from "../ui/Card";
import Cover from "../ui/Cover";
import axios from 'axios'
export default class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount = () => {
        
        const url = "http://localhost:8000/services/"
        axios.get(url)
            .then((response) => {
                this.setState({
                    data: response.data.results
                })
            }).catch((error) => {
            console.log(error)
        })
    };
    render() {
        const skills = [
            "Web Development",
            "Android Development",
            "Data Science",
        ];
        const descriptions = [
            "I can Design,Code,Test and deploy you a website in the shortest time possible",
            "I can make you an android app with Kotlin. I can also connect it to an existing website",
            "I can perform EDA, visualisation, regression and classification",
        ];
        const images = [img1, img2, img3];
        const loadServices = () =>
            this.state.data.map((skill) => {
                const data = {
                    // skill: skill,
                    // description: descriptions.at(skills.indexOf(skill)),
                    // image: images.at(skills.indexOf(skill)),
                    skill: skill.name,
                    description: skill.description,
                    image: images.at(this.state.data.indexOf(skill)),
                };
                return (
                    <div
                        className="col-sm-12 col-md-6 col-lg-4 p-lg-5 py-5"
                        key={skill}
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
            <div className=" bg-transparent pt-5">
                <Cover comp={coverText} />

                <div className="row mx-0 d-flex justify-content-center">
                    {loadServices()}
                </div>
            </div>
        );
    }
}
