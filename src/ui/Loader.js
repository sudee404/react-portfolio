import React, { Component } from "react";
import "./loader.css";
export default class Loader extends Component {
    render() {
        return (
            <div className="spinner">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        );
    }
}
export class Loader2 extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="circle" style={{ backgroundColor: this.props.color }} />
                <div className="circle" style={{ backgroundColor: this.props.color }} />
                <div className="circle" style={{ backgroundColor: this.props.color }} />
                <div className="shadow" />
                <div className="shadow" />
                <div className="shadow" />
            </div>
        );
    }
}
