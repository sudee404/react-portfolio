import React from "react";

class TabDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: props.selected,
        };
    }
    toggleHeader = (id) => {
        this.setState({ selected: id });
    };
    button = (text, id) => {
        const selectedClass = "btn btn-default rounded-0 btn-primary col m-0";
        const unSelectedClass =
            "btn btn-default rounded-0 btn-outline-primary border-0 col m-0";
        return (
            <button
                className={
                    this.state.selected === id ? selectedClass : unSelectedClass
                }
                onClick={this.toggleHeader.bind(this, id)}
                key={id}
            >
                {text}
            </button>
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
                    <div className="card-header row mx-0 p-0">
                        {categories.map((text, id) => this.button(text, id))}
                    </div>
                    <div className="card-body">
                        {}
                    </div>
                </div>
            </div>
        );
    }
}
// #endregion

export default TabDemo;
