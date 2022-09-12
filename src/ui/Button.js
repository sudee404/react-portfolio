import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "btn btn-default m-2 " + this.props.color,
            text: this.props.text,
            onclick: this.props.onclick,
        };
    }

    render() {
        return (
            <button
                type="button"
                className={this.state.color}
                onClick={this.state.onclick}
            >
                {this.state.text}
            </button>
        );
    }
}

export class ButtonLink extends Component {
    static propTypes = {
        selected: PropTypes.bool,
        text: PropTypes.string.isRequired,
        color: PropTypes.string,
        clickHandler: PropTypes.func,
    };

    static defaultProps = {
        selected: false,
        color: "primary",
    };
    constructor(props) {
      super(props)
        
      this.state = {
         
      }
    }
    

    render() {
        let btnClass = `btn btn-${this.props.color} btn-md m-2 border-0 rounded-pill`;
        return (
            <button type="button" className={btnClass}>
                {this.props.text}
            </button>
        );
    }
}
