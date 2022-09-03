import React, { Component } from "react";

export default class Button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          color: 'btn btn-default m-2 '+this.props.color,
          text: this.props.text,
          onclick: this.props.onclick,
      }
    }
    
    render() {
        
        return (
            <button type="button" className={this.state.color} onClick={this.state.onclick} >
                {this.state.text}
            </button>
        );
    }
}
