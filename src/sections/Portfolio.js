import axios from "axios";
import React, { Component } from "react";
import ButtonLink from "../ui/ButtonLink";
import { CardProject } from "../ui/Card";
import { Loader2 } from "../ui/Loader";
import TabDemo from "../ui/TabDemo";

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
        const url = "https://api.github.com/users/sudee404/repos";
        try {
            const response = await axios.get(url);
            const data = await response.data;
            this.setState({
                data: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
    loadProjects = () =>
        this.state.data.map((item) => (
            <div key={item.url} className="col-lg-4 col-md-6 col-sm-12 p-3">
                <CardProject data={item} colors={this.props.colors} />
            </div>
        ));

    render() {
        return (
            <div className="p-lg-5 py-5">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Portfolio</h1>
                    <p className="col-md-8 fs-4">
                        The following list displays all of my public repositories from github .Some
                        have been completed while others are still in
                        development. You can clone some and play around with
                        them.
                    </p>

                    <ButtonLink
                        text="Github"
                        link={"https://github.com/sudee404"}
                    />
                </div>
                <div className="py-5"></div>
                <TabDemo selected={1} data={'' } />

                <div className="row d-flex justify-content-center mx-0 g-3 mt-5">
                    {this.state.data.length > 0 ? (
                        this.loadProjects()
                    ) : (
                        <Loader2 color={this.props.color} />
                    )}
                </div>
            </div>
        );
    }
}
