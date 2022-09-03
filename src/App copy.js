import React from "react";
import Button from "./ui/Button";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bg: "bg-dark",
            fc: "text-dark",
        };
    }
    btnTypes = [
        {
            color: "bg-primary",
            text: "Blue",
        },
        {
            color: "bg-danger",
            text: "Red",
        },
        {
            color: "bg-success",
            text: "Green",
        },
        {
            color: "bg-secondary",
            text: "Gray",
        },
    ];
    handleClick = (e) => {
        const color = e.target.classList[3].split('-')[1];
        this.setState({
            bg: 'bg-'+color,
            fc:'text-'+color,
        })
    };
    addButtons = () =>
        this.btnTypes.map((type) => (
            <Button
                color={type.color}
                text={type.text}
                onclick={this.handleClick}
                key={type.text}
            />
        ));
    render() {
        const class1 = "h-100 p-5 text-white  shadow-lg border rounded-3 " + this.state.bg;
        const class2 = this.state.fc + " h-100 p-5 bg-light  shadow-lg border rounded-3 ";
        return (
            <div className="row align-items-md-stretch mx-0 mt-5">
                <div className="col-md-6 p-3">
                    <div className={class1}>
                        <h2>Change the background</h2>
                        <p>
                            Swap the background-color utility and add a
                            `.text-*` color utility to mix up the jumbotron
                            look. Then, mix and match with additional component
                            themes and more.
                        </p>
                        <button className="btn btn-outline-light "type="button">
                            Example button
                        </button>
                    </div>
                </div>
                <div className="col-md-6  p-3">
                    <div className={class2}>
                        <h2>Add borders</h2>
                        <p>
                            Or, keep it light and add a border for some added
                            definition to the boundaries of your content. Be
                            sure to look under the hood at the source HTML here
                            as we've adjusted the alignment and sizing of both
                            column's content for equal-height.
                        </p>
                        <button className="btn " type="button">
                            Example button
                        </button>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-evenly py-4">
                    {this.addButtons()}
                </div>
            </div>
        );
    }
}

export default App;
