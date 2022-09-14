import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default class ButtonLink extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        clickHandler: PropTypes.func,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const BtnLink = styled.button`
            text-decoration: none;
            position: absolute;
            border: none;
            font-size: 14px;
            font-family: inherit;
            color: #fff;
            width: 9em;
            height: 3em;
            line-height: 2em;
            text-align: center;
            background: -webkit-gradient(
                linear,
                left top,
                right top,
                from(#03a9f4),
                color-stop(#f441a5),
                color-stop(#ffeb3b),
                to(#03a9f4)
            );
            background: linear-gradient(
                90deg,
                #03a9f4,
                #f441a5,
                #ffeb3b,
                #03a9f4
            );
            background-size: 300%;
            border-radius: 30px;
            z-index: 1;
            &:hover {
                -webkit-animation: ani 8s linear infinite;
                animation: ani 8s linear infinite;
                border: none;
            }
            @-webkit-keyframes ani {
                0% {
                    background-position: 0%;
                }
            
                100% {
                    background-position: 400%;
                }
            }
            
            @keyframes ani {
                0% {
                    background-position: 0%;
                }
            
                100% {
                    background-position: 400%;
                }
            }
            &:before {
                content: '';
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                z-index: -1;
                background: -webkit-gradient(linear, left top, right top, from(#03a9f4), color-stop(#f441a5), color-stop(#ffeb3b), to(#03a9f4));
                background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
                background-size: 400%;
                border-radius: 35px;
                -webkit-transition: 1s;
                transition: 1s;
            }
            
            &:hover::before {
                -webkit-filter: blur(20px);
                filter: blur(20px);
            }
            
            &:active {
                background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
            }
        `;
        return <BtnLink>{this.props.text}</BtnLink>;
    }
}
