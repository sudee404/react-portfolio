import React, { Component } from "react";
import Carousel from "./Carousel";

export default class Modal extends Component {
    render() {
        return (
            <div>
                <div
                    className="modal fade"
                    id="modalId"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="modalTitleId"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered " role="document">
                        <div className="modal-content">
                        <Carousel/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


