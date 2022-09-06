import React, { Component } from "react";
import { CardProduct } from "../ui/Card";
import git1 from "../images/git1.png";
import img1 from "../images/image-04.png";
import img2 from "../images/image-05.png";
import img3 from "../images/image-06.png";

export default class Portfolio extends Component {
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
        const loadProjects = () =>
            skills.map((skill) => {
                const data = {
                    skill: skill,
                    description: descriptions.at(skills.indexOf(skill)),
                    image: images.at(skills.indexOf(skill)),
                };
                return (
                    <div
                        className="col-sm-12 col-md-6 col-lg-4 p-lg-5 pb-5"
                        key={skill}
                    >
                        <CardProduct data={data} />
                    </div>
                );
            });
        return (
            <div className=" bg-transparent ">
                <div className="p-lg-5 py-5 mb-4 rounded-3">
                    <div className="container-fluid pt-5">
                        <h1 className="display-5 fw-bold">Portfolio</h1>
                        <p className="col-md-8 fs-4">
                            The following list displays some of my projects.Some
                            have been completed while others are still in
                            development. View in github by clicking below.
                        </p>
                        <a
                            className="btn btn-danger btn-md btn-icon"
                            href="https://github.com/sudee404"
                            type="button"
                        >
                            <img
                                src={git1}
                                className="img-fluid img"
                                style={{ height: "20px", width: "50px" }}
                                alt=""
                            />
                        </a>
                    </div>
                </div>

                <ul
                    className="nav nav-tabs d-flex justify-content-center fw-bolder"
                    id="myTab"
                    role="tablist"
                    style={{ fontVariant: "small-caps" }}
                >
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active btn-outline-none"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                        >
                            Web
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                        >
                            Android
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="messages-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#messages"
                            type="button"
                            role="tab"
                            aria-controls="messages"
                            aria-selected="false"
                        >
                            Data Science
                        </button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div
                        className="tab-pane active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    >
                        <div className="row mx-0 d-flex justify-content-center">
                            {loadProjects()}
                            {loadProjects()}
                        </div>
                    </div>
                    <div
                        className="tab-pane"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                    >
                        <div className="row mx-0 d-flex justify-content-center">
                            {loadProjects()}
                            {loadProjects()}
                        </div>
                    </div>
                    <div
                        className="tab-pane"
                        id="messages"
                        role="tabpanel"
                        aria-labelledby="messages-tab"
                    >
                        <div className="row mx-0 d-flex justify-content-center">
                            {loadProjects()}
                            {loadProjects()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
