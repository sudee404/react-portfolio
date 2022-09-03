import React, { Component } from "react";
import img1 from "../images/image-01.png";
import img2 from "../images/image-05.png";

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        const { skill, description, image } = this.props.data;
        return (
            <div className="card border-0 shadow-md bg-transparent card1">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{skill}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        );
    }
}

export class CardProduct extends Component {
    render() {
        const { skill, description, image } = this.props.data;
        return (
            <div>
                <div className="card border-0 shadow-md card1">
                    <img src={image} className="card-img-top h-100" alt="..." />
                    <div className="card-img-overlay over text-center">
                        <span className="fw-bolder display-1  p-5">+</span>
                    </div>
                </div>
                <div className="card border-0 shadow-md bg-transparent card1">
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">{skill}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
