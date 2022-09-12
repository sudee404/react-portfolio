import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer m-0 pt-5">
                <div className="p-5">
                    <div className="container-fluid pt-5">
                        
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
