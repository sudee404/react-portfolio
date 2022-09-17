import React, { Component } from "react";
import styled from "styled-components";
import img from "../images/image-00.jpg";

export default class Cover extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const Cover = styled.div`
            background-image: url(${img});
            background-attachment: fixed;
            position: sticky;
            background-size: cover;
        `;
        return (
            <Cover>
                <div className="p-5 mb-4 rounded-3">
                    <div className="container-fluid py-5">
                        <p className="col-md-8 fs-4">
                            Using a series of utilities, you can create this
                            jumbotron, just like the one in previous versions of
                            Bootstrap. Check out the examples below for how you
                            can remix and restyle it to your liking.
                        </p>
                        
                    </div>
                </div>
            </Cover>
        );
    }
}
