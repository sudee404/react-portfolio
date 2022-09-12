import axios from "axios";
import React, { Component } from "react";
import { Spinner } from "reactstrap";
// import { CardProduct } from "../ui/Card";
import git1 from "../images/git1.png";
import { ButtonLink } from "../ui/Button";
import { CardProject } from "../ui/Card";

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "All",
            labels: [],
            data: [],
            loaded: false,
        };
    }

    componentDidMount() {
        this.loadData();
    }
    loadData = async () => {
        // const url = "http://localhost:8000/projects/";
        const url1 =
            "http://ip172-18-0-10-ccf00j8ja8q000am6aag-8000.direct.labs.play-with-docker.com/projects/";
        try {
            const response = await axios.get(url1);
            const data = await response.data;
            this.setState({
                data: data.results,
                labels: data.results,
            });
        } catch (error) {
            console.log(error);
        }
    };
    loadProjects = () =>
        this.state.data.map((item) => (
            <CardProject data={item} key={item.url} />
        ));

    render() {
        return (
            <div
                className="p-lg-5 py-5"
                style={{ background: this.props.color }}
            >
                <div className="container-fluid pt-5">
                    <h1 className="display-5 fw-bold">Portfolio</h1>
                    <p className="col-md-8 fs-4">
                        The following list displays some of my projects.Some
                        have been completed while others are still in
                        development. You can clone some and play around with
                        them.
                    </p>
                    <a
                        className="btn btn-danger btn-md btn-icon"
                        href="https://github.com/sudee404"
                        type="button"
                    >
                        <img
                            src={git1}
                            className="img-fluid img"
                            style={{ height: "20px", width: "50px" }}
                            alt=""
                        />
                    </a>
                </div>
                
                <div className="row justify-content-center mx-0 card-group">
                    {this.state.data.length > 0 ? (
                        this.loadProjects()
                    ) : (
                        <Spinner
                            type="border"
                            style={{
                                height: "10vh",
                                width: "10vh",
                                margin: "10vh",
                            }}
                        >
                            Loading
                        </Spinner>
                    )}
                </div>
            </div>
        );
    }
}
