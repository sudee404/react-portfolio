import React, { Component } from "react";
import img from "../images/image-03.png";

export default class About extends Component {
    render() {
        return (
            <div className="row align-items-md-stretch mx-0" style={{minHeight:'100vh'}}>
                <div className="py-3"></div>
                <div className="col-md-6">
                    <div className="h-100  rounded-3 text-white">
                        
                        <img className="card-img" src={img} alt="Title" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100  rounded-3">
                        <div className="mb-4 rounded-3">
                            <div className="container-fluid flex text-center">
                                <div className="col-md-8 fs-4 text-center">
                                    <h1 className="display-5 fw-bold text-purple rounded-5 p-3">
                                        About Me
                                    </h1>
                                    <div className="p-lg-3">
                                        I am Sudi Abdalla , a Computer
                                        Technology student at Multimedia
                                        University of Kenya. 
                                    </div>
                                    <button
                                        className="btn bg-purple btn-outline-light btn-md m-3"
                                        type="button"
                                    >
                                        Download CV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
