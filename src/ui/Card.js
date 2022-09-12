import React, { Component } from "react";
import Modal from "./Modal";

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        const { skill, description, image } = this.props.data;
        return (
            <div className="card border-0 shadow-md bg-transparent card1">
                <img src={image} className="card-img-top p-5 h-100" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{skill}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        );
    }
}

export class CardProduct extends Component {
    handleClick = () => {};
    render() {
        const { skill, description, image } = this.props.data;
        return (
            <div>
                <div className="card border-0 shadow-md bg-transparent card1">
                    <img
                        src={image}
                        className="card-img-top h-100 p-5"
                        alt="..."
                    />
                    <div
                        className="card-img-overlay over text-center"
                        onClick={this.handleClick}
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                    >
                        <span className="fw-bolder display-1  p-5">+</span>
                    </div>
                </div>
                <div className="card border-0 shadow-md bg-transparent card1">
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">{skill}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
                <Modal />
            </div>
        );
    }
}

export class CardProject extends Component {
    handleClick = (e) => {};
    render() {
        const { name, description, poster } = this.props.data;
        return (
            <div className="col-lg-4 card border-0 bg-transparent p-5">
                <div className="card border-0 bg-transparent">
                    <img
                        src={poster}
                        className="card-img-top"
                        alt="..."
                    />
                    <div
                        className="card-img-overlay over text-center"
                        onClick={this.handleClick}
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                    >
                        <span className="fw-bolder display-1  p-5">+</span>
                    </div>
                </div>
                <div className="card border-0 shadow-md bg-transparent card1">
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
                <Modal />
            </div>
        );
    }
}
