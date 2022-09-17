import React from "react";
import styled from "styled-components";

class TabDemo extends React.Component {
    toggleHeader = async (id) => {
        return await this.props.toggleData(id);
    };
    button = (text, id) => {
        const [three, four, five] = this.props.colors.slice(2,-1) ;
        const selectedStyle = {
            backgroundColor: four,
        };
        const unSelectedStyle = {
            backgroundColor: three,
        };
        const Button = styled.button`
            text-decorations: none;
            &:hover{
                border-color:${four};
                background-color:rgba(0,0,0,.2);
            }
        `;
        return (
            <Button
                className={"btn btn-default rounded-0 col m-0 "+five}
                style={
                    this.props.selected === id ? selectedStyle : unSelectedStyle
                }
                onClick={this.toggleHeader.bind(this, id)}
                key={id}
            >
                {text}
            </Button>
        );
    };

    render() {
        const categories = [
            "Programming",
            "Web Development",
            "Data Science",
            "Android",
        ];

        return (
            <div>
                <div className="card bg-transparent border-0 rounded-0 container-fluid m-0">
                    <div className="card-header  row mx-0 p-0">
                        {categories.map((text, id) => this.button(text, id))}
                    </div>
                </div>
            </div>
        );
    }
}

export default TabDemo;
