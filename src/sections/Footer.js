import React, { Component } from "react";
import img3 from "../images/image-16.png";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer m-0 pt-5">
                <div className="p-5">
                    <div className="container-fluid pt-5">
                        <h1 className="fw-bold text-center">Sudi</h1>
                        <div className="row mx-0 d-flex justify-content-center text-center">
                            <div className="col-sm-12 col-lg-4">Column</div>
                            <div className="col-sm-12 col-lg-4">Column</div>
                            <div className="col-sm-12 col-lg-4">Column</div>
                        </div>

                        <hr />
                        <div className="text-center">
                            <div>Developed using ReactJs and Django</div>
                            <small className="text-muted">
                                <span>&copy;</span> All Rights Reserved{" "}
                                {new Date().getUTCFullYear()}
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
