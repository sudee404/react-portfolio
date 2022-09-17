import React, { Component } from "react";
import ButtonLink from "../ui/ButtonLink";
import OwlDemo from "../ui/OwlDemo";
export default class Testimonials extends Component {
    render() {
        return (
            <div className="p-lg-5 pt-5">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-5 fw-bold">Testimonials</h1>
                    <p className="fs-4 ">
                        Below is where I'll show all the reviews given by my clients.
                        
                    </p>
                    <div className="text-center me-5 pe-5 py-2"><ButtonLink text="Leave a Review"/></div>
                    
                </div>
                <OwlDemo />
            </div>
        );
    }
}
