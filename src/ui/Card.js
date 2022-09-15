import React, { Component } from "react";
import styled from "styled-components";
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
    render() {
        const [one, two, three, four] = this.props.colors;
        const Card = styled.div`
            background-color: ${three};
            border: ${two};
            border-radius: 1rem;
            padding: 0;
            margin: 0;
            overflow: hidden;
            transition: all 0.4s ease-in;
            box-shadow: 0.4rem 0.4rem 0.6rem ${four};
            &:hover {
                transform: translateY(-1.5rem);
                border: ${one} 0.2em solid;
                border-radius: 2.5rem 0 2.5rem 0;
            }
        `;
        const { name, description, language,svn_url } = this.props.data;
        return (
            <Card
                className="card p-2"
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#modalId"
            >
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">
                        {language}
                    </h6>
                    <p className="card-text">{description}</p>
                    <a className="btn btn-outline-danger" href={svn_url}>Github</a>
                </div>
            </Card>
        );
    }
}
