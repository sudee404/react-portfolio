import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";
import img1 from "../images/image-01.png";
import img2 from "../images/image-02.png";
import img3 from "../images/image-03.png";
import img4 from "../images/image-04.png";
import img5 from "../images/image-05.png";
import img6 from "../images/image-06.png";
import img7 from "../images/image-07.png";
import img8 from "../images/image-08.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
export class OwlDemo extends Component {
    render() {
        const options = {
            margin: 10,
            nav: true,
            autoplay: true,
            rewind: true,
            dots:false,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 2,
                },
                800: {
                    items: 2,
                },
            },
        };
        return (
            <div>
                <div className="container-fluid bg-transparent p-3">
                    <OwlCarousel {...options} className="bg-transparent">
                        {images.map((image) => {
                            return (
                                <div
                                    className="card m-lg-5 m-2 border-0 shadow-lg bg-transparent"
                                    key={image.name}
                                >
                                    <div className="row g-0 mx-0 d-flex justify-content-center">
                                        <div className="col-md-4 d-none d-md-block d-lg-block">
                                            <img
                                                src={image}
                                                className="img-fluid p-2"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    John Doe
                                                </h5>
                                                <p className="card-text">
                                                    This is a wider card with
                                                    supporting text below as a
                                                    natural lead-in to
                                                    additional content. This
                                                    content is a little bit
                                                    longer.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Last updated 3 mins ago
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default OwlDemo;
