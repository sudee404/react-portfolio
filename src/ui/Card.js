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
        const IconLink = styled.a`
            color: #000000;
            transition: all 0.4s ease-in;
            &:hover {
                color: ${four};
            }
        `;
        const { name, description, language, svn_url, homepage } =
            this.props.data;

        return (
            <Card
                className="card p-2"
                style={{ cursor: "pointer" }}
            >
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">
                        {language}
                    </h6>
                    <p className="card-text">{description}</p>
                    <IconLink href={svn_url}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </IconLink>
                    {homepage && (
                        <IconLink href={homepage}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                fill="currentColor"
                                className="bi bi-browser-chrome ms-3"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                />
                            </svg>
                        </IconLink>
                    )}
                </div>
            </Card>
        );
    }
}
