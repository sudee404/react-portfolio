import React, { Component } from "react";
import img1 from "../images/image-08.png";
import img2 from "../images/image-02.png";
import img3 from "../images/image-13.png";
import Card from "./Card";
import Cover from "./Cover";
export default class Services extends Component {
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
            skills.map((skill) => {
                const data = {
                    skill: skill,
                    description: descriptions.at(skills.indexOf(skill)),
                    image: images.at(skills.indexOf(skill)),
                };
                return (
                    <div className="col-sm-12 col-md-6 col-lg-4 p-lg-5 py-5" key={skill}>
                        <Card data={data} />
                    </div>
                );
            });
        const coverText = () => (
            <div className="p-5 mb-4 rounded-3">
                <div className="container-fluid text-center">
                    <h1 className="display-5 fw-bold">Services</h1>
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
