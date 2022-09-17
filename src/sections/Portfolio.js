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
            selected: 0,
            data: [],
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
    loadProjects = () => {
        return this.getCurrent().map((item) => (
            <div key={item.url} className="col-lg-4 col-md-6 col-sm-12 p-3">
                <CardProject data={item} colors={this.props.colors} />
            </div>
        ));
    };
    getCurrent = () => {
       
        const keys = [
            ["Visual Basic .NET"],
            ["JavaScript", "HTML", "CSS", "Python"],
            ["Jupyter Notebook"],
            ["Java"],
        ];
        return this.state.data.filter((item) => keys[this.state.selected].includes(item.language) );
    };

    toggleData = (id) => {
        this.setState({ selected: id });
    };
    render() {
        return (
            <div className="p-lg-5 py-5">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Portfolio</h1>
                    <p className="col-md-8 fs-4">
                        The following list displays all of my public
                        repositories from github .Some have been completed while
                        others are still in development. You can clone some and
                        play around with them.
                    </p>

                    <ButtonLink
                        text="Github"
                        link={"https://github.com/sudee404"}
                    />
                </div>
                <div className="py-5"></div>
                <TabDemo
                    selected={this.state.selected}
                    toggleData={this.toggleData}
                />

                <div className="row d-flex justify-content-center mx-0 g-3 mt-2">
                    {this.state.data.length > 0 ? (
                        this.loadProjects()
                    ) : (
                            <div className="p-5 container-fluid d-flex justify-content-center align-items-center">
                                <Loader2 color={this.props.color} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
